<template>
  <div>
    <ul>
      <li class="flex">
        <a href="#">云技术管理</a>
        <ul>
          <li>
            <a href="#">云服务器</a>
          </li>
          <li>
            <a href="#">云数据库</a>
          </li>
          <li>
            <a href="#">负载均衡</a>
          </li>
        </ul>
      </li>
    </ul>
    <ul>
      <li class="flex">
        <a href="#">安全管理</a>
        <ul>
          <li>
            <a href="#">云盾控制台</a>
          </li>
          <li>
            <a href="#">DDoS高防IP</a>
          </li>
          <li>
            <a href="#">Web应用防火墙</a>
          </li>
          <li>
            <a href="#">CA证书服务</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  border: 1px solid red;
  padding: 5px;
  margin: 5px 10px;
  display: inline-block;
  vertical-align: top;
  width: 180px;
}
/* 一二级ul */
ul {
  background-color: aliceblue;
  padding: 0;
  margin: 0;
  list-style-type: none;
}
a {
  display: block; /*block，填充高度和宽度*/
  color: black;
  padding: 5px 10px;
  text-decoration: none;
}
a:hover {
  color: blue;
  background-color: brown;
}
/* 一级标题 */
li.flex > a {
  color: green;
  font-weight: bold;
  background-color: black;
}
</style>
