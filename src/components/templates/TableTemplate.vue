<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['tableData'])
const tableData = computed(() => props.tableData)
// 表格可编辑
</script>

<template>
  <div class="table-container">
    <table id="editable-table">
      <thead>
        <tr>
          <th scope="col">标题一</th>
          <th scope="col">标题二</th>
          <th scope="col">标题三</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td scope="col">{{ item }}</td>
          <td scope="col">{{ item }}</td>
          <td scope="col">{{ item }}</td>
        </tr>
      </tbody>
    </table>
    <button id="addButton">+</button>
  </div>
</template>

<style lang="less" scoped>
#editable-table:hover {
  border: 2px solid red;
}
#addButton {
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
#editable-table:hover #addButton {
  display: block;
}
</style>
