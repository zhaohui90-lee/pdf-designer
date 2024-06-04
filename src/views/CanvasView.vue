<script setup lang="ts">
import { useTemplateStore } from '../stores/templateStore'
import FontTemplate from '../components/templates/FontTemplate.vue'
import { computed, ref } from 'vue'

const templateStore = useTemplateStore()
let templates = computed(() => templateStore.templates)
const input = ref('')
</script>

<template>
  <div class="canvas-view"></div>
</template>

<style lang="less" scoped>
.canvas-view {
  background-color: beige;
  width: 100%;
  height: 100%;
}
</style>
