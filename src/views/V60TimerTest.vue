<template>
  <div id="app">
    <h1>HARIO V60</h1>
    <div id="d_timer">
        <div class="meter_box">
          <div class="meter coffee_anim" v-bind:class="{'is-start': pastTime >= 1 }"></div>
        </div>
    </div>
    
    <div class="timer-result d_time">
      <p>{{ m }} : {{ s }} : {{ ms }}</p>
    </div>
    
    <div class="timer-button">
<!--v-bindで'disable'クラスを付与する-->
      <button class="start" 
              @click="start"
              v-bind:class="{ 'disable': timerState }"
              >Start</button>
      <button class="stop"
              @click="stop">Stop</button>
      <button class="reset"
              @click="reset">Reset</button>
    </div>

    <div class="explan-wrapper container"  v-bind:class="{'is-none': pastTime >= 1 }">
      <p class="explan"><span class="sub_txt">一杯分のドリップレシピです。</span><span class="sub_txt">粉 / 器具 / 湯 / スケール,全ての準備が整ってからStartしてください。</span></p>
    </div>

    <ol class="comment_wrap">
        <li class="comment_text" v-bind:class="{'is-active': pastTime >= 1 }">豆全体を湿らす様に30cc注ぎ,30秒蒸らす。<span class="sub_txt">※フィルターにかからない様注意</span></li>
        <li class="comment_text" v-bind:class="{'is-active': pastTime >= 30000 }">100cc注ぐ<span class="sub_txt">※フィルターにかからない様注意</span></li>
        <li class="comment_text" v-bind:class="{'is-active': pastTime >= 60000 }">100cc注ぐ<span class="sub_txt">※フィルターにかからない様注意</span></li>
        <li class="comment_text" v-bind:class="{'is-active': pastTime >= 90000 }">160cc抽出できたらドリッパーを外す<span class="sub_txt">※2分を目処に落としきる</span></li>
    </ol>
            

    <!-- {{ $data }} -->
    
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      startTime: 0 ,
      pastTime: 0 ,
      timerObj: null,
//timerStateを追加
      timerState: false
    };
  },
  methods:{
    countUp(){
      return this.pastTime = Date.now() - this.startTime
    },
    start(){
      this.startTime = Date.now()
//timerStateをtrueにする。
      this.timerState = true
      var self = this
      this.timerObj = setInterval(function(){
        self.countUp()
      },10)
//ここにアニメーション？
    },   
    stop(){
      clearInterval( this.timerObj )
//timerStateをfalseにする。
      this.timerState = false
      this.startTime = 0
    },
    reset(){
      this.stop()
      this.pastTime = 0
      this.timerObj = null
    }
  },
  computed:{
    m(){
      var m = Math.floor( this.pastTime / 60000 % 60 )
      return ( '0' + m ).slice(-2)
      },
    s(){
      var s = Math.floor( this.pastTime / 1000 % 60 )
      return ( '0' + s ).slice(-2)
      },
    ms(){
      var ms = Math.floor( this.pastTime / 10 )
      return ( '0' + ms ).slice(-2)
      }
  }
};

// alert('粉,器具,湯,スケール,全ての準備が整ってから開始してください。');

</script>

<style scoped>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
} */

a,
button {
  color: #36aa46;
}

button {
  background: none;
  border: solid 1px;
  border-radius: 2em;
  font: inherit;
  padding: 0.75em 2em;
}
  
/*
スタートボタンを無効化する。
*/
  .disable {
  pointer-events: none;
  background-color: #36aa46;;
  color: #fff;
  }
  
  .time-result{
    font-size: 29px;
  }

  .text {
  font-family: 'Klee One', cursive;
  text-align: left;
  font-size: 1rem;
}

#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  margin: 0;
  padding: 1rem 0rem 0;
  border-top: none;
}

.time {
  font-size: 100px;
}

.d_time {
  font-size: 2.5rem;
  font-family: 'Inconsolata', monospace;
}

.meter_box {
  border: solid 1px #ced4da;;
  width: 140px;
  height: 126px;  
  margin: 0 auto;
  border-radius: 0 0 30px 30px ;
  background-color: rgb(62 30 3);
  overflow: hidden;
}

.meter {
  width: 100%;
  height: 100%;
  background-color: #fff;
}

.is-start {
  animation: anim2 120s linear;
  animation-fill-mode:forwards;/*コレが最後停止*/
}

.btn {
  width: 200px;
  margin: 0 auto 20px;
}

.explanation {
  width: 95%;
  max-width: 400px;
  padding: 1rem;
  position: fixed;
  top: 1%;
  right: 10px;
  height: auto;
}

.btn-close {
    position: absolute;
    right: 10px;
    top: 0.5rem;
}

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
  background: linear-gradient(to right, rgb(0 208 28) 0%,rgb(56 187 90 / 70%) 30%,rgba(125,185,232,0) 100%);
  padding: 10px 20px;
  margin-bottom: 15px;
  border-radius: 50px 0 0 50px;
  display: none;
  color: #05527f;
}

.comment_text:last-child {
  background: linear-gradient(to right, rgb(252 255 46 / 70%) 0%,rgb(241 223 94 / 70%) 30%,rgba(125,185,232,0) 100%);
}

.comment_wrap .is-active {
  animation: anim 0.7s linear;
  display: block;
}

.sub_txt {
  display: block;
  font-size: 0.9rem;
}

.explan-wrapper {
  text-align: left;
  margin: 30px auto;
  max-width: 400px;
}

.comment_text {
  text-align: left;
}

.explan {
  color: mediumblue;
  border: solid 1px #adb5bd;
  background-color: aliceblue;
  padding: 10px 20px;
  border-radius: 10px;
}

.is-none {
  display: none;
}

@keyframes anim {
  0% {
  transform: translateX(400px);
  }

  100% {
  transform: translateX(0);
  }
}

@keyframes anim2 {
  0% {
  transform: translateY(0);
  }

  100% {
  transform: translateY(-100px);
  }
}

</style>
