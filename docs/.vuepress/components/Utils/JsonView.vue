<script setup>
import {Tabs, TabPane, Textarea} from 'ant-design-vue';
import {computed, ref} from "vue";
import {JsonViewer} from 'vue3-json-viewer'
import "vue3-json-viewer/dist/index.css";

const activeKey = ref('1');
const jsonInput = ref('');

const jsonValue = computed(() => {
  try {
    return JSON.parse(jsonInput.value);
  } catch (e) {
    return null;
  }
})
</script>

<template>
  <div style="padding-top: 10px">
    <Tabs v-model:activeKey="activeKey" type="card">
      <TabPane key="1" tab="JSON 输入">
        <div class="tab-content">
          <Textarea style="height: 100%;resize: none" v-model:value="jsonInput"></Textarea>
        </div>
      </TabPane>
      <TabPane key="2" tab="JSON View">
        <div class="tab-content viewer">
          <JsonViewer v-if="jsonValue" :value="jsonValue" copyable></JsonViewer>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<style scoped>
.tab-content {
  height: calc(100vh - 340px);
}

.viewer {
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  padding: 10px;
  overflow: auto;
}
</style>