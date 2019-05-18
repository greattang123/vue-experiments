<template>
  <div>
    <ul>
      <li>
        <a href="#" class="active">Home</a>
      </li>
      <li>
        <a href="#">News</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li class="right">
        <a href="#">Logout</a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  padding: 5px;
  border: 1px solid red;
  margin: 5px 10px;
}
/* 基于后代选择器，降低与HTML的耦合 */
ul {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: black;
}
a {
  display: block; /*block，填充高度和宽度*/
  color: white;
  text-align: center;
  padding: 10px 15px;
  text-decoration: none;
}
.active {
  background-color: green;
}
a:hover {
  background-color: blue;
}
.right {
  margin-left: auto;
}
</style>
