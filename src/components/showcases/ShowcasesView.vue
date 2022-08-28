<script setup>
import ShowcasesItemVue from "./ShowcasesItem.vue";
import { getVideos } from "../../api/getVideos";
const videos = await getVideos();
</script>

<template>
  <section class="showcases">
    <h2 class="title">Showcases</h2>
    <ul class="list">
      <li class="item" v-for="item in videos" :key="item.short">
        <ShowcasesItemVue :video="item" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.showcases {
  position: relative;
}
.title {
  transform: translateY(-100%);
  position: absolute;
}
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-left: 0;
  list-style: none;
}

@media (min-width: 1024px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
