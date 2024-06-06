<script setup lang="ts">
import { h, onMounted, ref } from 'vue'
import FontContainer from '../../container/FontContainer.vue'

const input = ref('')
const fontTemplateId = ref<number>()
const fontOriginalContainer = ref<HTMLElement | null>(null)
const clonedContainer = ref<HTMLElement | null>(null)

function addTemplate(id: number) {
  console.log('add...', id)
  fontTemplateId.value = id
  if (fontOriginalContainer.value && clonedContainer.value) {
    console.log(fontOriginalContainer.value)
  } else {
    console.error('fontOriginalContainer or clonedContainer is not defined')
  }
}

onMounted(() => {
  if (!fontOriginalContainer.value) {
    console.error('fontOriginalContainer is not defined after mount')
  }
  if (!clonedContainer.value) {
    console.error('clonedContainer is not defined after mount')
  }
})
</script>

<template>
  <div class="font-template">
    <font-container
      @add-template="addTemplate"
      :fontTemplateId="fontTemplateId"
      ref="fontOriginalContainer"
    >
      <el-input v-model="input" class="font-value" size="small"></el-input>
    </font-container>
    <div ref="clonedContainer"></div>
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
