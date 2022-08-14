<template>
  <footer class="footer">
    <div class="logo-wrap">
      <img
        alt="azhypa media center logo"
        class="logo"
        src="@/assets/media-center.svg"
        width="285"
        height="85"
      />
    </div>

    <ul class="social">
      <li class="social-item">
        <a class="social-link" href="#!">
          <img
            class="social-img"
            alt=""
            src="@/assets/images/social/linkedin.svg"
            width="42"
            height="38"
          />
        </a>
      </li>
      <li class="social-item">
        <a class="social-link" href="#!">
          <img
            class="social-img"
            alt=""
            src="@/assets/images/social/youtube.svg"
            width="42"
            height="38"
          />
        </a>
      </li>
      <li class="social-item">
        <a class="social-link" href="#!">
          <img
            class="social-img"
            alt=""
            src="@/assets/images/social/instagram.svg"
            width="42"
            height="38"
          />
        </a>
      </li>
      <li class="social-item">
        <a class="social-link" href="#!">
          <img
            class="social-img"
            alt=""
            src="@/assets/images/social/telegram.svg"
            width="42"
            height="38"
          />
        </a>
      </li>
      <li class="social-item">
        <a class="social-link" href="#!">
          <img
            class="social-img"
            alt=""
            src="@/assets/images/social/tiktok.svg"
            width="42"
            height="38"
          />
        </a>
      </li>
    </ul>
    <div class="copyrights">
      <p>© 2022 Azhypa Media Center. All rights reserved.</p>
      <p>© 1998-2022 Wargaming.net. All rights reserved.</p>
      <p>Any unauthorized usage of these materials is prohibited.</p>
    </div>
  </footer>
</template>

<script setup>
const socialLinks = [
  {
    name: "linkedin",
    link: "#",
  },
  {
    name: "youtube",
    link: "#",
  },
  {
    name: "instagram",
    link: "#",
  },
  {
    name: "telegram",
    link: "#",
  },
  {
    name: "tiktok",
    link: "#",
  },
];
</script>

<style land="ssss" scoped>
.footer {
  text-align: center;
  padding: 24px 32px;
}

.logo-wrap {
  margin-bottom: 32px;
}

.social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 42px;
}
</style>
