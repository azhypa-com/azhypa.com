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

<style lang="scss" scoped>
.footer {
  text-align: center;
  padding: 24px 32px;

  @media (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    padding: 52px 84px;
  }
}

.logo-wrap {
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-bottom: 72px;
  }

  @media (min-width: 1440px) {
    order: 2;
    margin-bottom: 0;
  }
}

.logo {
  width: 110px;
  height: auto;

  @media (min-width: 768px) {
    width: 214px;
  }

  @media (min-width: 1440px) {
    width: 270px;
  }
}

.social {
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-left: 0;
  list-style: none;
  margin-bottom: 42px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 72px;
  }

  @media (min-width: 1440px) {
    font-size: 16px;
    justify-content: flex-start;
    flex: 1 1 100%;
    order: 1;
    margin-bottom: 0;
  }
}

.copyrights {
  @media (min-width: 1440px) {
    text-align: right;
    flex: 1 1 100%;
    order: 3;
  }
}
</style>
