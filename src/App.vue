
<template>

  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/selectitemview">Select Item</router-link>
    </nav>
    <div class="music_player">
      <b-dropdown
        text="Select BGM"
        block
        variant="primary"
        class="m-2"
        menu-class="w-100"
      >
    <MusicPlayer />
      </b-dropdown>
    </div>
    <!-- <transition name="slide">
    <router-view/>
    </transition> -->
    <router-view/>
  </div>
</template>

<script>
import MusicPlayer from "./components/MusicPlayer";

export default {
  components: { MusicPlayer }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-family: 'Caveat', cursive;
  /* padding: 10px;
  border: 1px solid #2c3d4f;
  -webkitborder-radius: 41px 35px 50px 11px/11px 50px 35px 41px;
  -moz-border-radius: 41px 35px 50px 11px/11px 50px 35px 41px;
  border-radius: 41px 35px 50px 11px/11px 50px 35px 41px;
  width: 80%; */
  margin: 0 auto;
  position: relative;
  color: #00a02e;
}

h2::after {
  display: block;
  content: "";
  height: 5px;
  background: -moz-linear-gradient(to right, rgb(10, 350, 20), transparent);
  background: -webkit-linear-gradient(to right, rgb(10, 350, 20), transparent);
  background: linear-gradient(to right, rgb(10, 350, 20), transparent);
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.ttl {
  font-family: 'Caveat', cursive;
  font-size: 4rem;
  margin-bottom: 30px;
}

.card-text , .text {
  font-family: 'Noto Sans JP', sans-serif;
}


</style>
