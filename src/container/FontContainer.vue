<script setup lang="ts">
import { computed } from 'vue'
import IconAdd from '../components/icons/IconAdd.vue'
import IconDelete from '../components/icons/IconDelete.vue'
const props = defineProps(['containerId'])
const containerId = computed(() => props.containerId)
</script>

<template>
  <div class="font-container">
    <IconAdd class="hover-action" @click="$emit('addTemplate', Date.now())" />
    <IconDelete class="hover-action" @click="$emit('deleteTemplate', containerId)" />
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.font-container {
  width: 100%;
  text-align: right;
  .hover-action {
    display: none;
    margin: 0 0.2rem;
  }
}
.font-container:hover .hover-action {
  display: inline-block;
}
</style>
