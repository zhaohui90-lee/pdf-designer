<script setup lang="ts">
import { computed, type Ref } from 'vue'
import { type ContainerItem } from '../../shared/type'
import FontContainer from '../../container/FontContainer.vue'

const fontItems: Ref<ContainerItem[]> = computed(() => {
  return [{ id: Date.now(), data: '' }]
})
</script>

<template>
  <div class="font-template">
    <font-container :items="fontItems">
      <!-- <textarea name="" id="" cols="" rows="2"></textarea> -->
    </font-container>
  </div>
</template>

<style lang="less" scoped>
.font-template {
  display: flex;
  .font-value:hover {
    border: 2px solid lightblue;
  }
}
</style>
