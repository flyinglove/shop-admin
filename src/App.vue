<!-- <script lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  setup () {
    const helloworld = ref<InstanceType<typeof HelloWorld> |null>(null)
    onMounted(() => {
      console.log(helloworld.value, '22')
    })
  },
  components: {
    HelloWorld
  }
})
</script> -->
<script lang="ts" setup>
// import { ref } from 'vue'
// 如果不用变量接收的话， 本地如果定义同名变量会覆盖掉props传入的值

// const emit = defineEmits(['increment'])
// const count = ref(100)
// // const increment = () => {
// //   count.value++
// //   emit('increment')
// // }

</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
