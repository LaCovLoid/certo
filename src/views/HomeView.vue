<template>
  <div class="home-container">
    <!-- ----------------------------------- -->
    <div class="privacy-container">
      <div class="privacy-bg-circle"></div>
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
      <div class="insight-item-list" id="insight-item-list">
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

/////////////////////////////////////////////////////////////////////////
function adjustScrollPosition() {
  const container = document.getElementById("insight-item-list") as HTMLElement;
  const items = container.getElementsByClassName(
    "insight-item"
  ) as HTMLCollectionOf<HTMLElement>; // 타입 단언 사용

  const itemWidth = items[0].offsetWidth; // 첫 번째 아이템의 너비를 사용
  const containerWidth = container.offsetWidth;

  container.scrollLeft = (itemWidth * 3 - containerWidth) / 2 + itemWidth / 1.3;
}

// 창 크기 변경 시마다 스크롤을 가운데로 맞추기
window.addEventListener("resize", adjustScrollPosition);

// 로딩순간
window.onload = adjustScrollPosition;
</script>

<style lang="scss" scoped>
@mixin minimize($width) {
  @media (max-width: $width) {
    @content;
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

    @include minimize(1000px) {
      height: auto;
      flex-wrap: wrap;
    }

    > .privacy-bg-circle {
      width: 1770px;
      height: 1770px;
      position: absolute;

      background: radial-gradient(circle, #ffffff, #e7effa);
      border-radius: 1000%;
      transform: translate(-800px, -200px);
    }

    > .privacy-left {
      max-width: 50%;
      transform: translate(75px, 75px);
      margin: 50px 20px;
      padding-right: 10px;

      text-align: start;

      @include minimize(1000px) {
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
        @include minimize(1000px) {
          margin: 10px auto;
        }
      }
    }
    > .privacy-right {
      position: relative;
      top: 80px;
      left: 40px;
      flex-grow: 1;

      @include minimize(1000px) {
        width: 550px;
        height: 350px;
        top: 0;
        left: -50px;
        margin-top: 50px;
      }

      > .img-privacy-subway {
        width: calc(100% + 50px);
        height: auto;
        z-index: 0;
      }
      > .img-privacy-phone {
        width: 240px;
        position: absolute;
        top: 50px;
        left: 30px;

        @include minimize(1000px) {
          width: 500px;
          left: calc(50% - 250px + 50px);
          padding: 60px;
          top: -200px;
        }
      }
    }
  }
  > .review-container {
    padding: 100px 0;
    background: linear-gradient(to bottom, #f7c95f, #fdb235);
    text-align: start;

    @include minimize(1000px) {
      padding-bottom: 50px;
    }

    > .review-title {
      margin-left: 100px;
      display: block;
      font-size: 36px;
      font-weight: 800;

      @include minimize(1000px) {
        text-align: center;
        width: 100%;
        margin: 0 auto;
      }
    }

    > .slide-container {
      width: 100%;
      margin: 80px 0;
      overflow: hidden;

      > .slide-track {
        display: flex;
        width: 300%; /* 전체 길이 (3배) */
        animation: scroll 20s linear infinite; /* 무한 반복 애니메이션 */

        > .slide {
          width: 400px;
          height: 305px;
          min-width: 400px;
          max-width: 400px;
          display: flex;
          flex-wrap: wrap;
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

      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      @include minimize(1000px) {
        padding: 0 10px;
      }

      > .logo-list-text {
        margin-right: 80px;
        font-size: 23px;
        font-weight: 800;

        @include minimize(1000px) {
          text-align: center;
          width: 100%;
          margin: 0 auto;
        }
      }
      > .logo-image {
        width: 130px;
        height: 95px;
        margin: 0 20px;

        @include minimize(1000px) {
          margin: 40px 20px 20px 20px;
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
      text-align: left;
      margin-right: 100px;

      @include minimize(1000px) {
        margin-right: 0;
      }

      > .security-title {
        width: 446px;
        display: block;
        font-size: 36px;
        font-weight: 800;
      }
      > .security-description {
        width: 446px;
        margin: 50px 0;
        display: block;
        font-size: 20px;
      }
      > .bt {
        margin: 10px 0;

        @include minimize(1000px) {
          margin: 10px auto;
        }
      }
    }
    > .security-right {
      margin-left: 50px;
      overflow: hidden;

      @include minimize(1000px) {
        width: 100%;
        display: flex;
        justify-items: left;
        margin-left: 0;
      }

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

      @include minimize(1000px) {
        padding: 60px 80px;
        background: none;
      }

      > .icon-item {
        width: 200px;
        height: 265px;
        margin: 20px 10px 60px 10px;

        background-color: #000000;

        @include minimize(1000px) {
          margin: 20px auto;
        }
      }
      > .bt {
        margin: 10px 20px;
      }
    }
  }

  > .story-help-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 90px 0;

    @include minimize(1000px) {
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
        display: block;
        font-size: 16px;

        margin: 30px 0 50px 0;
      }

      > .bt {
        @include minimize(1000px) {
          margin: 0;
        }
      }
    }

    > .help-container {
      max-width: 460px;
      width: 100%;
      padding: 50px 0 50px 100px;

      text-align: start;

      @include minimize(1000px) {
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
        display: block;
        margin: 25px 0 50px 0;
      }
      > .help-bt {
        padding-top: 15px;
        font-size: 16px;
        @include minimize(1000px) {
          margin: 0;
        }
      }
    }
  }
  > .spying-container {
    width: 100%;
    padding: 100px;

    background: linear-gradient(to bottom, #2925cc, #4b48e5);

    @include minimize(1000px) {
      padding: 50px;
    }

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
      @include minimize(1000px) {
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
      justify-content: left;

      overflow-x: auto;
      scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
      -ms-overflow-style: none; /* IE/Edge에서 스크롤바 숨기기 */
      scroll-behavior: smooth;

      > .insight-item {
        min-width: 320px;
        max-width: 320px;
        height: 534px;
        margin: 0 80px; /* 아이템 간의 고정 간격 */

        border: #000000 1px solid;
        scroll-snap-align: center; /* 각 아이템을 가운데로 정렬 */
      }

      > .insight-item:hover {
        transform: scale(1.1); /* 마우스를 올리면 살짝 확대 */
        box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3); /* 그림자 효과 */

        @include minimize(1000px) {
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

  border: #000000 2px solid;
  border-radius: 40px;
  cursor: pointer;

  @include minimize(1000px) {
    display: block;
    width: fit-content;
    margin: 20px auto;
  }
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
  }
}
</style>
