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

  background-color: #f3f8ff;

  @include minimize() {
    height: 72px;
  }

  > .left {
    > .logo {
      width: 100%;
      height: 100%;
      padding-top: 24px;
      padding-bottom: 24px;
      margin-left: 96px;
      position: relative;

      object-fit: contain;
      z-index: 10;

      @include minimize() {
        width: auto;
        height: 100%;
        margin: 0;
        padding: 16px 18px;
      }
    }
  }
  > .right {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;

    > .menu-list {
      display: flex;
      justify-content: flex-end;
      position: absolute;

      @include minimize() {
        width: 100%;
        padding-top: 102px - 24.5px;

        flex-direction: column;
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
          padding: 24.5px;
          margin-left: 11.5px;
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
        margin-right: 120px;

        color: #ffffff;
        text-decoration: none;
        font-size: 18px;
        background-color: #4335de;
        border-radius: 42px;
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

      z-index: 10;
      cursor: pointer;

      @include minimize() {
        display: block;
      }
    }
    > .x-bt {
      padding: 23px;
    }
  }
}

/* 오버레이 (배경 뿌옇게) */
.overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.3); /* 반투명 배경 */
  backdrop-filter: blur(10px); /* 블러 처리 */
  z-index: 5;

  @include minimize() {
    display: block;
  }
}
</style>
