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
          Designed & developed by
          <spa style="text-decoration: underline">Bigger Picture</spa>
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
        <div class="yellow-container">
          <span class="right-title"> Sign up to our newsletter </span>
          <span class="right-subtitle">
            Receive the latest mobile security news, exclusive discounts &
            offers straight to your inbox!
          </span>
          <div class="input-container">
            <input class="input-area" placeholder="Email address" />
            <span class="submit-bt">submit</span>
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

<script setup lang="ts"></script>

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

      font-size: 11px;
      font-weight: 200;

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
          margin-right: 40px;
        }
      }

      > .url-container {
        margin-right: 50px;
        margin-bottom: 50px;

        @include minimize() {
          margin-bottom: 23px;
        }

        > .url-text {
          margin-right: 40px;
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
        margin-top: 32px;
        margin-left: 30px;
        margin-right: 31px;
        padding: 0;

        order: 1;
      }

      > .center-title {
        font-size: 35px;
        font-weight: 700;
      }

      > .whiteline {
        width: 100%;
        height: 1px;
        margin: 30px 0;

        border-bottom: #ffffff 1px solid;
      }

      > .menu-container {
        width: 100%;
        margin-top: 50px;

        > .menu-item {
          margin: 20px 0;

          display: block;

          color: #ffc247;
          font-size: 19px;
          font-weight: 700;
          text-decoration: none;
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
            max-width: 254.8px;
            height: 35px;
            padding-left: 15px;

            flex: 7;

            font-size: 16px;
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
            color: #888;
          }

          > .submit-bt {
            height: 35px;
            padding: 7px 30px;
            flex: 3;

            text-align: center;
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
  }

  > .bottom {
    max-width: 1056px;
    margin: 0 auto;
    padding-top: 188px;

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
