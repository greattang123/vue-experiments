<template>
  <div id="app">
    <vueheader />
    <!-- html不区分大小写，防止与原生HTML标签冲突 -->
    <div id="main">
      <sidebar />
      <vuearticle />
    </div>
    <vuefooter />
  </div>
</template>
<script>
export default {
  components: {
    vueheader: () => import("@/views/Header"),
    vuefooter: () => import("@/views/Footer"),
    sidebar: () => import("@/views/Sidebar"),
    vuearticle: () => import("@/views/Article")
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
#main {
  border: 1px solid red;
  margin: 5px 0px;
}
</style>
