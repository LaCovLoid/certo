<template>
  <div class="footer-container">
    <div class="top">
      <div class="left">
        <span class="left-title">Scan.Detect.Remove.</span>
        <div class="sns-list">
          <img class="sns-icon" src="@/assets/images/icon/twitter.png" />
          <img class="sns-icon" src="@/assets/images/icon/facebook.png" />
          <img class="sns-icon" src="@/assets/images/icon/youtube.png" />
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
          Designed & developed by Bigger Picture
        </span>
      </div>
      <div class="center">
        <span class="center-title">Certo</span>
        <div class="whiteline"></div>
        <div class="menu-container">
          <a href="/" class="menu-item">- iPhone</a>
          <a href="/" class="menu-item">- Android</a>
          <a href="/" class="menu-item">- Help</a>
          <a href="/" class="menu-item">- About</a>
          <a href="/" class="menu-item">- Insight</a>
        </div>
      </div>
      <div class="right">
        <span class="right-title"> Sign up to our newsletter </span>
        <span class="right-subtitle">
          Receive the latest mobile security news, exclusive discounts & offers
          straight to your inbox!
        </span>
        <div class="input-container">
          <input class="input-area" placeholder="Email address" />
          <span class="submit-bt">submit</span>
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

.footer-container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 96px;
  padding-bottom: 96px;
  grid-auto-flow: column; /* 1행 유지 */
  gap: 10px;

  background-color: #02033b;
  color: #ffffff;
  font-size: 12px;
  text-align: left;

  @include minimize() {
    padding: 0px;
  }

  > .top {
    max-width: 1056px;
    margin: 0 auto;
    display: grid;
    grid-template-rows: 1fr; /* 1개의 행 */
    grid-template-columns: repeat(3, 1fr); /* 3개의 열 */
    align-items: flex-start;

    @include minimize() {
      grid-template-rows: repeat(3, 1fr); /* 3개의 행 */
      grid-template-columns: 1fr; /* 1개의 열 */
    }

    > .left {
      font-size: 11px;
      font-weight: 200;

      @include minimize() {
        width: 100%;
        padding-left: 30px;
        order: 3;
      }

      > .left-title {
        font-size: 23px;
        font-weight: 700;
      }
      > .sns-list {
        margin: 50px 0;
        > .sns-icon {
          width: 36px;
          margin-right: 40px;
        }
      }
      > .url-container {
        margin: 0 50px 50px 0;

        > .url-text {
          margin-right: 40px;
          color: #ffffff;
        }
      }
    }

    > .center {
      margin-left: 50px;
      margin-right: 50px;

      @include minimize() {
        width: 100%;
        margin: 0;
        order: 1;
      }

      > .center-title {
        font-size: 35px;
        font-weight: 700;
      }
      > .whiteline {
        width: 100%;
        height: 0.2px;

        margin: 30px 0;
        border: #ffffff 1px solid;
      }
      > .menu-container {
        width: 100%;
        margin-top: 50px;

        > .menu-item {
          display: block;
          margin: 20px 0;

          color: #ffc247;
          font-size: 19px;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }

    > .right {
      max-width: 436px;

      padding: 35px;

      color: #000000;
      background: url("@/assets/images/logo/certo_c.png") no-repeat center/cover;
      background-size: contain;
      background-color: #ffc247;
      border-radius: 42px;

      @include minimize() {
        width: 100%;
        margin: 30px 0 80px 0;
        order: 2;
      }

      > .right-title {
        display: block;
        font-size: 23px;
        font-weight: 700;
      }
      > .right-subtitle {
        margin: 30px 0;
        display: block;

        font-size: 15px;
      }

      > .input-container {
        width: 100%;
        display: flex;

        > .input-area {
          height: 35px;
          padding-left: 15px;
          flex: 7;

          font-size: 16px;
          line-height: 35px;
          outline: none;
          resize: none;
          border: none;
          border-top-left-radius: 20px;
          border-bottom-left-radius: 20px;
        }
        > .input-container::placeholder {
          font-family: "Inter", sans-serif;
          color: #888;
        }
        > .submit-bt {
          height: 35px;
          padding: 7px 30px;
          flex: 3;

          background-color: #02033b;
          color: #ffffff;
          font-size: 15px;
          font-weight: 700;

          vertical-align: top;
          border-top-right-radius: 20px;
          border-bottom-right-radius: 20px;
          cursor: pointer;
        }
      }
    }
  }

  > .bottom {
    max-width: 1056px;
    margin: 0 auto;
    padding-top: 188px;

    @media (max-width: 1000px) {
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
