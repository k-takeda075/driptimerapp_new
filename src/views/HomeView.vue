<template>
  <div class="home">
    <div class="container">
      <a href="#" id="page-top">TOP</a>
      <h1>Coffee Drip App</h1>
      <h2>HOW TO USE</h2>
      <p class="text">
        コーヒーのドリップ補助アプリです。<br>
        ご家庭にあるキッチンスケールで誰でも簡単にハンドドリップを楽しめます。<br>
        使用するドリッパー(器具)を選び、指示にしたがってドリップして下さい。
      </p>
      <h3>用意するもの</h3>
      <ul class="preparation text">
        <li>コーヒー粉 1杯分  13~15g</li>
        <li>お湯とケトル</li>
        <li>ドリッパー</li>
        <li>サーバー（マグに直接でも可）</li>
        <li>電子スケール</li>
      </ul>
      <h3 class="step">Step 1</h3>
      <img class="howto_img" src="../assets/howto1.jpg" alt="90℃ほどのお湯を用意">
      <p class="text">約90℃のお湯を用意（沸騰したお湯をドリップケトルに移し替えたら約90℃です）</p>
      <h3 class="step">Step 2</h3>
      <img class="howto_img" src="../assets/howto2.jpg" alt="90℃ほどのお湯を用意">
      <p class="text">
        フィルターをセットしたドリッパーをサーバー（マグ）の上に置き、スケールの上に置く。</p>
      <p class="text">
        フィルターを湯通ししておくと、紙の匂いが取れクリアになる。<br>お湯は捨て、水気を切っておく。
        </p>
      <h3 class="step">Step 3</h3>
      <img class="howto_img" src="../assets/howto3.jpg" alt="90℃ほどのお湯を用意">
      <p class="text">コーヒー13~15gを入れたら、側面を軽くポンポンと叩き平にする。<br>
        重さを差し引くために、スケールの重さを「0」にリセット。</p>
      <h3 class="step">Step 4</h3>
      <img class="howto_img" src="../assets/howto4.jpg" alt="90℃ほどのお湯を用意">
      <p class="text">準備ができたらタイマーのStartボタンを押し、指示に従いドリップするだけ！</p>
      
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

h3 {
  font-size: 1.5rem;
  color: #00a02e;
  font-family: 'Caveat', cursive;
}
h3.step {
  font-size: 2rem;
  position: relative;
  display: inline-block;
  margin-bottom: 1em;
}
h3.step:before {
  content: '';
  position: absolute;
  bottom: -8px;
  display: inline-block;
  width: 40px;
  height: 2px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #00a02e;
  border-radius: 2px;
}

.text {
  margin: 20px auto 30px;
  text-align: left;
  max-width: 538px;
}

.text span {
  display: block;
}

.preparation {
      /* list-style: none; */
    max-width: 312px;
    border: solid 1px;
    border-radius: 10px;
    padding: 20px 40px;
}

.go-select {
  font-weight: bold;
  background-color: #ffffffbf;
  border-color: #42b983;
  color: #42b983;
  margin: 30px 0 40px;
}

.go-select:hover {
  background-color: #42b983;
  border-color: #42b983;
  color: #FFF;
}

.howto_img {
  width: 100%;
  max-width: 400px;
  padding: 5px 30px 0;
}

/***追従するトップへ戻るボタン***/
#page-top {
    position: fixed;
    right: 5px;
    bottom: 20px;
    height: 50px;
    text-decoration: none;
    font-weight: bold;
    transform: rotate(90deg);
    font-size: 90%;
    line-height: 1.5rem;
    color: #869193ab;
    padding: 0 0 0 35px;
    border-top: solid 1px;
}
#page-top::before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 0px;
    width: 15px;
    border-top: solid 1px;
    transform: rotate(35deg);
    transform-origin: left top;
}
/***トップへ戻るボタンここまで***/

</style>