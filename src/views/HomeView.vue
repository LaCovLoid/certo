<template>
  <div class="home-container">
    <!-- ---------- Privacy-Container ---------- -->

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
        <OrangeButton class="privacy-bt-iphone"
          >Get Certo for iPhone</OrangeButton
        >
        <WhiteButton class="privacy-bt-android"
          >Get Certo for Android</WhiteButton
        >
      </div>
      <div class="privacy-right">
        <img
          src="@/assets/images/picture/smartphone.png"
          class="img-privacy-phone"
        />
      </div>
    </div>

    <!-- ---------- Review-Container ---------- -->

    <div class="review-container">
      <span class="review-title">
        Loved by thousands of iPhone and Android users alike
      </span>
      <div class="slide-container">
        <div class="first-slide-track">
          <Review
            v-for="(item, index) in reviewList"
            :key="index"
            :value="item"
            class="slide-item"
          >
          </Review>
        </div>
        <div class="second-slide-track">
          <Review
            v-for="(item, index) in reviewList"
            :key="index"
            :value="item"
            class="slide-item"
          >
          </Review>
        </div>
      </div>
      <div class="logo-container">
        <span class="logo-list-text">Featured in:</span>
        <div class="logo-grid-container">
          <img
            v-for="(item, index) in logoList"
            :key="index"
            :src="item"
            class="logo-image"
          />
        </div>
      </div>
    </div>

    <!-- ---------- Security-Container ---------- -->

    <div class="security-container">
      <div class="security-left">
        <span class="security-title">
          At Certo, <span class="minimize-line-change"></span>mobile security is
          not an afterthought, it’s what we do.
        </span>
        <span class="security-description">
          With years of experience in mobile security and spyware detection, our
          products have helped countless people safeguard their devices and find
          peace of mind.
        </span>
        <OrangeButton class="security-bt-iphone"
          >Get Certo for iPhone</OrangeButton
        >
        <WhiteButton class="security-bt-android"
          >Get Certo for Android</WhiteButton
        >
      </div>
      <div class="security-right">
        <img
          src="@/assets/images/picture/woman_using_smartphone.png"
          class="img-security"
        />
      </div>
    </div>

    <!-- ---------- Icon-Container ---------- -->

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
        <OrangeButton class="icon-bt-iphone">Get Certo for iPhone</OrangeButton>
        <WhiteButton class="icon-bt-android">Get Certo for Android</WhiteButton>
      </div>
    </div>

    <!-- ---------- Story-Help-Container ---------- -->

    <div class="story-help-container">
      <div class="story-container">
        <span class="story-title">Read our story</span>
        <span class="story-description">
          Find out why thousands trust Certo to secure their mobile world.
        </span>
        <span class="story-bt">
          About us
          <img
            src="../assets/images/icon/chevron_right.svg"
            class="story-bt-chevron"
          />
        </span>
      </div>
      <div class="help-container">
        <span class="help-title">Help Center</span>
        <span class="help-description">
          Help topics, getting started guides and FAQs.
        </span>
        <WhiteButton class="help-bt">Visit help center</WhiteButton>
      </div>
    </div>

    <!-- ---------- Spying-Container ---------- -->

    <div class="spying-container">
      <span class="spying-title">Is someone spying on your phone?</span>
      <span class="spying-description">Find out with Certo</span>
      <OrangeButton class="spying-bt-iphone">Get Certo for iPhone</OrangeButton>
      <WhiteButton class="spying-bt-android">Get Certo for Android</WhiteButton>
    </div>

    <!-- ---------- Insight-Container ---------- -->

    <div class="insight-container">
      <span class="insight-title">Latest insights</span>
      <div class="insight-item-list" :style="carouselStyle">
        <Insights
          v-for="(item, index) in insightsList"
          :key="index"
          :value="item"
          class="insight-item"
          @click="changeSelectedInsightItem(index)"
        />
      </div>
      <OrangeButton class="insight-bt">View all insight</OrangeButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";

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
const logoList = ref<string[]>(iconData.logos);

