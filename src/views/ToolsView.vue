<script setup lang="ts">
import { vDrag } from '../directives/drag'
import ImageTemplate from '../components/templates/ImageTemplate.vue'
import TableTemplate from '../components/templates/TableTemplate.vue'
</script>

<template>
  <div class="tools-container">
    <!-- <div class="text" v-drag:FontTemplate="FontTemplate">
      <el-icon :size="20" color="var(--el-color-info)">
        <Edit />
      </el-icon>
      <el-text class="icon-name" type="info">文字</el-text>
    </div> -->
    <div class="qr-code">
      <img src="../assets/icon/qrcode.svg" alt="" />
      <el-text class="icon-name" type="info">二维码</el-text>
    </div>
    <div class="picture" v-drag:tmp="ImageTemplate">
      <el-icon :size="20" color="var(--el-color-info)">
        <Picture />
      </el-icon>
      <el-text class="icon-name" type="info">图片</el-text>
    </div>
    <div class="table" v-drag:tmp="TableTemplate">
      <img src="../assets/icon/table.svg" alt="" />
      <el-text class="icon-name" type="info">表格</el-text>
    </div>
    <div class="code">
      <img src="../assets/icon/code.svg" alt="" />
      <el-text class="icon-name" type="info">代码</el-text>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tools-container {
  display: flex;
  flex-direction: column;

  .text,
  .qr-code,
  .picture,
  .table,
  .code {
    display: flex;
    margin: 5px 0;
    text-decoration: none;
    .icon-name {
      padding-left: 0.4rem;
    }
  }
  .text:hover,
  .qr-code:hover,
  .picture:hover,
  .table:hover,
  .code:hover {
    border: 1px solid var(--el-color-info);
    cursor: grab;
  }
}
</style>
