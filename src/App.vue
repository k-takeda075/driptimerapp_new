
<template>

  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/selectitemview">Item Select</router-link>
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
body {
  margin-bottom: 100px;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-family: 'Caveat', cursive;
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
