<template>
  <div class="review-container">
    <img
      v-for="index in value.score"
      :key="index"
      src="@/assets/images/icon/star.png"
      class="star-icon"
    />
    <span class="text">{{ value.text }}</span>
    <span class="writer">{{ value.writer }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ReviewDataType } from "../types";

defineProps<{
  value: ReviewDataType;
}>();
</script>

<style lang="scss" scoped>
.review-container {
  min-width: 400px;
  max-width: 400px;
  height: 305px;

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;

  background-color: #ffffff;
  border-radius: 50px;

  > .star-icon {
    width: 24px;
    height: 24px;
  }

  > .text {
    margin-top: 20px;
    margin-bottom: 18px;

    display: block;
  }

  > .writer {
    display: block;

    font-weight: 800;
  }
}
</style>
