<template>
  <div class="menu-view">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      popper-class="menu-view__popper"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'

import { useSettingsStore } from '@/stores/settings'

const settingsStore = useSettingsStore()
</script>

<style lang="less" scoped>
.menu-view {
  --el-menu-bg-color: #f8fafc;

  flex: 1;
  // margin: 20px;
  padding: 10px;
  box-shadow: var(--el-box-shadow-light);
  background-color: var(--el-menu-bg-color);
  border-radius: 10px;

  .el-menu {
    border: none;
    :deep(.el-sub-menu__title),
    :deep(.el-menu-item) {
      border-radius: 10px;
    }
  }
}
</style>

<style lang="less">
.menu-view__popper {
  --el-border-radius-small: 10px;
  --el-menu-bg-color: #f8fafc;
}
</style>