const screenWidth = ref(window.innerWidth);
const selectedInsightItem: Ref<number> = ref(1);

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

//창 크기 실시간 감지지
const updateWidth = () => {
  screenWidth.value = window.innerWidth;
};

//insightItem의 클릭된 값 적용용
const changeSelectedInsightItem = (index: number) => {
  selectedInsightItem.value = index;
};

// insight-item-list에 carousel효과를 창1000px 이하에서만 적용되게게
const carouselStyle = computed(() => {
  if (screenWidth.value <= 1000) {
    return {
      transform: "translateX(" + -(selectedInsightItem.value - 1) * 336 + "px)",
    };
  } else {
    return {}; // 1000px 이하일땐 효과없앰
  }
});
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
    padding-top: 123.37px;
    padding-bottom: 123.37px;
    padding-left: 177px;
    padding-right: 177px;

    display: flex;

    position: relative;
    z-index: 0;

    overflow: hidden;
    background-color: #f3f8ff;

    @include minimize() {
      height: auto;

      padding-top: 33px;
      padding-bottom: 33px;
      padding-left: 26px;
      padding-right: 26px;

      flex-wrap: wrap;
    }

    > .privacy-bg-circle {
      width: 1770px;
      height: 1770px;

      position: absolute;
      bottom: -885px;
      left: -880px;
      z-index: -1;

      border-radius: 1000%;
      background: radial-gradient(circle, #ffffff 30%, #e7effa 70%);

      @include minimize() {
        transform: translate(-520px, -120px);
      }
    }

    > .img-privacy-subway {
      width: calc(50% + 21.6px);

      position: absolute;
      bottom: -102px;
      right: -93px;
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

      padding-top: 11.37px;
      padding-left: 15px;
      padding-right: 15px;

      text-align: left;

      @include minimize() {
        width: 100%;

        padding: 0px;
      }

      > .privacy-title {
        display: block;

        font-size: 60px;
        font-weight: 800;
        line-height: 75px;
        letter-spacing: -1.2px;

        @include minimize() {
          padding-right: 50px;

          font-size: 48px;
          line-height: 59px;
        }
      }

      > .privacy-description {
        margin-top: 48px;
        margin-bottom: 73.5px;

        display: block;

        font-size: 20px;
        line-height: 30px;

        @include minimize() {
          padding-right: 30px;

          margin-top: 10px;
          margin-bottom: 40px;

          font-size: 17px;
          line-height: 25px;
        }
      }

      > .privacy-bt-iphone {
        margin-top: 22.5px;
        margin-right: 48px;

        @include minimize() {
          margin-top: 0;
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

        margin-top: 50px;

        top: 0;
        left: -50px;
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
      max-width: 609px;

      padding-top: 83px;
      padding-right: 45.58px;

      margin-left: 96px;

      display: block;

      font-size: 36px;
      font-weight: 800;
      line-height: 45px;
      letter-spacing: -0.72px;

      @include minimize() {
        padding-top: 32px;
        padding-left: 24px;
        padding-right: 35px;

        margin: 0;
      }
    }

    > .slide-container {
      width: 100%;

      padding-top: 72px;
      padding-bottom: 72px;

      position: relative;

      overflow: hidden;

      @include minimize() {
        padding-top: 30px;
        padding-bottom: 78px;
      }

      > .first-slide-track,
      > .second-slide-track {
        width: 100%;

        display: flex;
        animation: moveLeft 60s linear infinite;

        > .slide-item {
          margin-left: 15px;
          margin-right: 15px;

          box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
        }
      }

      > .second-slide-track {
        position: absolute;
        top: 72px;
        left: (400px+30px) * 5;

        @include minimize() {
          top: 30px;
        }
      }
    }

    > .logo-container {
      width: 100%;

      padding-left: 96px;
      padding-right: 96px;
      padding-bottom: 84px;

      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      align-items: center;
      overflow: hidden;

      @include minimize() {
        padding: 0;
      }

      > .logo-list-text {
        margin-right: auto;

        font-size: 23px;
        font-weight: 800;
        letter-spacing: -0.48px;

        @include minimize() {
          width: 100%;

          margin-bottom: 36px;

          text-align: center;
        }
      }

      > .logo-grid-container {
        padding-left: 42.8px;
        padding-right: 42.8px;

        display: grid;
        grid-auto-flow: column;
        column-gap: 36px;
        row-gap: 59px;

        @include minimize() {
          grid-auto-flow: row;
          grid-template-columns: repeat(2, 1fr);
        }

        > .logo-image {
          width: 130px;
          height: 95px;
        }
      }
    }
  }

  > .security-container {
    width: 100%;

    padding-top: 86px;
    padding-bottom: 86px;
    padding-left: 132px;
    padding-right: 132px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    overflow: hidden;

    @include minimize() {
      padding-top: 32px;
      padding-bottom: 45.98px;
      padding-left: 24px;
      padding-right: 24px;
    }

    > .security-left {
      width: 50%;

      padding-left: 60px;

      text-align: left;

      @include minimize() {
        width: 100%;

        padding-left: 0;

        text-align: left;
      }

      > .security-title {
        width: 100%;

        padding-right: 81.6px;

        display: block;

        font-size: 36px;
        font-weight: 800;
        line-height: 45px;
        letter-spacing: -0.7px;

        @include minimize() {
          padding-right: 0;
        }

        > .minimize-line-change {
          @include minimize() {
            display: block;
          }
        }
      }

      > .security-description {
        width: 100%;

        padding-right: 75px;

        margin-top: 36px;
        margin-bottom: 74px;

        display: block;

        font-size: 20px;
        line-height: 30px;
        letter-spacing: 0;

        @include minimize() {
          margin-top: 19px;
        }
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

        margin-left: 0;

        display: flex;
        justify-items: left;
      }

      > .img-security {
        max-width: 515px;
        height: auto;

        margin-left: 39px;

        transform: translate(-7px, 7px);

        @include minimize() {
          width: 386px;

          margin-left: 0;

          transform: translate(-95px, 30px);
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

    @include minimize() {
      padding-top: 32px;
      padding-bottom: 63.5px;
      padding-left: 6px;
      padding-right: 6px;
    }

    > .icon-title {
      max-width: 840px;

      padding-left: 50px;
      padding-right: 50px;

      margin-left: auto;
      margin-right: auto;

      display: block;

      font-size: 36px;
      font-weight: 800;
      letter-spacing: -0.72px;
      line-height: 45px;

      @include minimize() {
        width: 388px;
        padding: 0;
      }
    }

    > .icon-item-list-container {
      max-width: 840px;
      width: 100%;

      padding: 72px;

      margin-top: 72px;
      margin-left: auto;
      margin-right: auto;

      justify-content: center;

      border-radius: 50px;
      background-color: #ffffff;
      box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);

      @include minimize() {
        padding: 0;

        margin-top: 65px;

        box-shadow: none;
        background-color: transparent;
      }

      > .icon-grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 48px;
        row-gap: 72px;

        @include minimize() {
          grid-template-columns: 1fr;
          row-gap: 32px;
        }

        > .icon-item {
          @include minimize() {
            margin-top: 20px;
            margin-bottom: 20px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }

      > .icon-bt-iphone {
        margin-top: 72px;
        margin-right: 24px;

        @include minimize() {
          margin-top: 0;
          margin-bottom: 0;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }

  > .story-help-container {
    width: 100%;

    padding-top: 84px;
    padding-bottom: 84px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @include minimize() {
      padding-top: 32px;
      padding-bottom: 32px;
      padding-left: 14px;
      padding-right: 14px;

      align-items: center;
      flex-direction: column;
    }

    > .story-container {
      max-width: 460px;
      width: 100%;

      padding: 48px;
      padding-top: 47px;

      text-align: left;

      border-radius: 50px;
      background: linear-gradient(to bottom, #f7c95f, #fdb235);

      @include minimize() {
        max-width: 373px;
        padding-right: 33px;
      }

      > .story-title {
        max-width: 372px;

        display: block;

        font-size: 23px;
        font-weight: 800;
        letter-spacing: -0.48px;
      }

      > .story-description {
        padding-right: 5.17px;

        margin-top: 26px;
        margin-bottom: 60px;

        display: block;

        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
      }

      > .story-bt {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 20px;
        padding-right: 20px;

        margin-top: 48px;

        color: #ffffff;
        font-size: 15px;
        font-weight: 800;

        cursor: pointer;
        box-shadow: none;
        border-radius: 50px;
        background-color: #4335de;

        > .story-bt-chevron {
          width: 16px;
          height: 11px;

          margin-left: 8.67px;

          filter: invert(1);
        }
      }
    }

    > .help-container {
      max-width: 380px;
      width: 100%;

      padding-top: 47px;
      padding-bottom: 48px;
      padding-left: 120px;
      padding-right: 48px;

      text-align: start;

      @include minimize() {
        padding: 48px;
        padding-right: 112px;

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
        padding-right: 15.97px;

        margin-top: 24px;
        margin-bottom: 48px;

        display: block;

        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0;
      }
      > .help-bt {
        padding-top: 14px;
        padding-bottom: 14px;
        padding-right: 20px;

        margin: 0;

        font-size: 15px;
      }
    }
  }
  > .spying-container {
    width: 100%;

    padding-top: 84px;
    padding-bottom: 84px;

    background: linear-gradient(to bottom, #2925cc, #4b48e5);

    @include minimize() {
      padding-top: 32px;
      padding-bottom: 31.5px;
      padding-left: 33px;
      padding-right: 34px;
    }

    > .spying-title {
      max-width: 720px;

      margin-left: auto;
      margin-right: auto;

      display: block;

      color: #ffffff;
      font-size: 34px;
      font-weight: 800;
      line-height: 45px;
      letter-spacing: -0.72px;
    }

    > .spying-description {
      max-width: 720px;

      margin-top: 50px;
      margin-bottom: 60px;
      margin-left: auto;
      margin-right: auto;

      display: block;

      color: #ffffff;
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0;

      @include minimize() {
        margin-top: 18px;
        margin-bottom: 53px;
      }
    }

    > .spying-bt-iphone {
      margin-right: 24px;

      @include minimize() {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 22.5px;
      }
    }

    > .spying-bt-android {
      color: #ffffff;
      box-shadow: inset 0 0 0 2px #ffffff;
    }
  }

  > .insight-container {
    padding-top: 84px;
    padding-bottom: 84px;

    overflow: hidden;
    background-color: #f3f8ff;

    @include minimize() {
      padding-top: 32px;
      padding-bottom: 33.5px;
    }

    > .insight-title {
      font-size: 56px;
      font-weight: 800;
      letter-spacing: -0.72px;

      @include minimize() {
        font-size: 32px;
      }
    }

    > .insight-item-list {
      width: 100%;

      padding-top: 72px;
      padding-bottom: 72px;

      display: flex;
      justify-content: center;

      overflow-x: auto;
      scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
      -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨기기 */

      transition: transform 0.3s ease;

      @include minimize() {
        padding-top: 53px;
        padding-bottom: 77px;

        overflow: visible;
      }

      > .insight-item {
        margin-left: 24px;
        margin-right: 24px;

        @include minimize() {
          margin-left: 12px;
          margin-right: 12px;
        }
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
      margin-left: auto;
      margin-right: auto;
    }
  }
}
</style>
