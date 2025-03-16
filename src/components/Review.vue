<template>
  <div class="review-container">
    <img
      v-for="index in value.score"
      :key="index"
      src="../assets/images/icon_star.png"
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
  width: 400px;
  height: 305px;
  min-width: 400px;
  max-width: 400px;
  padding: 40px 50px;

  background-color: #ffffff;
  border-radius: 50px;

  > .star-icon {
    width: 24px;
    height: 24px;
  }
  > .text {
    display: block;
    margin: 20px 0 18px 0;
  }
  > .writer {
    display: block;
    font-weight: 800;
  }
}
</style>
