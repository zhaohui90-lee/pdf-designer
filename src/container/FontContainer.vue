<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type ContainerItem } from '../shared/type'
import IconAdd from '../components/icons/IconAdd.vue'
import IconDelete from '../components/icons/IconDelete.vue'
const props = defineProps(['containerId', 'items'])
const items: Ref<ContainerItem[]> = ref(props.items)

function addItem() {
  items.value.push({ id: Date.now(), data: '' })
}
function removeItem(id: number) {
  items.value = items.value.filter((item) => item.id !== id)
}
</script>

<template>
  <div class="font-container">
    <div class="font-items" v-for="(item, index) in items" :key="index">
      <slot></slot>
      <IconAdd class="hover-action" @click="addItem" />
      <IconDelete class="hover-action" @click="removeItem(item.id)" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.font-container {
  width: 100%;
  text-align: right;
  display: flex;
  .font-items {
    flex: 1;
  }
  .hover-action {
    display: none;
    margin: 0 0.2rem;
  }
}
.font-container:hover .hover-action {
  display: inline-block;
}
</style>
