<template>
  <div id="navbar">
    <div id="mobile-nav" tabindex="0">
      <div id="ham-top-list" class="ham-list">
        <!--TODO: Add a Logo -->
        <div class="ham-item">
          <font-awesome-icon :icon="['fas', 'gallery-thumbnails']" />
          <a href="./gallery.html" class="ham-item">Gallery</a>
        </div>
        <div class="ham-item">
          <a href="./yoursole.html" class="ham-item">Your Sole</a>
        </div>
      </div>
      <div id="ham-bottom-list" class="ham-list">
        <div class="ham-item">
          <a href="./faq.html" class="ham-item">F.A.Q.</a>
        </div>
        <a href="./aboutus.html" class="ham-item">About Us</a>
      </div>
    </div>

    <div class="desktop-nav">
      <svg @click="open_ham_menu" id="ham-icon" fill="none" viewBox="0 0 40 40">
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
        <li><a href="/gallery.html">Gallery</a></li>
        <li><a href="/yoursole.html">Your Sole</a></li>
      </ul>
      <div id="logo">Sole-Blast</div>
      <ul id="right-list" class="nav-list">
        <li><a href="/faq.html">F.A.Q.</a></li>
        <li><a href="/aboutus.html">About Us</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open_ham_menu() {
      const ham_list = document.getElementById("mobile-nav");
      ham_list.focus();
      ham_list.style.left = "0";
      ham_list.addEventListener("focusout", this.focusout_ham);
    },
    close_ham_menu() {
      const ham_list = document.getElementById("mobile-nav");
      ham_list.style.left = "-50%";
      ham_list.removeEventListener("focusout", this.focusout_ham);
    },
    focusout_ham() {
      console.log("focusout");
      this.close_ham_menu();
    }
  },
};
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
  padding: var(--space-2xs);
}
#logo {
  font-family: "Ubuntu", sans-serif;
  font-size: var(--step-4);
  cursor: pointer;
  user-select: none;
  margin: 0 auto 0 0;
}
#ham-icon {
  cursor: pointer;
  width: 3rem;
  margin-right: auto;
  z-index: 2;
}
.nav-list {
  display: none;
}
#mobile-nav {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.2px);
  -webkit-backdrop-filter: blur(8.2px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;

  position: absolute;
  /*left: -50%;
  top: 0;*/
  height: 100vh;
  height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  transition: left 300ms ease-in;
}
#mobile-nav:focus {
  outline: none;
}
.ham-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-m) var(--space-s);
}
.ham-item {
  color: var(--secondary);
  font-weight: 800;
  font-size: var(--step-2);
  text-decoration: none;
}
@media (min-width: 961px) {
  #mobile-nav,
  #ham-icon {
    display: none;
  }

  #navbar {
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
  }
  #logo {
    font-family: "Ubuntu", sans-serif;
    letter-spacing: -1.4px;
    /*font-size: 4rem;*/
    transform: rotate(-5deg);
    cursor: pointer;
    user-select: none;
    color: var(--primary);
  }
  .nav-list {
    list-style: none;
    display: flex;
    gap: 2vw;
  }

  .nav-list li {
    cursor: pointer;
    position: relative;
    text-decoration: none;
    padding-bottom: 2px;
    margin-top: 40px;
  }
  .nav-list li a {
    text-decoration: none;
    color: var(--primary);
  }
  .nav-list li a:hover {
    color: var(--secondary);
  }
  .nav-list li::after {
    content: "";
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

  #right-list {
    padding-right: 40px;
  }
}
</style>
