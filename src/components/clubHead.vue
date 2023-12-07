<template>
  <div class="head">
    <clubNav></clubNav>
  </div>
</template>

<script>
import clubNav from "./head/clubNav.vue";
export default {
  components: { clubNav },
};
</script>

<style>
.head {
  display: flex;
  justify-content: center;
}
</style>