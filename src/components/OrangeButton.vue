<template>
  <span class="text">
    <slot></slot>
    <img src="@/assets/images/icon/chevron_right.svg" class="chevron-right" />
  </span>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/global.scss" as *;
.text {
  width: fit-content;

  padding-top: 16px;
  padding-bottom: 15.5px;
  padding-left: 20px;
  padding-right: 20px;

  display: inline-block;

  font-size: 19px;
  line-height: 22.5px;
  font-weight: 800;
  letter-spacing: 0;

  cursor: pointer;
  border-radius: 40px;
  background-color: #ffc247;

  > .chevron-right {
    width: 20px;
    height: 14px;

    margin-top: auto;
    margin-bottom: auto;
    margin-left: 14px;
  }

  @include minimize() {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;

    display: block;
  }
}
</style>
