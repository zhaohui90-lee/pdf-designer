<script setup lang="ts">
import { ref } from 'vue'
import { useTemplateStore } from '../../stores/templateStore'
const props = defineProps(['templateId'])
const templateStore = useTemplateStore()
function remove() {
  templateStore.removeTemplate(props.templateId)
}

const input = ref('')
</script>

<template>
  <div class="font-template">
    <el-input v-model="input" class="font-value" size="small"></el-input>
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
