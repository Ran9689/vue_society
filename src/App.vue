<template>
  <div id="app">
    <Head></Head>
    <clubMain></clubMain>
  </div>
</template>
<script>
import Head from "@/components/clubHead.vue";
import clubMain from "@/components/clubMain.vue";
import "@/assets/font_lbzm9kt0ouk/iconfont";
export default {
  components: { Head, clubMain },
};
</script>
<style>
@font-face {
  font-family: "阿里妈妈东方大楷";
  src: url("./assets/AlimamaDongFangDaKai-Regular.ttf");
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "阿里妈妈东方大楷";
  text-decoration: none;
}
::-webkit-scrollbar {
  display: none;
}
#app {
  width: 100%;
  min-height:100lvh;
  background: linear-gradient(to right, #d5eaf5, #ededed);
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
  /* justify-content: center; */
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
