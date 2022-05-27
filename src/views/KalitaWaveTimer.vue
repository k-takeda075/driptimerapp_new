<template>
  <div id="main__wrapper">
    <main>
      <section id="mv" class="mv__less">
        <!--Waves Container-->
        <!-- heigtの数値を動的に変更するためにbind -->
        <div class="wave__wrapper" :style="{height: waveHeight + 'vh'}">
          <svg
            class="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" />
              <use xlink:href="#gentle-wave" x="48" y="3" />
              <use xlink:href="#gentle-wave" x="48" y="5" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div><!--wave__wrapper end-->

        <div class="copy__wrapper">
          <h2 class="mv__ttl">Kalita Wave</h2>
          <p class="stop-watch">{{ m }}:{{ s }}:{{ ms }}</p>
          <!-- (10秒 - アニメーション経過秒)を超えるとactiveクラスを付与、以下同様 -->
          <!-- <p
            class="sec sec10"
            :class="
              interval > 7600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            10sec！
          </p>
          <p
            class="sec sec20"
            :class="
              interval > 17600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            20sec！
          </p> -->
          <p
            class="sec sec30"
            :class="
              interval > 27600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            30sec！
          </p>
                    <p
            class="sec sec60"
            :class="
              interval > 57600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            60sec！
          </p>
                    <p
            class="sec sec90"
            :class="
              interval > 87600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            90sec！
          </p>
                              <p
            class="sec sec120"
            :class="
              interval > 117600
                ? { overlimit: !isActive }
                : { overlimit: isActive }
            "
          >
            120sec！
          </p>

          <div class="btn__wrapper">
            <button @click="startTimer()" v-show="!active">Start</button>
            <button @click="stopTimer()" v-show="active">Stop</button>
            <button @click="resetTimer()">Reset</button>
          </div>
          <!--btn__wrapper-->
        </div>
        <!--copy__wrapper-->

        <div class="explan-wrapper container"  v-bind:class="{'is-none': interval >= 1 }">
          <p class="explan">
            <span class="sub_txt">コーヒー：13g</span>
            <span class="sub_txt">お湯の温度：90 ~ 91℃</span>
            <span class="sub_txt">1杯分のレシピです。</span>
            <span class="sub_txt">ドリップする準備が整ったらStartしてください。</span>
            <span class="sub_txt">※お湯がフィルターに直接かからない様注意</span>
            </p>
        </div>

      </section>
      <!--mv-->
          <ol class="comment_wrap">
              <li class="comment_text" v-bind:class="{'is-active': interval >= 1 }"><span class="oyu">湯40g</span>を粉全体にかかるように注ぎ,40秒蒸らす</li>
              <li class="comment_text" v-bind:class="{'is-active': interval >= 40000 }"><span class="oyu">湯60g</span>を円を描くように注ぐ</li>
              <li class="comment_text" v-bind:class="{'is-active': interval >= 61000 }"><span class="oyu">湯50g</span>を注ぐ</li>
              <li class="comment_text" v-bind:class="{'is-active': interval >= 100000 }"><span class="oyu">湯50g</span>を注ぎ、最後まで落としきる<span class="sub_txt">※2分20~30秒を目処に終了</span></li>
          </ol>
          <!--comment_wrap-->
    </main>
  </div>
  <!--main_wrapper-->
</template>

<script>
export default {
  name: "stopWatch",
  data() {
    return {
      active: false, // 実行状態
      start: 0, // startを押した時刻
      timer: 0, // setInterval()の格納用
      interval: 0, // 計測時間
      accum: 0, // 累積時間(stopしたとき用)
      isActive: false, //表示のOn/Off
      waveHeight: 0, //波の位置(高さ)
    };
  },
  computed: {
    m() {
      let m = Math.floor((this.interval / 60000) % 60);
      return ("0" + m).slice(-2);
    },
    s() {
      let s = Math.floor((this.interval / 1000) % 60);
      return ("0" + s).slice(-2);
    },
    ms() {
      let ms = Math.floor(this.interval / 10);
      return ("0" + ms).slice(-2);
    },
  },
  methods: {
    startTimer() {
      this.active = true;
      this.start = Date.now();

      // 10msごとに現在時刻とstartを押した時刻の差を足す
      this.timer = setInterval(() => {
        if(this.interval <= 179999) {
          this.interval = this.accum + (Date.now() - this.start);
          this.waveHeight =  (this.interval / 179999) * 100 + 12.98;
        }
        //30秒になったらタイマーをクリア
        if(this.interval == 179999) {
          clearInterval(this.timer);
        }
      }, 10);
    },
    stopTimer() {
      this.active = false;
      this.accum = this.interval;
      clearInterval(this.timer);
    },
    resetTimer() {
      this.interval = 0;
      this.accum = 0;
      this.start = Date.now();
      this.waveHeight = 0;
    },
  },
};
</script>

