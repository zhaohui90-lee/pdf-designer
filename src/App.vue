<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TextEditor from './components/TextEditor.vue'
import EditContainer from './components/EditContainer.vue'
import ToolsView from './views/ToolsView.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="history-info"> 历史记录 </el-aside>
      <el-container>
        <el-header class="editor-header">
          <!-- <text-editor></text-editor> -->
          <router-link to="/">
            <el-button class="editor-work-space" type="primary">工作台</el-button>
          </router-link>
          <router-link to="/render">
            <el-button class="editor-render" type="primary">渲染</el-button>
          </router-link>
          <el-button class="editor-pub" type="success">发布</el-button>
        </el-header>
        <el-divider />
        <el-container class="editor-container">
          <el-aside class="template-tools">
            <ToolsView></ToolsView>
          </el-aside>
          <el-main class="editor-view">
            <router-view />
          </el-main>
          <el-aside class="text-editor">
            <text-editor></text-editor>
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.editor-header,
.editor-container,
.editor-view {
  height: auto;
}
.editor-view:hover {
  border: 1px solid red;
}
.history-info {
  width: 20%;
}
.template-tools {
  width: 100px;
}
.text-editor {
  widows: 200px;
}
.editor-work-space,
.editor-render,
.editor-pub {
  margin: 0 5px;
}
</style>
