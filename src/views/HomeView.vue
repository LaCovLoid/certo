<template>
  <div class="home-container">
    <!-- ----------------------------------- -->
    <div class="privacy-container">
      <div class="privacy-left">
        <span class="privacy-title">Your mobile privacy is our mission</span>
        <span class="privacy-description">
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </span>
        <span class="bt bg-color-orange">Get Certo for iPhone →</span>
        <span class="bt">Get Certo for Android</span>
      </div>
      <div class="privacy-right">
        <img
          src="../assets/images/picture_man_on_subway.png"
          class="img-privacy-subway"
        />
        <img
          src="../assets/images/picture_smartphone.png"
          class="img-privacy-phone"
        />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="review-container">
      <span class="review-title">
        Loved by thousands of iPhone<br />and Android users alike
      </span>
      <div class="slide-container">
        <div class="slide-track">
          <div
            v-for="(color, index) in loopedColors"
            :key="index"
            :style="{ backgroundColor: color }"
            class="slide"
          >
            {{ index + 1 }}
          </div>
        </div>
      </div>
      <div class="logo-container">
        <span class="logo-list-text">Featured in:</span>
        <img src="../assets/images/logo_cnbc.png" class="logo-image" />
        <img src="../assets/images/logo_new_york_post.png" class="logo-image" />
        <img
          src="../assets/images/logo_financial_times.png"
          class="logo-image"
        />
        <img
          src="../assets/images/logo_reader's_digest.png"
          class="logo-image"
        />
        <img src="../assets/images/logo_zd_net.png" class="logo-image" />
        <img src="../assets/images/logo_wired.png" class="logo-image" />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="security-container">
      <div class="security-left">
        <span class="security-title">
          At Certo, mobile security is not an afterthought, it’s what we do.
        </span>
        <span class="security-description">
          With years of experience in mobile security and spyware detection, our
          products have helped countless people safeguard their devices and find
          peace of mind.
        </span>
        <span class="bt bg-color-orange">Get Certo for iPhone →</span>
        <div></div>
        <span class="bt">Get Certo for Android</span>
      </div>
      <div class="security-right">
        <img
          src="../assets/images/picture_woman_using_smartphone.png"
          class="img-security"
        />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="icon-container">
      <span class="icon-title">
        Get your freedom back, stop mobile spyware today
      </span>
      <div class="icon-list">
        <div class="icon-item"></div>
        <div class="icon-item"></div>
        <div class="icon-item"></div>
        <div class="icon-item"></div>
        <div class="icon-item"></div>
        <div class="icon-item"></div>
        <span class="bt bg-color-orange">Get Certo for iPhone →</span>
        <span class="bt">Get Certo for Android</span>
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="story-help-container">
      <div class="story-container">
        <span class="story-title">Read our story</span>
        <span class="story-description">
          Find out why thousands trust Certo to secure their mobile world.
        </span>
        <span class="bt bg-color-purple">About us →</span>
      </div>
      <div class="help-container">
        <span class="help-title">Help Center</span>
        <span class="help-description">
          Help topics, getting started guides and FAQs.
        </span>
        <span class="bt help-bt">Vist help center</span>
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="spying-container">
      <span class="spying-title">Is someone spying on your phone?</span>
      <span class="spying-description">Find out with Certo</span>
      <span class="bt bg-color-orange">Get Certo for iPhone →</span>
      <span class="bt spying-bt-android">Get Certo for Android</span>
    </div>
    <!-- ----------------------------------- -->
    <div class="insight-container">
      <span class="insight-title">Latest Insights</span>
      <div class="insight-item-list">
        <div class="insight-item"></div>
        <div class="insight-item"></div>
        <div class="insight-item"></div>
      </div>
      <span class="bt bg-color-orange">View all insight</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFD700"];

// 색상을 2배로 복제하여 자연스럽게 무한 루프
const loopedColors = computed(() => [...colors, ...colors]);
</script>

