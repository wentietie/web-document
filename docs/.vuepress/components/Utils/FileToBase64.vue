<script setup>
import {ref} from 'vue';
import {UploadDragger, Textarea} from 'ant-design-vue';
import {InboxOutlined} from '@ant-design/icons-vue';

const text = ref('');

const convert2Base64 = (file) => {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  })
}

const beforeUpload = (file) => {
  convert2Base64(file).then(res => {
    text.value = res;
  })
  return false;
}
</script>

<template>
  <div style="padding-top: 10px">
    <UploadDragger
        name="file"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
    >
      <p class="ant-upload-drag-icon">
        <InboxOutlined></InboxOutlined>
      </p>
      <p class="ant-upload-text">点击或拖拽文件到此处</p>
    </UploadDragger>

    <Textarea v-model:value="text" class="text"></Textarea>
  </div>
</template>

<style scoped>
.text {
  margin-top: 10px;
  height: calc(100vh - 400px);
  resize: none;
}
</style>