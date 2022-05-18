<template>
  <div class="item_select">
    <h1 class="ttl">Item Select</h1>
    <p class="text">使用する器具を選択してください</p>
    <ul class="items_wrapper">
      <li>
        <div class="card">
        <span><img src="../assets/hario_v60.jpg" class="card-img-top" alt="/"></span>
        <div class="card-body">
          <h5 class="card-title">HARIO V60</h5>
          <p class="card-text">大きな一つ穴なのでお湯を注ぐ速度によってコーヒーの味を変えられるため、好みのコーヒーがたのしめる。</p>
          <a href="/v60timer" class="btn btn-primary">Go Drip</a>
        </div>
        </div>
      </li>
      <li>
        <div class="card">
        <span><img src="../assets/karita_dripper.jpeg" class="card-img-top" alt="/"></span>
        <div class="card-body">
          <h5 class="card-title">KALITA</h5>
          <p class="card-text">カリタのドリッパーは三つ穴、雑味がでる前に、美味しさだけをドリップするのが特徴です。</p>
          <a href="#" class="btn btn-primary">Go Drip</a>
        </div>
        </div>
      </li>
            <li>
        <div class="card">
        <span><img src="../assets/hario_v60.jpg" class="card-img-top" alt="/"></span>
        <div class="card-body">
          <h5 class="card-title">hario_v60</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go Drip</a>
        </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.item_select img { width: 100%; }

.items_wrapper {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0;
}

@media (min-width: 768px) {
  .items_wrapper {
    justify-content: space-between;
    flex-direction: unset;
    flex-wrap: wrap;
    gap: 0;
    max-width: 80vw;
    margin: 0 auto; 
}

.items_wrapper li {
    margin: 0 5px 30px!important;
    justify-content: flex-start;
}
}

.items_wrapper li {
    display: block;
    width: 80vw;
    max-width: 300px;
    margin: 0 auto;
  }

  .items_wrapper li span {
    display: flex;
    height: 230px;
  }

    .items_wrapper img {
    object-fit: cover;
  }

    .card {
    height: 100%;}

    .card-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: solid 1px rgba(0, 0, 0, 0.125);
}

.card-text {
  text-align: left;
  font-size: 0.9rem;
}

.btn-primary {
  color: #FFF;
  font-weight: bold;
  text-decoration: none!important;
  background-color: #42b983!important;
  border-color: #42b983;
}

.btn-check:checked + .btn-primary, .btn-check:active + .btn-primary, .btn-primary:active, .btn-primary.active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #42b983!important;
    border-color: #42b983;
}

</style>