<style scoped>

.mv__ttl {
  font-size: 3em;
}
.btn__wrapper {
}
.btn__wrapper button {
  width: 80px;
  height: 80px;
  line-height: 80px;
  border-radius: 50%;
  padding: 0;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  background-color: aliceblue;
}
.btn__wrapper button:hover {
  opacity: 0.7;
}
.stop-watch {
  font-family: "Nova Mono", monospace;
  font-size: 4rem;
  text-shadow: #fff 1px 1px 2px;
}
.sec {
  display: none;
  position: absolute;
  left: -60px;
  /* background-color: yellow; */
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border-radius: 50%;
  font-size: 18px;
  font-weight: bold;
  color: #16fc15;
}
.sec30 {
  bottom: -35%;
}
.sec60 {
  bottom: -20.7%;
}
.sec90 {
  bottom: -5.4%;
}
.sec120 {
  bottom: 7.4%;
}
.sec.overlimit {
  display: block;
  /* ふわふわと移動アニメーション */
  animation: fuwafuwa 3s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite, sec_bubble 2.4s cubic-bezier(0.91, 0.14, 0.56, 1.9) forwards;
}
@keyframes fuwafuwa {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
@keyframes sec_bubble {
  0% {
    left: 150vw;
  }
  100% {
    left: 0px;
  }
}
#mv {
  position: relative;
}
#mv::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #FFF;
  overflow: hidden;
}

/* Wave */
.wave__wrapper {
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.wave__wrapper::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 67vh;
  left: 0;
  width: 100vw;
  height: 118vh;
  /* padding-top: 12.98vh; */
  background-color: rgb(129 58 21);
}
.waves {
  position: absolute;
  top: 418px;
  left: 0;
  width: 100%;
  height: 12.98vh;
}

.parallax > use {
  fill: rgb(129 58 21);
  /* 波のアニメ */
  animation: waveAnim 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
  opacity: 0.7;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
  opacity: 0.5;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
  opacity: 0.3;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
  fill: rgb(129 58 21);
}
@keyframes waveAnim {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}

/* 指示出しテキスト */
.comment_wrap {
  padding-left: 20px;
  max-width: 400px;
  margin-top: 30px!important;
}
.comment_wrap , .explanation {
  margin: 0 auto;
}
.comment_text {
  list-style: none;
  padding-bottom: 2px;
  margin: 0;
  position: relative;
  font-weight: normal;
  background: linear-gradient(to right, rgb(0 208 28) 0%,rgb(56 187 90 / 70%) 30%,rgb(125 185 232 / 90%) 100%);
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 50px 0 0 50px;
  display: none;
  color: #ffe980;
  font-weight: bold;
  z-index: 100;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 15px;
  text-align: left;
  line-height: 1.3;
}
.comment_text:last-child {
  background: linear-gradient(to right, rgb(252 255 46 / 70%) 0%,rgb(241 223 94 / 70%) 30%,rgb(125 232 197 / 78%) 100%);
  color: #05527f;
}
.comment_wrap .is-active {
  animation: anim 0.7s linear;
  display: block;
}
.sub_txt {
  display: block;
}
.oyu {
  color: #fc15a0;
  font-weight: 600;
}

@keyframes anim {
  0% {
  transform: translateX(400px);
  }

  100% {
  transform: translateX(0);
  }
}

.is-none {
  display: none;
}
.explan-wrapper {
  text-align: left;
  margin: 30px auto;
  max-width: 400px;
}
.explan {
color: #031305;
background-color: #98c6f78c;
padding: 10px 20px;
border-radius: 10px;
font-family: 'Noto Sans JP', sans-serif;
line-height: 1.3;
box-shadow: 0 15px 10px #777;
font-weight: bold;
}
.explan span {
  display: block;
  margin-bottom: 10px;
}

</style>
