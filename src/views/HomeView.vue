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
        <span class="bt bg-color-orange">Get Certo for iPhone →</span>
        <span class="bt">Get Certo for Android</span>
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
        <span class="bt bg-color-orange">Get Certo for iPhone →</span>
        <div></div>
        <span class="bt">Get Certo for Android</span>
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
        <!-------------------------------------------->
      </div>
      <span class="bt bg-color-orange">Get Certo for iPhone →</span>
      <span class="bt">Get Certo for Android</span>
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
        <Insights
          v-for="(item, index) in insightsList"
          :key="index"
          :value="item"
          class="insight-item"
        />
      </div>
      <span class="bt bg-color-orange">View all insight</span>
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
    height: 708px;
    display: flex;
    position: relative;

    background-color: #ffffff;
    overflow: hidden;

    @include minimize() {
      height: auto;
      flex-wrap: wrap;
    }

    > .privacy-bg-circle {
      width: 1770px;
      height: 1770px;
      position: absolute;

      background: radial-gradient(circle, #ffffff, #e7effa);
      transform: translate(-800px, -200px);
      border-radius: 1000%;
    }
    > .img-privacy-subway {
      width: 741.59px;
      height: 741.59px;
      position: absolute;
      bottom: -102.59px;
      right: -91px;

      z-index: 0;

      @include minimize() {
        width: 506.59px;
        height: 674.19px;
        bottom: -344.71px;
        right: -43px;
      }
    }

    > .privacy-left {
      max-width: 50%;
      margin: 50px 20px;
      padding-right: 10px;
      transform: translate(75px, 75px);

      text-align: start;

      @include minimize() {
        max-width: 100%;
        transform: translate(0, 0);
        padding: 30px;
      }

      > .privacy-title {
        display: block;

        font-size: 60px;
        font-weight: 700;
      }

      > .privacy-description {
        margin: 50px 0 100px 0;
        display: block;

        font-size: 20px;
        line-height: 28px;
      }

      > .bt {
        margin: 5px 25px;
        @include minimize() {
          margin: 10px auto;
        }
      }
    }
    > .privacy-right {
      position: relative;
      top: 80px;
      left: 40px;

      flex-grow: 1;

      @include minimize() {
        width: 550px;
        height: 350px;
        top: 0;
        left: -50px;
        margin-top: 50px;
      }

      > .img-privacy-phone {
        width: 240px;
        top: 50px;
        left: 30px;

        @include minimize() {
          width: 500px;
          padding: 60px;
          top: -200px;
          left: calc(50% - 250px + 50px);
        }
      }
    }
  }
  > .review-container {
    padding: 100px 0;
    text-align: start;
    background: linear-gradient(to bottom, #f7c95f, #fdb235);

    @include minimize() {
      padding-bottom: 50px;
    }

    > .review-title {
      margin-left: 100px;
      display: block;

      font-size: 36px;
      font-weight: 800;

      @include minimize() {
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
    }

    > .slide-container {
      width: 100%;
      margin: 80px 0;
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

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      @include minimize() {
        padding: 0 10px;
      }

      > .logo-list-text {
        margin-right: 80px;
        font-size: 23px;
        font-weight: 800;

        @include minimize() {
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }
      }

      > .logo-grid-container {
        display: grid;

        grid-auto-flow: column;
        gap: 40px; /* 그리드 간격 */

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
    padding: 100px 0;
    display: flex;

    flex-wrap: wrap;
    justify-content: center;

    > .security-left {
      width: 50%;
      text-align: left;

      @include minimize() {
        width: 100%;
        text-align: lef;
      }

      > .security-title {
        max-width: 446px;
        display: block;

        font-size: 36px;
        font-weight: 800;
      }

      > .security-description {
        max-width: 446px;
        margin: 50px 0;
        display: block;
        font-size: 20px;
      }

      > .bt {
        margin: 10px 0;

        @include minimize() {
          margin: 10px auto;
        }
      }
    }
    > .security-right {
      width: 50%;
      overflow: hidden;

      @include minimize() {
        width: 100%;
        display: flex;
        margin-left: 0;
        justify-items: left;
      }

      > .img-security {
        width: 468px;
        height: 468px;
      }
    }
  }

  > .icon-container {
    width: 100%;
    padding-bottom: 80px;
    justify-content: center;
    background: linear-gradient(to bottom, #f3f8ff, #e7effa);

    > .icon-title {
      max-width: 740px;
      padding: 50px;
      margin: 0 auto;
      display: block;

      font-size: 36px;
      font-weight: 800;
    }

    > .icon-item-list-container {
      max-width: 840px;
      width: 100%;
      margin: 0 auto;
      padding: 60px 0px;

      flex-wrap: wrap;
      border-radius: 50px;
      justify-content: center;
      background-color: #ffffff;

      @include minimize() {
        padding: 60px 80px;
        background: none;
      }

      > .icon-grid-container {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        gap: 40px;

        @include minimize() {
          grid-auto-flow: row;
          grid-template-columns: 1fr;
        }

        > .icon-item {
          margin: 20px 20px 60px 20px;

          @include minimize() {
            margin: 20px auto;
          }
        }
      }

      > .bt {
        margin: 10px 20px;
      }
    }
  }

  > .story-help-container {
    width: 100%;
    padding: 90px 0;
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
        margin: 30px 0 50px 0;
        display: block;
        font-size: 16px;
      }

      > .bt {
        @include minimize() {
          margin: 0;
        }
      }
    }

    > .help-container {
      max-width: 460px;
      width: 100%;
      padding: 50px 0 50px 100px;

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
      }
      > .help-description {
        width: 200px;
        margin: 25px 0 50px 0;
        display: block;
      }
      > .help-bt {
        padding-top: 15px;
        font-size: 16px;

        @include minimize() {
          margin: 0;
        }
      }
    }
  }
  > .spying-container {
    width: 100%;
    padding: 100px;
    background: linear-gradient(to bottom, #2925cc, #4b48e5);

    @include minimize() {
      padding: 50px;
    }

    > .spying-title {
      display: block;

      font-size: 34px;
      font-weight: 800;
      color: #ffffff;
    }

    > .spying-description {
      margin: 60px 0;
      display: block;

      font-size: 18px;
      color: #ffffff;
    }
    > .spying-bt-android {
      margin-left: 20px;

      color: #ffffff;
      border: #ffffff 2px solid;

      @include minimize() {
        margin: 10px auto;
      }
    }
  }

  > .insight-container {
    padding: 80px 0;
    background-color: #f3f8ff;
    overflow: hidden;

    > .insight-title {
      font-size: 56px;
      font-weight: 800;
    }
    > .insight-item-list {
      width: 100%;
      margin: 0 auto;
      padding: 30px 0;
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
        margin: 0 80px;
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

  cursor: pointer;
  border-radius: 40px;
  border: #000000 2px solid;

  @include minimize() {
    display: block;
    width: fit-content;
    margin: 20px auto;
  }
}
.bg-color-orange {
  border: none;
  background-color: #ffc247;
}
.bg-color-purple {
  font-size: 16px;
  border: none;
  color: #ffffff;
  background-color: #4335de;
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
