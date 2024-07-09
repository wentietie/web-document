<script setup>
import {computed, onMounted, ref} from 'vue';
import {Button, Textarea, Modal, Input, message} from 'ant-design-vue'

const diff = ref()
import('diff').then(res => {
  diff.value = res
})

const clipboardObj = navigator.clipboard;

const jsonData1 = ref('');
const jsonData2 = ref('');

const jsonDataSort1 = ref()
const jsonDataSort2 = ref()

const customKey = ref('')
const customSortsKeys = ref([])
const compareResult = ref([])
const showCompare = ref(false)

const leftRef = ref()
const rightRef = ref()

function sortJsonObjectByKeysAscii(obj) {
  if (Array.isArray(obj)) {
    // 如果是数组，则对每个元素进行排序（假设元素也是对象）
    return obj.map(item => sortJsonObjectByKeysAscii(item));
  }

  if (typeof obj !== 'object' || obj === null) {
    // 如果不是对象或数组，则直接返回
    return obj;
  }

  // 获取对象的所有键
  const keys = Object.keys(obj);

  // 根据ASCII码对键进行排序
  keys.sort();

  // 创建一个新的有序对象
  const sortedObj = {};
  keys.forEach(key => {
    // 递归排序嵌套的对象和数组
    sortedObj[key] = sortJsonObjectByKeysAscii(obj[key]);
  });

  return sortedObj;
}

function sortObjectsByCustomKeyValue(obj) {
  Object.keys(obj).forEach(key => {
    if (Array.isArray(Object[key])) {
      obj[key].sort((a, b) => {
        if (customSortsKeys.value.includes(key)) {
          return a[key].localeCompare(b[key]);
        } else {
          return 0;
        }
      });

      obj[key].forEach(item => {
        if (typeof item === 'object' && item) {
          sortObjectsByCustomKeyValue(item);
        }
      })
    }

    if (typeof obj[key] === 'object' && obj[key]) {
      sortObjectsByCustomKeyValue(obj[key]);
    }
  })

  return obj;
}

const sortJsonByCustomKey = (obj) => {
  if (obj && typeof obj === 'string') {
    const sortKey = sortJsonObjectByKeysAscii(JSON.parse(obj))
    return sortObjectsByCustomKeyValue(sortKey);
  }
  return obj
}


const openSortOption = ref(false);
const jsonSort = () => {
  customSortsKeys.value = customKey.value ? customKey.value.split(',') : [];
  openSortOption.value = false
  try {
    jsonDataSort1.value = sortJsonByCustomKey(jsonData1.value);
  } catch (e) {
    Modal.error({
      title: '错误',
      content: 'JSON1解析错误，请输入正确的JSON格式:' + e,
    })
  }
  try {
    jsonDataSort2.value = sortJsonByCustomKey(jsonData2.value)
  } catch (e) {
    Modal.error({
      title: '错误',
      content: 'JSON2解析错误，请输入正确的JSON格式:' + e,
    })
  }
}

const setJsonView = (index) => {
  if (index === '1') {
    jsonDataSort1.value = JSON.parse(jsonData1.value)
  }
  if (index === '2') {
    jsonDataSort2.value = JSON.parse(jsonData2.value)
  }
}

const leftCompare = ref([]);
const rightCompare = ref([]);

const getCompareResult = () => {
  leftCompare.value = []
  rightCompare.value = []
  const diffJson = diff.value.diffJson
  const result = diffJson(jsonDataSort1.value, jsonDataSort2.value)
  console.log(result);
  result.forEach((item, index) => {
    if (!item.added && !item.removed) {
      leftCompare.value.push(item)
      rightCompare.value.push(item)
    }

    if (item.added) {
      const prev = result[index - 1]
      if (prev && !prev.removed) {
        const valueList = []
        for (let i = 0; i < item.count; i++) {
          valueList.push('\n')
        }
        const leftItem = {
          ...item,
          added: false,
          value: valueList.join(' ')
        }
        leftCompare.value.push(leftItem)
        rightCompare.value.push(item)
      }
    }

    if (item.removed) {
      const next = result[index + 1]
      if (next && !next.added) {
        const valueList = []
        for (let i = 0; i < item.count; i++) {
          valueList.push('\n')
        }
        const rightItem = {
          ...item,
          removed: false,
          value: valueList.join(' ')
        }
        leftCompare.value.push(item)
        rightCompare.value.push(rightItem)
      }
      if (next && next.added) {
        leftCompare.value.push({
          ...item,
          removed: false,
          added: false,
          mod: true,
        })
        rightCompare.value.push({
          ...next,
          removed: false,
          added: false,
          mod: true,
        })
      }
    }
  })

  compareResult.value = result
  showCompare.value = true
}

