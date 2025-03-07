<template>
  <div class="set-color-container">
    <div class="header-container">
      <div class="left">
        <img
          class="logo"
          :class="{ 'fixed-menu': isOpen }"
          src="../assets/images/logo_certo.png"
        />
      </div>
      <div v-if="windowWidth > 1000" class="right">
        <div class="menu-list">
          <router-link to="/" class="menu-item">iPhone</router-link>
          <router-link to="/" class="menu-item">Android</router-link>
          <router-link to="/" class="menu-item">Help</router-link>
          <router-link to="/" class="menu-item">Company ∨</router-link>
          <router-link to="/" class="sign-in-bt">sign in</router-link>
        </div>
      </div>
      <div v-else class="hamburger-right">
        <span class="hamburger-bt" v-if="!isOpen" @click="toggleMenu">☰</span>
        <span class="x-bt" v-else @click="toggleMenu">✖</span>
      </div>
    </div>
    <!-- ✅ 햄버거 메뉴 클릭 시 나타나는 메뉴 -->
    <div v-if="isOpen" class="overlay" @click="toggleMenu"></div>
    <div v-if="isOpen" class="side-menu">
      <router-link to="/" class="hamburger-menu-item">iPhone</router-link>
      <router-link to="/" class="hamburger-menu-item">Android</router-link>
      <router-link to="/" class="hamburger-menu-item">Help</router-link>
      <router-link to="/" class="hamburger-menu-item">Company ∨</router-link>
      <router-link to="/" class="sign-in-bt">sign in</router-link>
    </div>
    <!-- -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const windowWidth = ref(window.innerWidth);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleResize = () => {
  if (window.innerWidth >= 1000) {
    isOpen.value = false;
  }
};
const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
  window.removeEventListener("resize", handleResize);
});
</script>

<style lang="scss" scoped>
@mixin minimize($width) {
  @media (max-width: $width) {
    @content;
  }
}

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
        z-index: 10;

        @include minimize(1000px) {
          margin: auto 30px;
        }
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
    }
    > .hamburger-right {
      width: 100%;

      display: flex;
      justify-content: flex-end;

      > .hamburger-bt {
        font-size: 50px;
        margin: 10px 30px;

        z-index: 10;
        cursor: pointer;
      }
      > .x-bt {
        z-index: 10;
        position: fixed;
        font-size: 50px;
        right: 40px;
        top: 20px;
      }
    }
  }
}

/* 오버레이 (배경 뿌옇게) */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.3); /* 반투명 배경 */
  backdrop-filter: blur(10px); /* 블러 처리 */
  z-index: 5;
}
.side-menu {
  width: 100%;
  position: fixed;

  text-align: left;
  z-index: 10;

  > .hamburger-menu-item {
    margin: 50px;
    display: block;

    text-decoration: none;
    color: #000000;
    font-size: 26px;
    font-weight: 800;
  }
}
.fixed-menu {
  position: fixed;
  left: 2px;
  top: 23px;
}

.sign-in-bt {
  padding: 14px 20px;
  margin: auto 130px auto 50px;

  color: #ffffff;
  text-decoration: none;
  font-size: 18px;
  background-color: #4335de;
  border-radius: 42px;
}
</style>
