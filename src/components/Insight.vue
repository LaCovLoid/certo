<template>
  <div class="insight-container">
    <span class="bt">{{ value.btText }}</span>
    <img :src="value.image" class="image" />
    <div class="bottom">
      <span
        class="title"
        :style="{ fontSize: (value.titleFontSize ?? 23) + 'px' }"
        >{{ value.title }}</span
      >
      <span
        class="description"
        :style="{ fontSize: (value.descriptionFontSize ?? 16) + 'px' }"
        >{{ value.description }}</span
      >
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

  overflow: hidden;
  border-radius: 50px;
  background-color: #ffffff;

  > .bt {
    padding: 12px 19px;

    position: absolute;
    left: 24px;
    top: 24px;

    font-weight: 800;

    border-radius: 25px;
    background-color: #ffffff;
  }

  > .image {
    width: 100%;
    height: auto;

    object-fit: cover;
  }

  > .bottom {
    padding-top: 44px;
    padding-bottom: 44px;
    padding-left: 48px;
    padding-right: 46px;

    text-align: left;

    > .title {
      padding-right: 25px;

      margin-bottom: 25px;

      display: block;

      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0;
    }

    > .description {
      line-height: 24px;
      letter-spacing: 0;
    }
  }
}
</style>
