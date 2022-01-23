<template>
  <h1>
    hello world
    <Foo msg="haha" />
    <abc />
  </h1>
</template>
<script lang="tsx" setup>
import Foo from './foo'
const abc = <h1>abc</h1>

</script>