<style lang="scss" scoped>
.home-container {
  max-width: 1440px;
  margin: 0 auto;

  > .privacy-container {
    height: 708px;

    display: flex;
    justify-content: flex-end;

    background-color: #ffffff;
    overflow: hidden;

    > .privacy-left {
      max-width: 600px;
      transform: translate(75px, 75px);
      margin: 50px 20px 50px 0;

      text-align: start;

      > .privacy-title {
        display: block;

        font-size: 60px;
        font-weight: 700;
      }

      > .privacy-description {
        margin: 50px 0;
        display: block;
        font-size: 20px;
        line-height: 28px;
      }

      > .bt {
        margin: 50px 25px;
      }
    }
    > .privacy-right {
      position: relative;
      transform: translate(75px, 75px);

      > .img-privacy-subway {
        width: 740px;
        height: 740px;
      }
      > .img-privacy-phone {
        width: 240px;
        position: absolute;
        top: 50px;
        left: 30px;
      }
    }
  }
  > .review-container {
    padding: 100px 0;
    background: linear-gradient(to bottom, #f7c95f, #fdb235);
    text-align: start;

    > .review-title {
      margin-left: 100px;
      display: block;
      font-size: 36px;
      font-weight: 800;
    }

    > .slide-container {
      width: 100%; /* 보이는 영역 크기 */
      margin: 80px 0;
      overflow: hidden; /* 넘치는 부분 숨김 */

      > .slide-track {
        display: flex;
        width: 300%; /* 전체 길이 (2배) */
        animation: scroll 20s linear infinite; /* 무한 반복 애니메이션 */

        > .slide {
          width: 400px;
          height: 305px;
          display: flex;
          margin: 0 30px;

          border-radius: 50px;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: white;
          font-weight: bold;
        }
      }
    }
    > .logo-container {
      width: 100%;
      height: 95px;

      display: flex;
      align-items: center;
      justify-content: center;

      > .logo-list-text {
        margin-right: 80px;
        font-size: 23px;
        font-weight: 800;
      }
      > .logo-image {
        width: 130px;
        height: 95px;
        margin: 0 20px;
      }
    }
  }
  > .security-container {
    width: 100%;
    padding: 100px 0;
    display: flex;
    justify-content: center;

    > .security-left {
      text-align: start;
      margin-right: 100px;

      > .security-title {
        width: 446px;
        display: block;
        font-size: 36px;
      }
      > .security-description {
        width: 446px;
        margin: 50px 0;
        display: block;
        font-size: 20px;
      }
      > .bt {
        margin: 10px 0;
      }
    }
    > .security-right {
      margin-left: 50px;

      > .img-security {
        width: 468px;
        height: 468px;
      }
    }
  }

  > .icon-container {
    width: 100%;
    justify-content: center;
    background: linear-gradient(to bottom, #f3f8ff, #e7effa);
    padding-bottom: 80px;

    > .icon-title {
      max-width: 740px;
      display: block;
      font-size: 36px;
      font-weight: 800;

      margin: 0 auto;
      padding: 50px;
    }
    > .icon-list {
      max-width: 840px;
      width: 100%;
      margin: 0 auto;
      padding: 60px 50px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      background-color: #ffffff;
      border-radius: 50px;

      > .icon-item {
        width: 200px;
        height: 265px;
        margin: 20px 10px 60px 10px;

        background-color: #000000;
      }
      > .bt {
        margin: 0 20px;
      }
    }
  }

  > .story-help-container {
    width: 100%;
    display: flex;
    justify-content: center;

    padding: 90px 0;

    > .story-container {
      max-width: 460px;
      width: 100%;
      padding: 50px;

      text-align: start;
      border-radius: 50px;
      background: linear-gradient(to bottom, #f7c95f, #fdb235);

      > .story-title {
        display: block;

        font-size: 23px;
        font-weight: 800;
      }
      > .story-description {
        display: block;
        font-size: 16px;

        margin: 30px 0 50px 0;
      }
    }

    > .help-container {
      padding: 50px 0 50px 100px;
      text-align: start;

      > .help-title {
        display: block;
        font-size: 23px;
        font-weight: 800;
      }
      > .help-description {
        width: 200px;
        display: block;
        margin: 25px 0 50px 0;
      }
      > .help-bt {
        padding-top: 15px;
        font-size: 16px;
      }
    }
  }
  > .spying-container {
    width: 100%;
    padding: 100px;

    background: linear-gradient(to bottom, #2925cc, #4b48e5);

    > .spying-title {
      display: block;

      color: #ffffff;
      font-size: 34px;
      font-weight: 800;
    }

    > .spying-description {
      margin: 60px 0;
      display: block;

      color: #ffffff;
      font-size: 18px;
    }
    > .spying-bt-android {
      margin-left: 20px;

      color: #ffffff;
      border: #ffffff 2px solid;
    }
  }

  > .insight-container {
    padding: 80px 0;

    background-color: #f3f8ff;

    > .insight-title {
      font-size: 56px;
      font-weight: 800;
    }
    > .insight-item-list {
      margin: 70px 0;
      display: flex;
      justify-content: center;
      overflow: hidden;

      > .insight-item {
        width: 320px;
        height: 534px;
        margin: 0 30px;
        display: inline-block;

        background-color: #000000;
      }
    }
    > .insight-bt {
    }
  }
}

//////////////////////////////////////////////

.bt {
  height: 55px;
  padding: 13px 20px 0 20px;
  display: inline-block;

  font-size: 19px;
  font-weight: 800;
  vertical-align: top;

  border: #000000 2px solid;
  border-radius: 40px;
  cursor: pointer;
}
.bg-color-orange {
  background-color: #ffc247;
  border: none;
}
.bg-color-purple {
  font-size: 16px;
  color: #ffffff;
  background-color: #4335de;
  border: none;
}

/* 무한 슬라이드 애니메이션 */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  } /* 절반만 이동 후 다시 시작 */
}
</style>
