<template>
  <div class="home">
    <div class="content">
      <div class="banner">
        <CarouselFigure></CarouselFigure>
      </div>
      <userDetails :obj="obj"></userDetails>
    </div>
    <recommendClub></recommendClub>
  </div>
</template>

<script>
import CarouselFigure from "@/components/CarouselFigure.vue";
import userDetails from "./userDetails.vue";
import recommendClub from "./recommendClub.vue";
export default {
  props: ["obj"],
  components: { CarouselFigure, userDetails, recommendClub },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  display: flex;
  flex-flow: column;
  gap: 30px;
  // justify-content: space-between;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.banner {
  width: 1105px;
  max-height: 310px;
  min-height: 375px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 5px gray;
  border-radius: 5px;
}
</style>