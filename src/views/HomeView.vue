<template>
  <div class="home">
    <div class="container">
      <h1>Coffee Drip App</h1>
      <h2>HOW TO USE</h2>
      <p class="text">
        コーヒーのドリップ補助アプリです。<br>
        ご家庭にあるキッチンスケールで誰でも簡単にハンドドリップを楽しめます。<br>
        使用するドリッパー(器具)を選び、指示にしたがってドリップして下さい。</p>
      <p class="text">使い方は簡単！<br>
        90℃ほどのお湯を用意。（沸騰したお湯をドリップケトルに移し替えたら約90℃です）<br>
        コーヒー13~15gを入れたドリッパーをサーバーの上に置き、スケールの上に乗せる。<br>
        その重さを差し引くために、メモリを「0」にリセット。<br>
        準備ができたらタイマーのStartボタンを押し、指示に従いドリップするだけ！</p>
      <p class="text">
        また、Select BGMボタンから、App開発者が選曲したコーヒーに合う音楽を再生することができます。<br>
        まずは音楽を再生し、気分を盛り上げてハンドドリップを楽しもう！
      </p>
    </div>
    <router-link to ="/selectitemview" class="btn btn-primary go-select">ドリッパー選択へ進む</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* .btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #42b983!important;
    border-color: #42b983;
} */

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
  margin-bottom: 40px;
}

.go-select:hover {
  background-color: #42b983;
  border-color: #42b983;
  color: #FFF;
}

</style>