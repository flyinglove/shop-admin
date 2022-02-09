<template>
  <el-icon @click="handleCollapse">
    <fold />
  </el-icon>
</template>
<script lang="ts" setup>
import {
  Fold
} from '@element-plus/icons-vue'
import { useStore } from '@/store'

const store = useStore()
const handleCollapse = () => {
  console.log(2233, store.state.isCollapse)
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>
