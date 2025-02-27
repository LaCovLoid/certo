<template>
  <div class="set-color-container">
    <div class="header-container">
      <div class="left">
        <img class="logo" src="../assets/images/logo_certo.png" />
      </div>
      <div class="right">
        <div class="menu-list">
          <router-link to="/" class="menu-item">iPhone</router-link>
          <router-link to="/" class="menu-item">Android</router-link>
          <router-link to="/" class="menu-item">Help</router-link>
          <router-link to="/" class="menu-item">Company ∨</router-link>
        </div>
        <div class="sign-in-bt">sign in</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";

// defineProps<{ msg: string }>(); prop
// const count = ref(0);
</script>

<style lang="scss" scoped>
.set-color-container {
  width: 100%;
  height: 102px;

  background-color: #f3f8ff;

  > .header-container {
    max-width: 1440px;
    width: 100%;
    height: 100%;

    display: flex;
    margin: 0 auto;

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

          color: #000000;
          text-decoration: none;
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
}
</style>
