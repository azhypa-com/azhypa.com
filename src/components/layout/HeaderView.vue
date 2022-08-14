<script setup></script>

<template>
  <header class="header">
    <nav class="nav">
      <RouterLink class="logo" to="/media"
        ><img
          alt="logo"
          class="logo"
          src="@/assets/azhypa-logo.svg"
          width="230"
          height="35"
      /></RouterLink>
      <RouterLink class="link" to="/media/about">About</RouterLink>
      <RouterLink class="link" to="/media/contacts">Contacts</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.header {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
  padding: 32px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 40px;
}

.logo {
  margin-right: auto;
}
.link {
  display: none;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
}
.link.router-link-exact-active {
  color: var(--c-brand);
}

@media (min-width: 768px) {
  .link {
    display: block;
  }
}
</style>
