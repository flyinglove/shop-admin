<template>
  <el-breadcrumb seperate-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
      :to="{path: item.path}"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { computed } from '@vue/runtime-core'

const router = useRouter()

const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta && item.meta.title)
})
</script>
