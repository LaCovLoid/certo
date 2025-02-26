<template>
  <div class="menu-container">
    <div class="left">
      <img class="logo" src="../assets/images/logo_certo.png" />
    </div>
    <div class="right">
      <div class="menu-item">Menu Item 1</div>
      <div class="menu-item">Menu Item 2</div>
      <div class="menu-item">Menu Item 3</div>
      <div class="menu-item">Menu Item 4</div>
      <div class="menu-item">Menu Item 5</div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";

// defineProps<{ msg: string }>(); prop
// const count = ref(0);
</script>

<style lang="scss" scoped>
.menu-container {
  max-width: 1440px;
  width: 100%;
  height: 102px;

  display: flex;
  margin: 0 auto;

  background-color: blue;

  > .left {
    width: 50%;

    display: flex;

    > .logo {
      width: 157px;
      height: 54px;
      margin: auto 0;
      margin-left: 100px;

      object-fit: contain;
    }
  }
  .right {
    display: flex;
  }
}
</style>
