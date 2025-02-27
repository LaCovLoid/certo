<template>
  <div class="header-container">
    <div class="left">
      <img class="logo" src="../assets/images/logo_certo.png" />
    </div>
    <div class="right">
      <div class="menu-list">
        <div class="menu-item">iPhone</div>
        <div class="menu-item">Android</div>
        <div class="menu-item">Help</div>
        <div class="menu-item">Company ∨</div>
      </div>
      <div class="sign-in-bt">sign in</div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";

// defineProps<{ msg: string }>(); prop
// const count = ref(0);
</script>

<style lang="scss" scoped>
.header-container {
  max-width: 1440px;
  width: 100%;
  height: 102px;

  display: flex;
  margin: 0 auto;

  background-color: #f3f8ff;

  > .left {
    display: flex;

    > .logo {
      width: 157px;
      height: 54px;
      margin: auto 100px;

      object-fit: contain;
    }
  }
  > .right {
    width: 100%;

    display: flex;
    justify-content: flex-end;

    font-size: 19px;
    font-weight: 800;

    > .menu-list {
      display: flex;
      justify-content: flex-end;

      > .menu-item {
        margin: auto 40px auto 0;
      }
    }

    > .sign-in-bt {
      padding: 14px 20px;
      margin: auto 130px auto 50px;

      color: #ffffff;
      font-size: 18px;
      background-color: #4335de;
      border-radius: 42px;
    }
  }
}
</style>
