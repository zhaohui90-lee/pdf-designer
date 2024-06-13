<script setup lang="ts">
import { useTemplateStore } from '../stores/templateStore'
</script>

<template>
  <div class="canvas-view">
    <div class="canvas-edit-area" contenteditable="true"></div>
  </div>
</template>

<style lang="less" scoped>
.canvas-view {
  background-color: beige;
  width: 100%;
  height: 100%;
  .canvas-edit-area {
    height: 100%;
  }
}
</style>
