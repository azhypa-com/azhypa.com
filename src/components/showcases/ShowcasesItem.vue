<template>
  <article
    class="showcase"
    @mouseover="showShort = true"
    @mouseleave="showShort = false"
  >
    <img
      class="image"
      :src="`../../src/assets/images/showcases/${video.picture}`"
      alt=""
    />

    <video
      v-if="showShort"
      class="short"
      :src="video.short"
      autoplay
      loop
      muted
      playsinline
    ></video>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showShort: false,
    };
  },
  props: {
    video: Object,
  },
};
</script>

<style lang="scss" scoped>
.showcase {
  position: relative;
  aspect-ratio: 16/9;
}

.image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.short {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>
