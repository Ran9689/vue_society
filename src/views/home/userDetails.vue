<template>
  <div class="user">
    <div class="bg">
      <img class="bgImg" :src="bgImg" />
    </div>
    <div class="headImage">
      <img class="userSvg" :src="pic" @click="goLogin" />
      <!-- @/assets/头像.svg -->
      <ul class="information">
        <li class="active">{{ name }}</li>
        <li>个性签名: {{ signature }}</li>
        <li>标签: 唱歌/跳舞/rap/打篮球</li>
        <li>社团: {{ club }}</li>
        <li class="more">加载更多</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { login } from "@/utils/login";

export default {
  props: ["obj"],
  data() {
    return {
      bgImg: "https://image.yc-hequan.com/background.jpg",
      name: "未登录",
      signature: "欲买桂花同载酒，终不似，少年游。",
      pic: "http://image.yc-hequan.com/users.png",
      club: "未加入",
    };
  },
  watch: {
    obj(newValue) {
      this.userLogin(newValue.account, newValue.password);
    },
  },
  methods: {
    goLogin() {
      if (localStorage.getItem("isAuth")==='true')  return
      
      this.$router.push({
        name: "login",
      });
    },
    async userLogin(word, pass) {
      const data = await login(word, pass);
      console.log(data);
      if (data.status == "200") {
        this.$Message({
          message: "登入成功",
          type: "success",
        });

        data.joinClub.forEach((item) => {
          this.club = item.ucname;
        });
        data.result.forEach((item) => {
          this.bgImg = item.bag;
          this.name = item.name;
          this.signature = item.sign;
          this.pic = item.avatar;
        });
        localStorage.setItem("user", word);
        localStorage.setItem("pass", pass);
        localStorage.setItem("isAuth", true);
      } else {
        this.$Message({
          showClose: true,
          message: "登入失败",
          type: "error",
        });
        localStorage.setItem("isAuth", false);
      }
    },
  },
  created() {
    const user = localStorage.getItem("user");
    const pass = localStorage.getItem("pass");
    if (user !== "undefined" && pass !== "undefined") {
      this.userLogin(user, pass);
    } else {
      this.$Message({
        showClose: true,
        message: "自动登入失败",
        type: "error",
      });
    }
  },
};
</script>

<style lang='scss' scoped>
.user {
  width: 380px;
  max-height: 310px;
  min-height: 375px;
  box-shadow: 0px 2px 5px gray;
  border-radius: 5px;
  position: relative;
}
.bg {
  width: 100%;
  height: 180px;
  position: absolute;
  .bgImg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
}
.headImage {
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
  width: 350px;
  height: 290px;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0);
  padding: 10px;
  .userSvg {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    // cursor: pointer;
  }
  .information {
    list-style: none;
    font-size: 1rem;
    display: flex;
    flex-flow: column;
    gap: 10px;
    width: 100%;

    li {
      height: 25px;
      line-height: 25px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .active {
    font-size: 1.4rem;
    text-align: center;
  }
  .more {
    height: 30px !important;
    line-height: 30px !important;
    text-align: center;
    border: 2px solid #f56c6c;
    border-radius: 5px;
    background: linear-gradient(
        55deg,
        #f56c6c,
        #f56c6c,
        #f56c6c,
        #f56c6c,
        #f56c6c,
        #f56c6c
      )
      no-repeat center right;
    background-size: 0 100%;
    transition: background-size 800ms;
  }
  .more:hover {
    background-position-x: left;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>