const leftCallback = (e) => {
  rightRef.value.scrollTop = e.target.scrollTop
}
const rightCallback = (e) => {
  leftRef.value.scrollTop = e.target.scrollTop
}
const setLeftScrollListener = () => {
  leftRef.value.addEventListener('scroll', leftCallback)
}

const removeLeftScrollListener = () => {
  leftRef.value.removeEventListener('scroll', leftCallback)
}

const setRightScrollListener = () => {
  rightRef.value.addEventListener('scroll', rightCallback)
}

const removeRightScrollListener = () => {
  rightRef.value.removeEventListener('scroll', rightCallback)
}

// 定义一个函数来复制文本到剪切板
async function copyTextToClipboard(text) {
  try {
    // 使用navigator.clipboard API
    await navigator.clipboard.writeText(text);
    message.info('复制成功!');
    console.log('Text copied to clipboard successfully');
  } catch (err) {
    console.error('Failed to copy text: ', err);
    message.error('浏览器不支持 clipboard API!');
  }
}

const copyJson = (jsonData) => {
  copyTextToClipboard(JSON.stringify(jsonData, null, 2))
}

</script>

<template>
  <div class="json-content">
    <div class="each-json-box">
      <Textarea v-if="!showCompare" v-model:value="jsonData1" placeholder="请输入json"
                @change="setJsonView('1')"></Textarea>
      <div v-if="!showCompare" class="json-view">
        <pre>{{ jsonDataSort1 }}</pre>
      </div>
      <div v-show="showCompare" class="compare-result" ref="leftRef" @mouseover="setLeftScrollListener"
           @mouseout="removeLeftScrollListener">
        <div v-for="item in leftCompare" :key="item.value">
          <span :class="[item.mod && 'modStyle',item.added && 'addStyle', item.removed && 'removeStyle']">{{
              item.value
            }}</span>
        </div>
      </div>
    </div>
    <div class="each-json-box">
      <Textarea v-if="!showCompare" v-model:value="jsonData2" placeholder="请输入json"
                @change="setJsonView('2')"></Textarea>
      <div v-if="!showCompare" class="json-view">
        <pre>{{ jsonDataSort2 }}</pre>
      </div>
      <div v-show="showCompare" class="compare-result" ref="rightRef" @mouseover="setRightScrollListener"
           @mouseout="removeRightScrollListener">
        <div v-for="item in rightCompare" :key="item.value">
          <span :class="[item.mod && 'modStyle',item.added && 'addStyle', item.removed && 'removeStyle']">{{
              item.value
            }}</span>
        </div>
      </div>
    </div>
  </div>
  <div style="text-align: center;margin-top: 10px">
    <Button class="button" type="primary" @click="openSortOption = true">排序</Button>
    <Button v-if="!showCompare" class="button" type="primary" @click="getCompareResult">比对</Button>
    <Button v-if="showCompare" class="button" type="primary" @click="showCompare = false">取消比对</Button>
    <Button class="button" type="primary" @click="copyJson(jsonDataSort1)">复制左侧</Button>
    <Button class="button" type="primary" @click="copyJson(jsonDataSort2)">复制右侧</Button>
  </div>

  <Modal v-model:open="openSortOption" title="自定义排序字段" @ok="jsonSort">
    <Input placeholder="输入自定义数组排序字段的key，多个用英文逗号分隔。" v-model:value="customKey"/>
  </Modal>
</template>

<style scoped>
.json-content {
  width: 100%;
  height: calc(100vh - 190px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.each-json-box {
  width: 49%;
  height: calc(100% - 20px);
}

.each-json-box textarea {
  width: 100%;
  height: 40px;
  resize: none;
  outline: none;
}

.button {
  margin: 0 10px;
}

.json-view {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 10px;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
}

.json-view pre {
  width: 100%;
  height: calc(100% - 15px);
  overflow: auto;
}

.compare-result {
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;;
  border-radius: 6px;
  border: 1px solid #d9d9d9;
}

.compare-result span {
  white-space: pre;
}

.addStyle {
  background-color: #3aa675;
}

.removeStyle {
  background-color: orangered;
}

.modStyle {
  background-color: yellow;
}

</style>