<template>


        <div class="gnav_wrapper">
        <div @click="toggleActive" :class="{active: isActive}" id="menu_btn" class="hamburger_menu">
          <div class="music_player">
            <button class="btn">Select BGM</button>
          </div>
          <span></span>
        </div>

          <div class="music_components" :class="{active: isActive}">
            <iframe src="https://open.spotify.com/embed/playlist/3Vla3mJojpU64ZPgAB688R?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
          </div>

      </div><!--gnav_wrapper-->
</template>

<style>
.music_player .dropdown {
  margin-bottom: 1em!important;
}

.music_player .btn {
  /* position: absolute; */
  /* top: 82vh;
  right: 0.5rem; */
  font-weight: bold;
  /* background-color: #FFF; */
  border-color: #42b983;
  color: #42b983;
  margin: 0;
  z-index: 10000;
  padding-right: 34px;
}
/* .music_player .btn:hover {
  background-color: #42b983!important;
  border-color: #42b983;
  border: none;
  color: #FFF;
}

.music_player .btn-check:focus + .music_player .btn, .music_player .btn:focus {
  background-color: #42b983!important;
  border-color: #42b983;
  color: #FFF;
} */

.btn-check:checked + .btn, .btn-check:active + .btn, .btn:active, .btn.active, .show > .btn.dropdown-toggle {
  background-color: #42b983!important;
  border: none;
  color: #FFF;
}

.dropdown-menu {
  z-index: 2000!important;
}

/* .dropdown-toggle::after {
  display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    background-image: url();
} */

.music_components {
  /* display: none; */
  position: absolute;
  top: -200vh;
  left: 0;
  width: 100vw;
  /* background-color: rgba(58, 19, 1, 0.7); */
  padding-top: 80px;
  /* transform: translateX(-100vw); */
  transition: all 1s;
  z-index: 1;
}
.music_components.active {
  top: 252px;
  /* overflow: scroll; */
  height: 100vh;
  /* transform: translateX(0); */
  z-index: 1000;
}
iframe {
  margin-top: 100px;
}

@media (min-width: 4000px) {
  .music_components {
    transition: none;
    transform: none;
    position: initial;
    top: auto;
    left: auto;
    width: auto;
    background-color: transparent;
    padding-top: 0;
  }

}
/* ハンバーガーメニュー */
.nav_hidden {
  display: none;
}
.hamburger_menu,
.hamburger_menu span {
  display: inline-block;
}
.hamburger_menu {
  /* display: none; */
  position: relative;
  z-index: 10;
  /* width: 40px;
  height: 18px; */
  cursor: pointer;
}
.hamburger_menu:hover {
  /* opacity: 0.8; */
}
.hamburger_menu span {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #42b983;
  transition: all 0.4s;
  position: absolute;
}
.hamburger_menu span:nth-of-type(1) {
  top: 14px;
  right: 10px;
}
.hamburger_menu span:nth-of-type(2) {
  top: 8px;
}
.hamburger_menu span:nth-of-type(3) {
  top: 16px;
}

.hamburger_menu.active span {
  background-color: #FFF;
}
.hamburger_menu.active span:nth-of-type(1) {
  transform: rotate(-180deg);
}
.hamburger_menu.active span:nth-of-type(2) {
  display: none;
}
.hamburger_menu.active span:nth-of-type(3) {
  transform: translateY(-8px) rotate(45deg);
}

@media (min-width: 4000px) {
  .hamburger_menu {
    display: none;
  }
}

</style>

<script>
const h = document.querySelector('html');

export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.isActive = false;
      if(this.isActive === true) {
        h.classList.add('active');
      } else {
        h.classList.remove('active');
      }
    })
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
      if(this.isActive === true) {
        h.classList.add('active');
      } else {
        h.classList.remove('active');
      }
    }
  }
}
</script>