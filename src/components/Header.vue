<template>
  <div class="header-container">
    <div class="left">
      <img class="logo" src="@/assets/images/logo/certo.png" />
    </div>
    <div class="right">
      <div class="menu-list" :class="{ show: isVisible }">
        <router-link to="/" class="menu-item">iPhone</router-link>
        <router-link to="/" class="menu-item">Android</router-link>
        <router-link to="/" class="menu-item">Help</router-link>
        <router-link to="/" class="menu-item company-bt"
          >Company<span class="arrow-bottom"></span
        ></router-link>
        <router-link to="/" class="sign-in-bt">Sign in</router-link>
      </div>
      <img
        src="../assets/images/icon/hamburger.png"
        class="hamburger-bt"
        v-if="!isVisible"
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
  <div class="overlay" v-if="isVisible"></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(false);

const toggleMenu = () => {
  isVisible.value = !isVisible.value;
};
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

  position: relative;
  z-index: 10;

  background: linear-gradient(to bottom, #f3f8ff 75%, #e7effa 100%);

  @include minimize() {
    height: 70px;

    background: none;
    background-color: #f3f8ff;
  }

  > .left {
    > .logo {
      height: 100%;

      padding-top: 24px;
      padding-bottom: 24px;
      padding-left: 120px;

      object-fit: contain;

      @media (max-width: 1100px) {
        padding-left: 80px;
      }

      @include minimize() {
        width: auto;
        height: 100%;

        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 18px;
        padding-right: 18px;

        margin: 0;
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

        padding-top: 70px + 32px - 24.5px;

        display: none;
        flex-direction: column;
        justify-content: left;

        text-align: left;
      }

      > .menu-item {
        padding-top: 38.5px;
        padding-bottom: 38.5px;
        padding-left: 24px;
        padding-right: 24px;

        display: block;

        z-index: 10;

        color: #000000;
        font-size: 19px;
        font-weight: 800;
        text-decoration: none;

        @include minimize() {
          width: 100%;

          padding-top: 25px;
          padding-bottom: 24.5px;
          padding-left: 24.5px;

          margin-left: 11.5px;
        }

        > .arrow-bottom {
          width: 12px;
          height: 7px;

          margin-left: 9.11px;

          display: inline-block;
          vertical-align: middle;

          @include set-span-image("/icon/arrow_bottom.svg") {
          }
        }
      }

      > .company-bt {
        @include minimize() {
          margin-top: 14.5px;
          margin-bottom: 22px;
        }
      }

      > .sign-in-bt {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 20px;
        padding-right: 21px;

        margin-top: auto;
        margin-bottom: auto;
        margin-left: 72px;

        color: #ffffff;
        font-size: 15px;
        font-weight: 800;
        text-decoration: none;

        border-radius: 42px;
        background-color: #4335de;
        z-index: 10;

        @include minimize() {
          width: fit-content;

          margin: 0;
          margin-left: 31px;

          font-size: 15px;
        }
      }
    }
    .menu-list.show {
      display: flex;
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
      padding: 22px;
    }
  }
}

.overlay {
  display: none;

  position: fixed;
  inset: 0; /* top, right, bottom, left 0 이랑 같은거. 배경 전체 뒤덮는것 */
  z-index: 5;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);

  @include minimize() {
    display: block;
  }
}
</style>
