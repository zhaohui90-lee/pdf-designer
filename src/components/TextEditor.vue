<script setup lang="ts">
import { ref } from 'vue'

const level = ref('')
const levelOptions = [
  {
    value: 0,
    name: '标题1'
  },
  {
    value: 1,
    name: '标题2'
  },
  {
    value: 2,
    name: '正文'
  },
  {
    value: 3,
    name: '说明'
  }
]
const family = ref('')
const familyOptions = [
  {
    value: 0,
    name: 'Inter'
  },
  {
    value: 1,
    name: 'Helvetica Neue'
  },
  {
    value: 2,
    name: 'Helvetica'
  },
  {
    value: 3,
    name: 'PingFang SC'
  },
  {
    value: 4,
    name: 'Hiragino Sans GB'
  },
  {
    value: 5,
    name: 'Microsoft YaHei'
  },
  {
    value: 6,
    name: '微软雅黑'
  },
  {
    value: 7,
    name: 'Arial'
  },
  {
    value: 8,
    name: 'sans-serif'
  }
]
const textSize = ref(12)
</script>

<template>
  <div class="text-editor">
    <!-- 字体：级别#类型#大小#颜色#加粗#倾斜#下划线#有序列表#无序列表  -->
    <div class="text-level">
      <el-select v-model="level" placeholder="请选择">
        <el-option
          v-for="(item, index) in levelOptions"
          :key="index"
          :label="item.name"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="text-family">
      <el-select v-model="family" placeholder="请选择">
        <el-option
          v-for="(item, index) in familyOptions"
          :key="index"
          :label="item.name"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
    <div class="text-size">
      <el-input-number v-model="textSize" :min="4" :max="20"></el-input-number>
    </div>
    <div class="text-font-bold">
      <el-text tag="b">B</el-text>
    </div>
    <div class="text-font-slant">
      <el-text tag="i">I</el-text>
    </div>
    <div class="text-font-underline">
      <el-text tag="ins">U</el-text>
    </div>
  </div>
</template>

<style lang="less" scoped>
.text-editor {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  .text-level {
    width: 120px;
    padding: 0 5px;
  }
  .text-family {
    width: 150px;
    padding: 0 5px;
  }
  .text-size {
    padding: 0 5px;
  }
  .text-font-bold,
  .text-font-slant,
  .text-font-underline {
    display: flex;
    width: 32px;
    text-align: center;
    justify-content: center;
  }
}
</style>
