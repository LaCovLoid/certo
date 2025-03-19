<template>
  <div class="home-container">
    <!-- ----------------------------------- -->
    <div class="privacy-container">
      <div class="privacy-bg-circle"></div>
      <img
        src="@/assets/images/picture/man_on_subway.png"
        class="img-privacy-subway"
      />
      <div class="privacy-left">
        <span class="privacy-title">Your mobile privacy is our mission</span>
        <span class="privacy-description">
          Think your phone has been hacked? Our trusted apps make it easy for
          you to scan, detect and remove threats from your iPhone and Android
          devices.
        </span>
        <OrangeButton text="Get Certo for iPhone" class="privacy-bt-iphone" />
        <WhiteButton text="Get Certo for Android" class="privacy-bt-android" />
      </div>
      <div class="privacy-right">
        <img
          src="@/assets/images/picture/smartphone.png"
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
        <div class="first-slide-track">
          <Review
            v-for="(item, index) in reviewList"
            :key="index"
            :value="item"
            class="slide"
          >
          </Review>
        </div>
        <div class="second-slide-track">
          <Review
            v-for="(item, index) in reviewList"
            :key="index"
            :value="item"
            class="slide"
          >
          </Review>
        </div>
      </div>
      <div class="logo-container">
        <span class="logo-list-text">Featured in:</span>
        <div class="logo-grid-container">
          <img src="@/assets/images/logo/cnbc.png" class="logo-image" />
          <img
            src="@/assets/images/logo/new_york_post.png"
            class="logo-image"
          />
          <img
            src="@/assets/images/logo/financial_times.png"
            class="logo-image"
          />
          <img
            src="@/assets/images/logo/readers_digest.png"
            class="logo-image"
          />
          <img src="@/assets/images/logo/zd_net.png" class="logo-image" />
          <img src="@/assets/images/logo/wired.png" class="logo-image" />
        </div>
      </div>
    </div>
    <!-- ---------------------------logo부분 vfor사용하기------------------------------------------- -->
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
        <OrangeButton text="Get Certo for iPhone" class="security-bt-iphone" />
        <WhiteButton text="Get Certo for Android" class="security-bt-android" />
      </div>
      <div class="security-right">
        <img
          src="@/assets/images/picture/woman_using_smartphone.png"
          class="img-security"
        />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="icon-container">
      <span class="icon-title">
        Get your freedom back, stop mobile spyware today
      </span>
      <div class="icon-item-list-container">
        <div class="icon-grid-container">
          <IconComponent
            v-for="(item, index) in iconDataList"
            :key="index"
            :value="item"
            class="icon-item"
          />
        </div>
        <OrangeButton text="Get Certo for iPhone" class="icon-bt-iphone" />
        <WhiteButton text="Get Certo for Android" class="icon-bt-android" />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="story-help-container">
      <div class="story-container">
        <span class="story-title">Read our story</span>
        <span class="story-description">
          Find out why thousands trust Certo to secure their mobile world.
        </span>
        <OrangeButton text="About us" class="story-bt"></OrangeButton>
      </div>
      <div class="help-container">
        <span class="help-title">Help Center</span>
        <span class="help-description">
          Help topics, getting started guides and FAQs.
        </span>
        <WhiteButton text="Vist help center" class="help-bt" />
      </div>
    </div>
    <!-- ----------------------------------- -->
    <div class="spying-container">
      <span class="spying-title">Is someone spying on your phone?</span>
      <span class="spying-description">Find out with Certo</span>
      <OrangeButton text="Get Certo for iPhone" class="spying-bt-iphone" />
      <WhiteButton text="Get Certo for Android" class="spying-bt-android" />
    </div>
    <!-- ----------------------------------- -->
    <div class="insight-container">
      <span class="insight-title">Latest Insights</span>
      <div class="insight-item-list">
        <Insights
          v-for="(item, index) in insightsList"
          :key="index"
          :value="item"
          class="insight-item"
        />
      </div>
      <OrangeButton text="View all insight" class="insight-bt" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import insightsData from "../assets/json/InsightsData.json";
import reviewData from "../assets/json/ReviewData.json";
import iconData from "../assets/json/IconData.json";
import IconComponent from "../components/IconComponent.vue";
import Insights from "../components/Insight.vue";
import Review from "../components/Review.vue";
import WhiteButton from "../components/WhiteButton.vue";
import OrangeButton from "../components/OrangeButton.vue";

import type { ReviewDataType, InsightsDataType, IconDataType } from "../types";

const insightsList = ref<InsightsDataType[]>(insightsData.insights);
const reviewList = ref<ReviewDataType[]>(reviewData.reviews);
const iconDataList = ref<IconDataType[]>(iconData.icons);
</script>

<style lang="scss" scoped>
@use "@/global.scss" as *;

@keyframes moveLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-(400px+30px) * 5);
  }
}

