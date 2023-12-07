<template>
  <div class="imgList" @mouseenter="startTimer" @mouseleave="removeTimer">
    <div
      class="item"
      v-for="(item, index) in Banners"
      :key="index"
      :class="{
        img_left: index == prevIndex,
        img_rigth: index == rigthIndex,
        img_center: index == curIndex,
      }"
    >
      <img :src="item" />
    </div>
    <!-- 左右按钮 -->
    <div class="prev" @click="prev">
      <ion-icon name="chevron-back-outline"></ion-icon>
    </div>
    <div class="next" @click="next">
      <ion-icon name="chevron-forward-outline"></ion-icon>
    </div>
    <!-- 指示器 -->
    <div class="pointer">
      <span
        v-for="(i, index) in Banners"
        :key="index"
        @mouseenter="pointer(index)"
        :class="{
          active: index == curIndex,
        }"
      ></span>
    </div>
  </div>
</template>
<script>
import { _getBanner } from "@/utils/banner";

export default {
  name: "carousel_",
  props: ["Carwidth", "Carheight"],
  data() {
    return {
      timer: null,
      curIndex: 0,
      Banners: [],
    };
  },
  computed: {
    rigthIndex() {
      return this.curIndex + 1 >= this.Banners.length ? 0 : this.curIndex + 1;
    },
    prevIndex: {
      get() {
        return this.curIndex - 1 <= -1
          ? this.Banners.length - 1
          : this.curIndex - 1;
      },
      set() {},
    },
  },
  methods: {
    async getBanner() {
      //type参数 所指定的值，除去2 均未做处理,传递0，1，3报错，需要单独处理
      const banners = await _getBanner();
      banners.forEach(({ img }) => {
        this.Banners.push(img);
      });
    },
    next() {
      this.leftIndex = this.curIndex;
      this.curIndex = ++this.curIndex % this.Banners.length;
    },
    prev() {
      this.curIndex =
        this.curIndex !== 0 ? --this.curIndex : this.Banners.length - 1;
      this.prevIndex = this.curIndex - 1;
    },
    pointer(index) {
      this.curIndex = index;
    },
    startTimer() {
      clearInterval(this.timer);
    },
    removeTimer() {
      this.timer = setInterval(this.next, 2000);
    },
  },
  mounted() {
    this.getBanner();
    this.timer = setInterval(this.next, 2000);
  },
};
</script>

<style  lang='scss' scoped>
$width: 640px;
$height: 300px;
.imgList {
  position: relative;
  width: $width;
  min-height: $height;
  border-radius: 10px;
}
.item {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 1s;
  border-radius: 10px;
}
.item > img {
  width: $width;
  height: $height;
  object-fit: cover;
  border-radius: 10px;
}
.prev,
.next {
  position: absolute;
  width: 30px;
  height: 30px;
  line-height: 35px;
  text-align: center;
  border-radius: 50%;
  background: rgba(#d5eaf5, 0.6);
  z-index: 100;
  display: none;
}
.imgList:hover .prev,
.imgList:hover .next {
  display: block;
}
.prev,
.next {
  top: 50%;
}
.prev {
  left: -135px;
}
.next {
  left: calc(100% - (-105px));
}
.pointer {
  position: absolute;
  display: flex;
  gap: 10px;
  z-index: 100;
  bottom: 0;
  left: 50%;
  transform: translate(-50%) translateY(30px);
}
.pointer > span {
  display: block;
  width: 10px;
  height: 10px;
  // border: 1px solid gainsboro;
  border-radius: 50%;
  background: gainsboro;
}
.img_left,
.img_rigth,
.img_center {
  opacity: 1;
  z-index: 1;
}
.img_left {
  transform: translateX(-$width / 2 + 100);
}
.img_rigth {
  transform: translateX($width / 2 - 100);
}
.img_center {
  z-index: 99;
  transform: scale(1.1);
}
.active {
  background: rgb(250, 55, 55) !important;
}
</style>