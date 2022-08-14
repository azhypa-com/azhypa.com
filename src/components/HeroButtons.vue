<template>
  <div class="hero-buttons">
    <RouterLink v-if="!isContactsPage" class="btn" to="/media/about"
      >Watch ShowReel</RouterLink
    >
    <RouterLink class="btn btn--accent" to="/media/contacts"
      >Contact</RouterLink
    >
  </div>
</template>

<script setup>
const isContactsPage = window.location.href.includes("contacts");
</script>

<style lang="scss">
.hero-buttons {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
