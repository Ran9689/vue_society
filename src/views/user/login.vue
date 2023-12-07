<template>
  <div class="userlogin">
    <div class="login">
      <div class="box">
        <p class="table">Login</p>
        <br />
        <input v-model.trim="wrod" type="text" placeholder="账号" />
        <input v-model="pass" type="password" placeholder="密码" />
        <br />
        <a href="#" class="go" @click="goHome">GO</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userLogin",
  data() {
    return {
      wrod: "",
      pass: "",
    };
  },
  methods: {
    goHome(e) {
      e.preventDefault();
      if (this.wrod !== "" && this.pass != "") {
        const obj = {
          account: this.wrod,
          password: this.pass,
        };
        this.$router.push({
          name: "homePage",
          params: {
            obj,
          },
        });
        return;
      }
      alert("为空");
    },
  },
};
</script>

<style lang='scss' scoped>
.userlogin {
  position: absolute;
  width: 100vw;
  height: 100vh;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  background: url("../../assets/1.tuwenxinxizhongxindalou.jpg") no-repeat;
  background-size: cover;
}
.login {
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.4)
  );
  /* 使背景模糊化 */
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px gainsboro;
  border-radius: 15px;
}

.table {
  font: 900 40px "";
  text-align: center;
  letter-spacing: 5px;
  color: #3d3d3d;
}

.box {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.box input {
  width: 400px;
  height: 100%;
  margin-bottom: 20px;
  outline: none;
  border: 0;
  padding: 10px;
  background-color: transparent;
  border-bottom: 3px solid rgb(150, 150, 240);
  font: 900 16px "";
}

.go {
  text-align: center;
  display: block;
  height: 50px;
  padding: 12px;
  font: 900 20px "";
  border-radius: 10px;
  margin-top: 20px;
  color: #fff;
  letter-spacing: 3px;
  background-image: linear-gradient(to left, #fd79a8, #a29bf6);
}
</style>