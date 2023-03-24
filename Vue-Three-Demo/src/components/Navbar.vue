<template>
  <div id="navbar">
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

    <div id="ham-list">
      <svg
        @click="close_ham_menu"
        style="
          color: rgb(40, 46, 92);
          --darkreader-inline-color: #f4dc41;
          --darkreader-inline-fill: currentColor;
        "
        width="16"
        id="X-icon"
        height="16"
        fill="currentColor"
        class="bi bi-x"
        viewBox="0 0 16 16"
        data-darkreader-inline-color=""
        data-darkreader-inline-fill=""
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          fill="#282e5c"
          data-darkreader-inline-fill=""
          style="--darkreader-inline-fill: #f4dc41"
        ></path>
      </svg>

      <div id="ham-top-list">
        <div class="ham-item">Gallery</div>
        <div class="ham-item">Your Sole</div>
      </div>
      <div id="ham-bottom-list">
        <div class="ham-item">F.A.Q.</div>
        <div class="ham-item">About Us</div>
      </div>
    </div>

    <ul id="left-list" class="nav-list">
      <li>Gallery</li>
      <li>Your Sole</li>
    </ul>
    <div id="logo">uniqueSole</div>
    <ul id="right-list" class="nav-list">
      <li>F.A.Q.</li>
      <li>About Us</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    open_ham_menu() {
      const ham_list = document.querySelector("#ham-list");
      ham_list.style.left = "0";
    },
    close_ham_menu() {
      const ham_list = document.querySelector("#ham-list");
      ham_list.style.left = "-50%";
    },
  },
};
</script>

<style scoped>
#navbar {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  margin: 0px;
  padding: 0px;
}
.nav-list {
  display: none;
}
#logo {
  font-family: "Ubuntu", sans-serif;
  letter-spacing: -1.4px;
  font-size: 8vw;
  transform: rotate(-5deg);
  cursor: pointer;
  user-select: none;
}
#ham-icon {
  position: absolute;
  width: 35px;
  height: 35px;
  left: 20px;
  top: 30px;
}
#X-icon {
  position: absolute;
  width: 35px;
  height: 35px;
  right: 10px;
  top: 10px;
}
#ham-list {
  position: absolute;
  height: 100vh;
  width: 50%;
  background-color: var(--primary);
  color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 13vh 0 5vh 0;
  z-index: 2;
  font-weight: 600;
  filter: drop-shadow(10px 0px 10px var(--secondary));
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  font-size: 6vw;
  left: -50%;
  top: 0;
  transition: left 200ms ease-in;
}
#ham-top-list div,
#ham-bottom-list div {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

@media (min-width: 641px) {
  #logo {
    font-size: 7vw;
    margin-top: 30px;
  }
}

@media (min-width: 961px) {
  #ham-list,
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
    font-size: 4rem;
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
