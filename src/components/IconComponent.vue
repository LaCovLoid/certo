<template>
  <div class="icon-container">
    <img :src="value.image" class="icon-image" />
    <span class="title">{{ value.title }}</span>
    <span class="text">{{ value.text }}</span>
  </div>
</template>

<script setup lang="ts">
import type { IconDataType } from "../assets/types/types";

defineProps<{
  value: IconDataType;
}>();
</script>

<style lang="scss" scoped>
.icon-container {
  width: 200px;
  height: 265px;

  > .icon-image {
    width: 72px;
    height: 72px;
  }

  > .title {
    display: block;
    margin: 20px 0;

    font-size: 18px;
    font-weight: 800;
  }
  > .text {
    display: block;
    line-height: 22px;
  }
}
</style>
