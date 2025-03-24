<template>
  <div class="insight-container">
    <span class="bt">{{ value.btText }}</span>
    <img :src="value.image" class="image" />
    <div class="bottom">
      <span class="title">{{ value.title }}</span>
      <span class="text">{{ value.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InsightsDataType } from "../types";

defineProps<{
  value: InsightsDataType;
}>();
</script>

<style lang="scss" scoped>
.insight-container {
  min-width: 320px;
  max-width: 320px;
  height: 534px;

  position: relative;
  background-color: #ffffff;
  border-radius: 50px;
  overflow: hidden;

  > .bt {
    padding: 12px 19px;
    left: 23px;
    top: 24px;

    position: absolute;
    background-color: #ffffff;
    border-radius: 25px;
    font-weight: 800;
  }

  > .image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  > .bottom {
    padding-left: 48px;
    padding-right: 46px;
    padding-top: 44px;
    padding-bottom: 44px;
    text-align: left;

    > .title {
      display: block;
      padding-right: 25px;
      margin-bottom: 25px;

      font-size: 23px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0;
    }

    > .text {
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0;
    }
  }
}
</style>
