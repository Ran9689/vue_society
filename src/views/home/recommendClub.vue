<template>
  <div class="recommendClub">
    <div class="name">
      <h3>推荐社团</h3>
      <span> 加载更多>>> </span>
    </div>
    <div class="vessel">
      <div
        class="card"
        v-for="(item, index) in clubList.slice(0, 4)"
        :key="index"
      >
        <img :src="item.sopic" alt="" />
        <div class="text">
         <p>{{ item.soname }}</p>
         <p class="socommander">社长: {{ item.socommander }}</p>
          <p class="sosign">{{ item.sosign }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getClub } from "@/utils/banner";
export default {
  data() {
    return {
      clubList: [],
    };
  },
  methods: {
    async _getClub() {
      const { result } = await getClub();
      this.clubList = result;
    },
  },
  mounted() {
    this._getClub();
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.recommendClub {
  width: 1105px;
  min-height: 400px;
  box-shadow: 0 2px 5px gray;
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  flex-flow: column;
  gap: 25px;
}
.name {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  h3 {
    font-size: 1.5rem;
  }
}
.vessel {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.card {
  position: relative;
  width: 250px;
  height: 300px;
  box-shadow: 0 2px 5px gray;
  border-radius: 5px;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .text {
    position: absolute;
    padding: 5px 10px;
    width: 100%;
    height: 80px;
    background: #d5eaf5b5;
    backdrop-filter: blur(5px);
    bottom: 0;
    border-radius: 5px;
    font-size: 1.2rem;
    letter-spacing: 2px;
    display: flex;
    flex-flow: column;
    gap: 5px;
  }
  .sosign,.socommander{
    font-size: 1rem;
    white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }
}
</style>