.home-container {
  max-width: 1440px;
  margin: 0 auto;

  > .privacy-container {
    display: flex;
    position: relative;

    padding-top: 123.37px;
    padding-bottom: 123.37px;
    padding-left: 177px;
    padding-right: 177px;

    background-color: #ffffff;
    overflow: hidden;
    z-index: -20;

    @include minimize() {
      height: auto;
      flex-wrap: wrap;

      padding: 33px 26px;
    }

    > .privacy-bg-circle {
      width: 1770px;
      height: 1770px;
      position: absolute;
      z-index: -10;

      //left: calc(50% - 885px);
      //transform: translate(-710px, -280px);

      bottom: -885px;
      left: -885px;

      background: radial-gradient(circle, #ffffff, #e7effa);
      border-radius: 1000%;

      @include minimize() {
        transform: translate(-550px, -200px);
      }
    }
    > .img-privacy-subway {
      width: calc(50% + 21.6px);
      position: absolute;
      bottom: -105px;
      right: -91px;

      z-index: -1;

      @include minimize() {
        width: 506.59px;
        height: 674.19px;
        bottom: -344.71px;
        right: -43px;
      }
    }

    > .privacy-left {
      width: calc(50% + 91px - 21.6px);
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 11.37px;

      text-align: start;

      @include minimize() {
        width: 100%;
        padding: 0px;
      }

      > .privacy-title {
        display: block;

        font-size: 60px;
        font-weight: 800;
        line-height: 72px;
        letter-spacing: -1.2px;

        @include minimize() {
          font-size: 48px;
          line-height: 59px;
          padding-right: 50px;
        }
      }

      > .privacy-description {
        margin-top: 48px;
        margin-bottom: 73.5px;
        display: block;

        font-size: 20px;
        line-height: 30px;

        @include minimize() {
          margin-top: 10px;
          padding-right: 30px;

          font-size: 17px;
          line-height: 25px;
        }
      }

      > .privacy-bt-iphone {
        margin-top: 22.5px;
        margin-right: 48px;

        @include minimize() {
          margin-left: auto;
          margin-right: auto;
        }
      }
      > .privacy-bt-android {
        margin-top: 22.5px;
      }
    }
    > .privacy-right {
      @include minimize() {
        width: 100%;
        height: 350px;
        top: 0;
        left: -50px;
        margin-top: 50px;
      }

      > .img-privacy-phone {
        width: 241.5px;
        height: auto;
        margin-left: 40px;

        @include minimize() {
          width: 352px;
          margin: 0;
          transform: translateY(-65px);
        }
      }
    }
  }
  > .review-container {
    text-align: left;
    background: linear-gradient(to bottom, #f7c95f, #fdb235);

    @include minimize() {
      padding-bottom: 50px;
    }

    > .review-title {
      padding-top: 83px;
      padding-left: 96px;
      display: block;

      font-size: 36px;
      font-weight: 800;
      line-height: 45px;
      letter-spacing: -0.72px;

      @include minimize() {
        width: 100%;
        margin: 0 auto;
      }
    }

    > .slide-container {
      width: 100%;
      margin: 72px 0;
      overflow: hidden;
      position: relative;

      > .first-slide-track,
      > .second-slide-track {
        width: 100%;
        display: flex;
        animation: moveLeft 5s linear infinite;

        > .slide {
          margin-left: 15px;
          margin-right: 15px;
        }
      }

      > .second-slide-track {
        position: absolute;
        top: 0;
        left: (400px+30px) * 5;
      }
    }
    > .logo-container {
      width: 100%;
      padding-left: 96px;
      padding-right: 96px;
      padding-bottom: 84px;

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      @include minimize() {
        padding: 0 10px;
      }

      > .logo-list-text {
        margin-right: auto;

        font-size: 23px;
        font-weight: 800;
        letter-spacing: -0.48px;

        @include minimize() {
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
      }

      > .logo-grid-container {
        display: grid;

        grid-auto-flow: column;
        gap: 36px; /* 그리드 간격 */

        @include minimize() {
          grid-auto-flow: row;

          grid-template-columns: repeat(2, 1fr); /* 3개의 열을 균등하게 배분 */
        }

        > .logo-image {
          width: 130px;
          height: 95px;

          @include minimize() {
            margin: 40px 20px 20px 20px;
          }
        }
      }
    }
  }
  > .security-container {
    width: 100%;
    padding: 86px 132px;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;

    @include minimize() {
      padding: 0;
    }

    > .security-left {
      width: 50%;
      padding-left: 60px;

      text-align: left;

      @include minimize() {
        width: 100%;
        text-align: lef;
      }

      > .security-title {
        width: 100%;
        padding-right: 81.6px;
        display: block;

        font-size: 36px;
        font-weight: 800;
        line-height: 45px;
        letter-spacing: -0.7px;
      }

      > .security-description {
        width: 100%;
        padding-right: 75px;
        margin-top: 43px;
        margin-bottom: 76px;
        display: block;

        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0;
      }

      > .security-bt-iphone {
        margin-bottom: 24px;
        margin-right: auto;
        display: block;
      }

      > .security-bt-android {
        display: block;
      }
    }
    > .security-right {
      width: 50%;

      @include minimize() {
        width: 100%;
        display: flex;
        margin-left: 0;
        justify-items: left;
      }

      > .img-security {
        max-width: 510px;
        height: auto;

        margin-left: 39px;
        transform: translateY(20px);

        @include minimize() {
          margin-left: 0;
          overflow: hidden;
        }
      }
    }
  }

  > .icon-container {
    width: 100%;
    padding-top: 83px;
    padding-bottom: 84px;

    justify-content: center;
    background: linear-gradient(to bottom, #f3f8ff, #e7effa);

    > .icon-title {
      max-width: 840px;
      margin: 0 auto;
      padding-left: 50px;
      padding-right: 50px;
      display: block;

      font-size: 36px;
      font-weight: 800;
    }

    > .icon-item-list-container {
      max-width: 840px;
      width: 100%;
      margin: 0 auto;
      margin-top: 72px;
      padding: 72px;

      border-radius: 50px;
      justify-content: center;
      background-color: #ffffff;

      @include minimize() {
        padding: 60px 80px;
        background: none;
      }

      > .icon-grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3열 */
        gap: 48px;

        @include minimize() {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
        }

        > .icon-item {
          @include minimize() {
            margin: 20px auto;
          }
        }
      }

      > .icon-bt-iphone {
        margin-top: 72px;
        margin-right: 24px;
        @include minimize() {
          margin: 0 auto;
        }
      }
    }
  }

  > .story-help-container {
    width: 100%;
    padding: 84px 0;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;

    @include minimize() {
      flex-direction: column;
      align-items: center;
    }

    > .story-container {
      max-width: 460px;
      width: 100%;
      padding: 48px;
      padding-top: 47px;

      text-align: left;
      border-radius: 50px;
      background: linear-gradient(to bottom, #f7c95f, #fdb235);

      > .story-title {
        display: block;

        font-size: 23px;
        font-weight: 800;
        letter-spacing: -0.48px;
      }

      > .story-description {
        margin-top: 24px;
        margin-bottom: 48px;
        padding-right: 5.17px;

        display: block;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
      }

      > .story-bt {
        font-size: 15px;
        color: #ffffff;
        background-color: #4335de;
      }
    }

    > .help-container {
      max-width: 380px;
      width: 100%;
      padding: 48px;
      padding-top: 47px;
      padding-left: 120px;

      text-align: start;

      @include minimize() {
        padding: 50px;
        margin-top: 20px;

        border-radius: 50px;
        border: #000000 1px solid;
      }

      > .help-title {
        display: block;

        font-size: 23px;
        font-weight: 800;
        letter-spacing: -0.48px;
      }
      > .help-description {
        margin-top: 24px;
        margin-bottom: 48px;
        padding-right: 15.97px;

        display: block;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
      }
      > .help-bt {
        font-size: 15px;

        @include minimize() {
          margin: 0;
        }
      }
    }
  }
  > .spying-container {
    width: 100%;
    padding-top: 84px;
    padding-bottom: 84px;

    background: linear-gradient(to bottom, #2925cc, #4b48e5);

    @include minimize() {
    }

    > .spying-title {
      max-width: 720px;
      margin: 0 auto;
      display: block;

      font-size: 34px;
      font-weight: 800;
      letter-spacing: -0.72px;
      line-height: 45px;
      color: #ffffff;
    }

    > .spying-description {
      max-width: 720px;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 60px;
      display: block;

      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0;
      color: #ffffff;
    }

    > .spying-bt-iphone {
      margin-right: 24px;
    }
    > .spying-bt-android {
      color: #ffffff;
      box-shadow: inset 0 0 0 2px #ffffff;
    }
  }

  > .insight-container {
    padding-top: 84px;
    padding-bottom: 84px;
    background-color: #f3f8ff;
    overflow: hidden;

    > .insight-title {
      font-size: 56px;
      font-weight: 800;
    }
    > .insight-item-list {
      width: 100%;
      margin: 0 auto;
      padding: 72px 0;
      display: flex;

      overflow-x: auto;
      justify-content: center;
      scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
      -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨기기 */

      @include minimize() {
        animation: carousel 20s infinite;
        overflow: visible;
      }

      > .insight-item {
        margin: 0 40px;
      }

      > .insight-item:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);

        @include minimize() {
          transform: none;
          box-shadow: none;
        }
      }
    }
    .insight-bt {
    }
  }
}

//////////////////////////////////////////////

.bt {
  @include white-bt;
}
.bg-color-orange {
  @include orange-bt;
}

/* 무한 슬라이드 애니메이션 */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes carousel {
  10% {
    transform: translateX(-33%);
  }
  33% {
    transform: translateX(-33%);
  }
  43% {
    transform: translateX(33%);
  }
  66% {
    transform: translateX(33%);
  }
  76% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
