<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
      {{ $store.state.user?.account }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click="handleLogout">
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
const router = useRouter()
const store = useStore()
const handleLogout = () => {
  ElMessageBox.confirm('确认退出吗', {
  }).then(async () => {
    await logout()
    router.push({
      name: 'login'
    })
    store.commit('setUser', null)
    ElMessage({
      type: 'success',
      message: '退出成功'
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消退出'
    })
  })
}

</script>
