<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TextEditor from './components/TextEditor.vue'
import EditContainer from './components/EditContainer.vue'
</script>

<template>
  <!-- <header> -->
  <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  <!-- <TextEditor></TextEditor> -->
  <!-- </header> -->

  <!-- <RouterView /> -->
  <div class="common-layout">
    <el-container>
      <el-aside class="history-info"> 历史记录 </el-aside>
      <el-container>
        <el-header class="editor-header">
          <text-editor></text-editor>
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
            <edit-container></edit-container>
          </el-aside>
          <el-main class="editor-view">
            <router-view />
          </el-main>
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
.history-info {
  width: 20%;
}
.template-tools {
  width: 25%;
}
.editor-work-space,
.editor-render,
.editor-pub {
  margin: 0 5px;
}
</style>
