<template>
  <div id="navbar">
    <div id="mobile-nav" tabindex="0">
      <div id="ham-top-list" class="ham-list">
        <!--TODO: Add a Logo -->
        <div>
          <!-- I want to import an svg asset I added -->
          <router-link to="/shop" class="ham-item">
            <img class="ham-icon" src="../assets/Nav_Shop.svg" alt="Gallery icon" />
            <div>{{ $t('navbar.shop') }}</div>
          </router-link>
        </div>
        <div>
          <router-link to="/yourdesign" class="ham-item">
            <img class="ham-icon" src="../assets/Nav_Your_Design.svg" alt="Shoe svg" />
            <div>{{ $t('navbar.yourdesign') }}</div>
          </router-link>
        </div>
      </div>
      <div id="ham-bottom-list" class="ham-list">
        <div>
          <router-link to="/faq" class="ham-item">
            <img class="ham-icon" src="../assets/Nav_FAQ.svg" alt="FAQ icon" />
            <div>{{ $t('navbar.faq') }}</div>
          </router-link>
        </div>
        <div>
          <router-link to="/about" class="ham-item">
            <img class="ham-icon" src="../assets/Nav_About_Us.svg" alt="About Us icon" />
            <div>{{ $t('navbar.aboutus') }}</div>
          </router-link>
        </div>
        <div></div>
      </div>
    </div>

    <div class="desktop-nav">
      <svg @click="open_ham_menu($event)" id="ham-icon" fill="none" viewBox="0 0 40 40">
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M8.75 11.25h22.5M8.75 19.25h22.5M8.75 27.25h22.5"
          data-darkreader-inline-stroke=""
          style="--darkreader-inline-stroke: #e8e6e3"
        ></path>
      </svg>

      <ul id="left-list" class="nav-list">
        <li>
          <router-link to="/shop">{{ $t('navbar.shop') }}</router-link>
        </li>
        <li>
          <router-link to="/yourdesign"> {{ $t('navbar.yourdesign') }} </router-link>
        </li>
      </ul>
      <div id="logo">
        <router-link to="/">
          <img src="../assets/header_logo.png" alt="" />
        </router-link>
      </div>
      <ul id="right-list" class="nav-list">
        <li>
          <router-link to="/faq"> {{ $t('navbar.faq') }} </router-link>
        </li>
        <li>
          <router-link to="/about">{{ $t('navbar.aboutus') }}</router-link>
        </li>
      </ul>
      <div class="nav-language" @click="changeLang">{{ this.$i18n.locale.toUpperCase() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open_ham_menu(event) {
      event.stopPropagation()

      const ham_list = document.getElementById('mobile-nav')
      ham_list.focus()
      ham_list.style.left = '0'
      ham_list.addEventListener('focusout', this.focusout_ham)
      document.addEventListener('click', this.click_ham)
    },
    close_ham_menu() {
      const ham_list = document.getElementById('mobile-nav')
      ham_list.style.left = '-100%'
      ham_list.removeEventListener('focusout', this.focusout_ham)
      document.removeEventListener('click', this.click_ham)
    },
    focusout_ham() {
      this.close_ham_menu()
    },
    click_ham(event) {
      const ham_list = document.getElementById('mobile-nav')
      if (!ham_list.contains(event.target)) {
        this.close_ham_menu()
      }
    },
    changeLang() {
      this.$i18n.locale === 'en' ? (this.$i18n.locale = 'gr') : (this.$i18n.locale = 'en')
    }
  }
}
</script>

<style scoped>
#navbar {
  color: var(--primary);
  margin: 0px;
  padding: 0px;
}
.desktop-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--space-s) var(--space-s);
}
#logo {
  cursor: pointer;
  user-select: none;
  margin: 0 auto 0 auto;
}
#logo img {
  height: clamp(4rem, 3rem + 7vw, 8rem);
}
#ham-icon {
  cursor: pointer;
  width: calc(3rem + 1vw);
  z-index: 2;
  position: absolute;
  left: calc(1rem + 1vw);
  top: calc(1rem + 1vw);
}
.nav-list {
  display: none;
}
#mobile-nav {
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  position: absolute;
  display: flex;
  left: -100%;
  top: 0;
  height: 100vh;
  height: 100svh;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  transition: left 350ms ease-in-out;
}
#mobile-nav:focus {
  outline: none;
}
.ham-list {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: var(--space-m);
  padding: var(--space-l) var(--space-m);
}
.ham-item {
  color: var(--secondary);
  font-weight: 600;
  font-size: var(--step-2);
  text-decoration: none;
  display: flex;
  align-items: center;
  align-items: center;
  gap: var(--space-xs);
}
.ham-icon {
  width: var(--step-3);
}
.nav-language {
  cursor: pointer;
  user-select: none;
  font-size: var(--step-0);
  font-weight: 600;
}
@media (min-width: 961px) {
  .nav-language {
    font-size: var(--step--1);
  }
  #mobile-nav,
  #ham-icon {
    display: none;
  }
  .desktop-nav {
    justify-content: space-between;
    padding: var(--space-xs) var(--space-l);
  }
  #logo {
    margin: 0 auto;
  }
  .nav-list {
    display: flex;
    gap: var(--space-m);
    margin: 0;
    padding: 0;
  }
  .nav-list li {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    list-style: none;
    gap: var(--space-xl);
  }
  .nav-list li a {
    font-size: var(--step-0);
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
  }
  .nav-list li::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--secondary);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
    transform: scaleX(0);
  }
  .nav-list li:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  .nav-list li:hover {
    color: var(--secondary);
  }
  .nav-list li a:hover {
    color: var(--secondary);
  }
  .nav-language {
    margin-left: var(--space-m);
  }
}
</style>
