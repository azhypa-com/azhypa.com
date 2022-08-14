<script setup>
import HeroButtons from "@/components/HeroButtons.vue";
</script>

<template>
  <section class="hero">
    <video class="hero-bg" src="@/assets/hero-video.webm" autoplay loop muted playsinline></video>
    <div class="content">
      <div class="logo-wrap">
        <img
          alt="azhypa media center logo"
          class="logo"
          src="@/assets/media-center.svg"
          width="285"
          height="85"
        />
      </div>

      <div class="description">is where AAA videos are created.</div>
      <footer class="footer">
        <HeroButtons />
      </footer>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px 64px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.content {
  text-align: center;
}

.logo-wrap {
  margin-bottom: 20px;

  &::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background-color: var(--c-content);
    margin: 0 auto 30px;
  }
}

.logo {
  @media (min-width: 1268px) {
    width: 616px;
    height: auto;
  }
}

.description {
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.06em;
  margin-bottom: 64px;

  @media (min-width: 1268px) {
    font-size: 28px;
  }
}
</style>
