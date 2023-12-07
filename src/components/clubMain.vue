<template>
  <main>
    <!-- 保持活跃(防止路由切换，导致组件销毁,数据丢失) -->
    <keep-alive>
      <!-- 路由展示区 -->
      <router-view></router-view>
    </keep-alive>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
main {
  width: 1540px;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  /* align-items: center; */
  gap: 30px;
}
</style>