<template>
  <div class="footer-container">
    <div class="top">
      <div class="left">
        <span class="left-title">Scan. Detect. Remove.</span>
        <div class="sns-list">
          <img
            v-for="(item, index) in snsList"
            :key="index"
            :src="'/src/assets/images/icon/' + item"
            class="sns-icon"
          />
        </div>
        <div class="url-container">
          <a class="url-text" href="/">Privacy Police</a>
          <a class="url-text" href="/">Terms of Service</a>
        </div>
        <span class="text-copyright">
          Copyright © 2022 Certo Software Limited | Registered in England &
          Wales No. 10072356
          <br />
          <br />
          Designed & developed by
          <spa style="text-decoration: underline">Bigger Picture</spa>
        </span>
      </div>
      <div class="center">
        <span class="center-title">Certo</span>
        <div class="whiteline"></div>
        <div class="menu-container">
          <router-link
            class="menu-item"
            v-for="(item, index) in menuList"
            :key="index"
            :to="item.url"
            :style="{
              fontSize: (item.fontSize ?? 19) + 'px',
            }"
            ><div class="hyphen"></div>
            {{ item.text }}
          </router-link>
        </div>
      </div>
      <div class="right">
        <div class="yellow-container">
          <span class="right-title"> Sign up to our newsletter </span>
          <span class="right-subtitle">
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </span>
          <div class="input-container">
            <input class="input-area" placeholder="Email address" />
            <span class="submit-bt">Submit</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="text-apple">
        Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
        registered in the U.S. and other countries. App Store is a service mark
        of Apple Inc. Android, Google Play and the Google Play logo are
        trademarks of Google LLC.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const snsList = ref<string[]>(["twitter.png", "facebook.png", "youtube.png"]);
const menuList = ref<{ text: string; url: string; fontSize?: number }[]>([
  { text: "iPhone", url: "/" },
  { text: "Android", url: "/" },
  { text: "Help", url: "/" },
  { text: "About", url: "/" },
  { text: "Insights", url: "/", fontSize: 18 },
]);
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.footer-container {
  max-width: 1440px;
  width: 100%;

  padding-top: 96px;
  padding-bottom: 96px;
  padding-left: 20px;
  padding-right: 20px;

  margin: 0 auto;

  color: #ffffff;
  font-size: 12px;
  text-align: left;

  background-color: #02033b;

  @include minimize() {
    padding: 0px;
  }

  > .top {
    max-width: 1056px;

    margin: 0 auto;

    display: flex;
    justify-content: center;

    @include minimize() {
      flex-direction: column;
    }

    > .left {
      max-width: 312px;
      width: 100%;

      padding-top: 8px;

      font-size: 11px;
      font-weight: 200;
      line-height: 15px;

      @include minimize() {
        margin-top: 82px;
        margin-left: 29px;
        margin-right: 50px;

        order: 3;
      }

      > .left-title {
        font-size: 23px;
        font-weight: 700;
      }

      > .sns-list {
        margin-top: 50px;
        margin-bottom: 50px;

        @include minimize() {
          margin-top: 21px;
          margin-bottom: 22px;
        }

        > .sns-icon {
          width: 36px;

          margin-right: 38px;
        }
      }

      > .url-container {
        margin-bottom: 50px;
        margin-right: 50px;

        @include minimize() {
          margin-bottom: 23px;
        }

        > .url-text {
          margin-right: 26px;
          color: #ffffff;
        }
      }
    }

    > .center {
      max-width: 188px;
      width: 100%;

      margin-left: 60px;
      margin-right: 60px;

      @include minimize() {
        max-width: 339px;

        padding: 0;

        margin-top: 32px;
        margin-left: 30px;
        margin-right: 31px;

        order: 1;
      }

      > .center-title {
        padding-top: 2px;

        font-size: 35px;
        font-weight: 700;
      }

      > .whiteline {
        width: 100%;
        height: 1px;

        margin-top: 25px;
        margin-bottom: 50px;

        border-bottom: #ffffff 1px solid;

        @include minimize() {
          margin-top: 15px;
          margin-bottom: 20px;
        }
      }

      > .menu-container {
        width: 100%;
        height: auto;

        > .menu-item {
          padding-top: 12.5px;
          padding-bottom: 12.5px;

          display: block;

          color: #ffc247;
          font-size: 19px;
          font-weight: 800;
          text-decoration: none;

          @include minimize() {
            padding-top: 9px;
            padding-bottom: 9px;
          }

          > .hyphen {
            width: 20px;
            height: 1px;

            margin-bottom: 5px;
            margin-right: 18px;

            display: inline-block;

            vertical-align: middle;
            border: 1px solid #ffc247;
          }
        }
      }
    }

    > .right {
      max-width: 436px;
      width: 100%;

      @include minimize() {
        padding-left: 16px;
        padding-right: 16px;

        order: 2;

        @include minimize() {
          margin-top: 45px;
        }
      }

      > .yellow-container {
        padding: 35px;

        color: #02033b;

        border-radius: 42px;
        background: url("@/assets/images/logo/certo_c.png") no-repeat
          center/cover;
        background-size: contain;
        background-color: #ffc247;

        @include minimize() {
          background: url("@/assets/images/logo/certo_c.png") no-repeat
            calc(100% - 60px) top / cover;
          background-size: contain;
          background-color: #ffc247;
          background-size: auto calc(100% - 10px);
        }

        > .right-title {
          display: block;

          font-size: 23px;
          font-weight: 800;
          letter-spacing: -0.72px;
        }

        > .right-subtitle {
          margin-top: 20px;
          margin-bottom: 38px;

          display: block;

          font-size: 15px;
          line-height: 20px;
        }

        > .input-container {
          width: 100%;

          display: flex;

          > .input-area {
            max-width: 254.8px;
            height: 35px;

            padding-left: 15px;

            flex: 82;

            font-size: 15px;
            line-height: 35px;

            border: none;
            resize: none;
            outline: none;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;

            @include minimize() {
              max-width: 179.8px;
            }
          }

          > .input-container::placeholder {
            font-family: "Inter", sans-serif;
            color: #02033b;
          }

          > .submit-bt {
            height: 35px;

            padding-top: 7px;
            padding-bottom: 7px;
            padding-left: 30px;
            padding-right: 30px;

            flex: 18;

            text-align: center;
            background-color: #02033b;
            color: #ffffff;
            font-size: 15px;
            font-weight: 700;

            cursor: pointer;
            vertical-align: top;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
          }
        }
      }
    }
  }

  > .bottom {
    max-width: 1056px;

    padding-top: 180px;

    margin: 0 auto;

    @include minimize() {
      padding-top: 21px;
      padding-bottom: 47px;
      padding-left: 29px;
      padding-right: 38px;
    }

    > .text-apple {
      max-width: 539px;

      display: block;

      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0;
      font-weight: 200;
    }
  }
}
</style>
