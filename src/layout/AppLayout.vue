<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <app-menu />
      </el-aside>
      <el-container>
        <el-header>
          <toggle-sidebar />
          <bread-crumb />
          <full-screen />
          <user-info />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import AppMenu from './components/AppMenu.vue'
import ToggleSidebar from './components/ToggleSidebar.vue'
import BreadCrumb from './components/Breadcrumb.vue'
import FullScreen from './components/FullScreen.vue'
import UserInfo from './components/UserInfo.vue'
</script>
<style>
.common-layout .el-aside {
    background-color: #304156;
    color: #333;
    width: auto;
}
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
}
.common-layout > .el-container {
  margin-bottom: 40px;
  height: 100vh;
}
</style>
