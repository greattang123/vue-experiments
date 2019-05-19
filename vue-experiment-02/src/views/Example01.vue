<template>
  <div>
    <h1>Single Binding</h1>
    <p>用户名：{{ user.name }}</p>
    <br />
    <p v-if="user.level == 'admin'">管理员可见</p>
    <br />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>inserttime</th>
        </tr>
      </thead>
      <tr v-for="(c, index) in courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ mydate(c.insertTime) }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    user: { name: "GT", level: "admin" },
    courses: [
      { id: 1, name: "Java", insertTime: "2019-05-19T08:38" },
      { id: 2, name: "Web开发技术", insertTime: "2019-05-20T09:38" },
      { id: 3, name: "系统程序设计", insertTime: "2019-05-21T10:38" }
    ]
  }),
  computed: {
    mydate() {
      return d => d.replace("T", " ");
    }
  }
};
</script>
