<template>
  <span class="text"><slot></slot></span>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use "@/global.scss" as *;
.text {
  width: fit-content;
  padding-top: 16px;
  padding-bottom: 15.5px;
  padding-left: 20px;
  padding-right: 25.59px;
  display: inline-block;

  font-size: 19px;
  line-height: 22.5px;
  font-weight: 800;

  cursor: pointer;
  border-radius: 50px;
  box-shadow: inset 0 0 0 2px #000000;

  @include minimize() {
    display: block;
    margin: 20px auto;
  }
}
</style>
