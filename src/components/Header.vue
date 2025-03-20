<template>
  <div class="header-container">
    <div class="overlay" v-if="isOpen"></div>
    <div class="left">
      <img class="logo" src="@/assets/images/logo/certo.png" />
    </div>
    <div class="right">
      <div class="menu-list" v-if="isMenuVisible || isOpen">
        <router-link to="/" class="menu-item">iPhone</router-link>
        <router-link to="/" class="menu-item">Android</router-link>
        <router-link to="/" class="menu-item">Help</router-link>
        <router-link to="/" class="menu-item"
          >Company <span class="arrow-bottom"></span
        ></router-link>
        <router-link to="/" class="sign-in-bt">sign in</router-link>
      </div>
      <img
        src="../assets/images/icon/hamburger.png"
        class="hamburger-bt"
        v-if="!isOpen"
        @click="toggleMenu"
      />
      <img
        src="../assets/images/icon/cross.png"
        class="hamburger-bt x-bt"
        v-else
        @click="toggleMenu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isMenuVisible = ref(true);
const isOpen = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
  if (window.innerWidth >= 1000) {
    isMenuVisible.value = true;
    isOpen.value = false;
  }
  if (window.innerWidth <= 1000) {
    isMenuVisible.value = false;
  }
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  updateWidth();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.header-container {
  max-width: 1440px;
  width: 100%;
  height: 102px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  background-color: #f3f8ff;

  @include minimize() {
    height: 72px;
  }

  .overlay {
    display: none;
    position: fixed;
    inset: 0; /* top, right, bottom, left 0 이랑 같은거. 배경 전체 뒤덮는것 */

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    z-index: 5;

    @include minimize() {
      display: block;
    }
  }

  > .left {
    > .logo {
      height: 100%;
      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 120px;
      position: relative;

      object-fit: contain;
      z-index: 10;

      @media (max-width: 1100px) {
        padding-left: 80px;
      }

      @include minimize() {
        width: auto;
        height: 100%;
        margin: 0;
        padding: 16px 18px;
      }
    }
  }
  > .right {
    width: 653px;
    height: 100%;
    padding-right: 120px;

    display: flex;
    justify-content: flex-end;

    @media (max-width: 1100px) {
      padding-right: 80px;
    }

    @include minimize() {
      padding-right: 0;
    }

    > .menu-list {
      display: flex;
      justify-content: right;
      position: absolute;

      @include minimize() {
        width: 100%;
        padding-top: 102px - 24.5px;

        flex-direction: column;

        text-align: left;
        align-items: flex-start;
      }

      > .menu-item {
        padding: 38.5px 24px;

        display: block;

        color: #000000;
        font-size: 19px;
        font-weight: 800;
        text-decoration: none;

        z-index: 10;

        @include minimize() {
          width: 100%;
          padding-top: 24.5px;
          padding-bottom: 24.5px;
          padding-left: 11.5px;
        }

        > .arrow-bottom {
          width: 12px;
          height: 7px;

          display: inline-block;

          @include set-span-image("/icon/arrow_bottom.svg") {
          }
        }
      }

      > .sign-in-bt {
        padding: 14px 20px;
        margin: auto 0;
        margin-left: 72px;

        color: #ffffff;
        font-size: 18px;
        font-weight: 800;
        text-decoration: none;

        border-radius: 42px;
        background-color: #4335de;
        z-index: 10;

        @include minimize() {
          margin: 0;
          margin-left: 31px;
          margin-top: 32px;
        }
      }
    }
    > .hamburger-bt {
      width: auto;
      height: 100%;
      padding: 25px;

      display: none;

      cursor: pointer;
      z-index: 10;

      @include minimize() {
        display: block;
      }
    }

    > .x-bt {
      padding: 23px;
    }
  }
}
</style>
