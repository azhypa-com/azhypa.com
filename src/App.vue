<script setup>
import HeaderView from "./components/layout/HeaderView.vue";
import FooterView from "./components/layout/FooterView.vue";
import ShowcasesView from "./components/showcases/ShowcasesView.vue";
</script>

<template>
  <HeaderView />
  <Suspense>
    <ShowcasesView />
  </Suspense>
  <FooterView />
</template>

<style scoped></style>
