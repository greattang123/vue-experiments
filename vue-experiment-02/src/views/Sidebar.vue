<template>
  <div>
    <ul>
      <li>
        <router-link to="/example01">单向绑定</router-link>
      </li>
      <li>
        <router-link to="/example02">双向绑定</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
div {
  width: 300px;
  border: 2px solid red;
  display: inline-block;
}
</style>
