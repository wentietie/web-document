<script setup>

import {Button, UploadDragger} from "ant-design-vue";
import {InboxOutlined} from "@ant-design/icons-vue";
import {ref} from "vue";

const fileName = ref('')
const fileBlob = ref()
const imgSrc = ref('')

function handleImage(file) {
  console.log(file);
  fileName.value = file.name
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // 设置压缩后的图片尺寸
      const width = img.width;
      const height = img.height;

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob((blob) => {
        fileBlob.value = blob
        imgSrc.value = URL.createObjectURL(fileBlob.value)
      }, 'image/jpeg', 0.5); // 第二个参数是质量（0-1）
    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(file);
}

const execDownload = () => {
  const link = document.createElement('a');
  link.href = imgSrc.value;
  link.download = fileName.value;
  link.click();
}
</script>

<template>
  <div style="padding-top: 10px; text-align: center">
    <UploadDragger
        name="file"
        :showUploadList="false"
        :beforeUpload="handleImage"
    >
      <p class="ant-upload-drag-icon">
        <InboxOutlined></InboxOutlined>
      </p>
      <p class="ant-upload-text">点击或拖拽文件到此处</p>
    </UploadDragger>
    <div class="img">
      <img v-if="imgSrc" :src="imgSrc" alt="">
    </div>
    <Button v-if="imgSrc" @click="execDownload">下载压缩文件</Button>
  </div>
</template>

<style scoped>
.img {
  margin: 10px 0;
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
}

.img img {
  max-width: 100%;
  max-height: 100%;
}
</style>