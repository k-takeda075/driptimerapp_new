<template>
  <div class="home">
    <div class="container">
      <h1>Coffee Drip App</h1>
      <h2>HOW TO USE</h2>
      <p class="text">
      コーヒーのドリップ補助アプリです。<span></span>
      使用するドリッパー(器具)を選び、指示にしたがってドリップして下さい。<span></span>
      スケール(はかり)を使用を想定したレシピです。<span></span>
      
      </p>
    </div>
    <a href="/selectitemview" class="btn btn-primary go-select">ドリッパー選択へ進む</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #42b983!important;
    border-color: #42b983;
}

h1 {
  font-family: 'Neonderthaw', cursive;
  font-size: 2.9rem;
  margin-bottom: 30px;
  /* padding: 40px 0 30px; */
}

h2 {
  max-width: 200px;
  font-size: 1.5rem;
  font-weight: 100;
  margin: 40px auto 10px;
}

.text {
  margin: 20px auto 30px;
  text-align: left;
  max-width: 538px;
}

.text span {
  display: block;
}

.go-select {
  font-weight: bold;
  background-color: #ffffffbf;
  border-color: #42b983;
  color: #42b983;
}

.go-select:hover {
  background-color: #42b983;
  border-color: #42b983;
  color: #FFF;
}

.go-select::after {
  content: '';
  width: 1em;
  height: 1em;
  background-image: url(/Users/6d163/Desktop/vue_jissyu/driptimerapp_new/src/assets/arrow-right-circle.svg);
  background-size: contain;
  background-position: center;
} 


</style>