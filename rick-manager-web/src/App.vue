<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
[v-cloak] {
  display: none;
}
html,
body,
#app {
  height: 1800px;
  padding: 0;
  margin: 0;
  color: #606977;
}
</style>
