<script setup lang="ts">
import { vDrag } from '../directives/drag'
import FontTemplate from '../components/templates/FontTemplate.vue'
import ImageTemplate from '../components/templates/ImageTemplate.vue'
import TableTemplate from '../components/templates/TableTemplate.vue'
</script>

<template>
  <div class="tools-container">
    <div class="text" v-drag:tmp="FontTemplate">
      <el-icon :size="20" color="var(--el-color-info)">
        <Edit />
      </el-icon>
      <el-text class="icon-name" type="info">文字</el-text>
    </div>
    <div class="picture" v-drag:tmp="ImageTemplate">
      <el-icon :size="20" color="var(--el-color-info)">
        <Picture />
      </el-icon>
      <el-text class="icon-name" type="info">图片</el-text>
    </div>
    <div class="table" v-drag:tmp="TableTemplate">
      <el-icon :size="20" color="var(--el-color-info)">
        <Grid />
      </el-icon>
      <el-text class="icon-name" type="info">表格</el-text>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tools-container {
  display: flex;
  flex-direction: column;

  .text,
  .picture,
  .table {
    display: flex;
    margin: 5px 0;
    text-decoration: none;
    .icon-name {
      padding-left: 0.4rem;
    }
  }
  .text:hover,
  .picture:hover,
  .table:hover {
    border: 1px solid var(--el-color-info);
    cursor: grab;
  }
}
</style>
