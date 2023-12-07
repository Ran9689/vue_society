<template>
  <div class="clubNav">
    <div class="logo">
      <h2>studentclub</h2>
    </div>
    <ul>
      <li
        v-for="(item, index) in str"
        :key="index"
        @click="setRouter(index)"
        :class="{
          active: index == navIndex,
        }"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="icon[index]"></use>
        </svg>
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIndex: 0,
      str: ["首页", "社团列表", "社团风采", "社团招聘", "社团活动", "个人中心"],
      icon: [
        "#icon-zhuye",
        "#icon-yuangongfengcai",
        "#icon-huodong",
        "#icon-qiyezhaopin",
        "#icon-liebiao",
        "#icon-gerenzhongxin",
      ],
      routers: [
        "homePage",
        "clubList",
        "clubMien",
        "clubRecruit",
        "clubActivity",
        "userCenter",
      ],
    };
  },
  watch: {
    navIndex() {
      if (
        this.navIndex === this.routers.length - 1 &&
        localStorage.getItem("isAuth") === "false"
      ) {
        this.navIndex = 0;
        this.$router.push({
          name: "homePage",
        });
      }
    },
  },
  methods: {
    setRouter(index) {
      this.$router.push({
        name: this.routers[index],
      });
      this.navIndex = index;
    },
  },

  created() {
    const name = this.$router.currentRoute.name;
    this.navIndex = this.routers.indexOf(name);
  },
};
</script>

<style scoped>
.clubNav {
  width: 1540px;
  height: 70px;
  display: flex;
  align-content: center;
  gap: 100px;
  padding-left: 20px;
  box-shadow: 0 2px 4px gray;
  border-radius: 5px;
}
.logo {
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.4rem;
}
ul {
  display: flex;
  list-style: none;
  align-items: center;
  font-size: 1.3rem;
  gap: 10px;
}
li {
  width: 115px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 3px;
}
.active {
  background: #badbfb;
  border-radius: 5px;
}
</style>
