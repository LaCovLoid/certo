<template>
  <div class="icon-container">
    <img :src="value.image" class="icon-image" />
    <span
      class="title"
      :style="{
        fontSize: (value.titleFontSize ?? 19) + 'px',
        marginBottom: (value.titleMarginBottom ?? 24) + 'px',
      }"
      >{{ value.title }}</span
    >
    <span
      class="text"
      :style="{ fontSize: (value.descriptionFontSize ?? 16) + 'px' }"
      >{{ value.description }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { IconDataType } from "../types";

defineProps<{
  value: IconDataType;
}>();
</script>

<style lang="scss" scoped>
.icon-container {
  width: 200px;
  height: 265px;

  > .icon-image {
    width: 77px;
    height: 72px;
  }

  > .title {
    display: block;
    margin-top: 20px;
    margin-bottom: 24px;

    font-weight: 800;
    line-height: 25px;
    letter-spacing: -0.4px;
  }
  > .text {
    display: block;

    line-height: 24px;
    letter-spacing: 0;
  }
}
</style>
