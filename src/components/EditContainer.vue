<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useTemplateStore } from '../stores/templateStore'
const templateStore = useTemplateStore()

const row = ref(1)

// 验证
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref({
  text: ''
})
const validateText = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入文本内容'))
  } else {
    callback()
  }
}
const textRule = ref<FormRules<typeof ruleForm>>({
  text: [{ validator: validateText, trigger: 'blur' }]
})

const addText = (formEl: FormInstance | undefined) => {
  if (!formEl) {
    return
  }

  formEl.validate((valid) => {
    if (valid) {
      console.log('新增...')
      templateStore.addTemplate('FontTemplate', Date.now())
    }
  })
}

function addImage() {}
function addTable() {}
</script>

<template>
  <div class="edit-container">
    <div class="plain-text-template">
      <el-form ref="ruleFormRef" :model="ruleForm" class="text-form" :rules="textRule">
        <el-form-item prop="text">
          <el-input
            v-model="ruleForm.text"
            style="width: 140px"
            class="template-name"
            placeholder="请输入文本"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="template-btn" type="primary" @click="addText(ruleFormRef)">
            新增
          </el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="image-template">
      <el-text class="template-name">图片</el-text>
      <el-button class="template-btn" type="primary" size="small" @click="addImage">新增</el-button>
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
      <el-button class="template-btn" type="primary" size="small" @click="addTable">新增</el-button>
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
    margin: 2px;
  }
  .plain-text-template {
    display: flex;
    .text-form {
      display: flex;
    }
  }
}
</style>
