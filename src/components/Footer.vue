<template>
  <div class="footer-container">
    <div class="top">
      <div class="left">
        <span class="left-title">Scan.Detect.Remove.</span>
        <div class="sns-list">
          <img class="sns-icon" src="../assets/images/icon_twitter.png" />
          <img class="sns-icon" src="../assets/images/icon_facebook.png" />
          <img class="sns-icon" src="../assets/images/icon_youtube.png" />
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
        <textarea
          class="input-container"
          placeholder="Email address"
        ></textarea>
        <span class="submit-bt">submit</span>
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
.footer-container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 100px 180px;

  background-color: #02033b;
  color: #ffffff;
  font-size: 12px;
  text-align: left;

  > .top {
    display: flex;
    margin-bottom: 200px;

    > .left {
      max-width: 312px;
      width: 100%;

      font-size: 11px;
      font-weight: 200;

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
      width: 188px;
      margin: 0 50px;
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
      width: 436px;
      height: 232px;

      padding: 35px;

      color: #000000;

      background: url("../assets/images/logo_certo_c.png") no-repeat
        center/cover;
      background-size: contain;
      background-color: #ffc247;
      border-radius: 42px;

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
        width: calc(100% - 110px);
        height: 35px;

        padding: 0 15px;

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
        display: inline-block;
        width: 110px;
        height: 35px;
        padding: 7px 30px;

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

  > .bottom {
    width: 100%;
    > .text-apple {
      max-width: 535px;
      display: block;

      font-weight: 200;
    }
  }
}

@media (max-width: 600px) {
  .center {
    order: 1;
  }
  .right {
    order: 2;
  }
  .left {
    order: 3;
  }
}
</style>
