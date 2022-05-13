<template>

<div class="music_components">
  <iframe src="https://open.spotify.com/embed/playlist/3Vla3mJojpU64ZPgAB688R?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
</div>
</template>

<style>
.music_player .dropdown {
  /* position: relative; */
}

.music_player .btn {
  position: absolute;
  top: 82vh;
  right: 0.5rem;
  z-index: 100;
  font-weight: bold;
  background-color: #FFF;
  border-color: #42b983;
  color: #42b983;
}

.music_player .btn-primary:hover {
  background-color: #42b983!important;
  border-color: #42b983;
  border: none;
  color: #FFF;
}

.music_player .btn-check:focus + .music_player .btn-primary, .music_player .btn-primary:focus {
  background-color: #42b983!important;
  border-color: #42b983;
}

.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
  background-color: #42b983!important;
  border: none;
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

</style>