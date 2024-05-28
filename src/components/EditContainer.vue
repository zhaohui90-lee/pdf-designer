<script setup lang="ts">
import { ref } from 'vue'

const row = ref(1)
</script>

<template>
  <div class="edit-container">
    <div class="plain-text-template">
      <el-text class="template-name">文本</el-text>
      <el-button class="template-btn" type="primary" size="small">新增</el-button>
    </div>

    <div class="image-template">
      <el-text class="template-name">图片</el-text>
      <el-button class="template-btn" type="primary" size="small">新增</el-button>
    </div>

    <div class="table-template">
      <el-text class="template-name">表格</el-text>
      <el-input-number
        v-model="row"
        :min="1"
        :max="5"
        size="small"
        class="input-volumn"
      ></el-input-number>
      <el-button class="template-btn" type="primary" size="small">新增</el-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.edit-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .template-name,
  .template-btn {
    padding: 5px 5px;
    margin: 2px;
  }
}
</style>
