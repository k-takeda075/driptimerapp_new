<template>
  <div id="d_timer">
    
    <div class="explanation card" >
      <button type="button" class="btn-close" aria-label="Close"></button> 
      <p class="text card-body">
        粉,器具,湯,スケール,全ての準備が整ってから開始してください。
      </p>
    </div>
    

    <div class="meter_box">
      <div class="meter">
      </div>
    </div>

    <div class="d_timer">
      <div class="d_time">
        {{ formatTime }}
      </div>
      <button class="btn btn-primary" v-on:click="start" v-if="!timerOn">START</button>
      <button class="btn btn-primary" v-on:click="stop" v-if="timerOn">STOP</button>
    </div>
  
    <ul class="comment_wrap">
      <li class="comment_text text">30cc注ぎ,30秒蒸らす</li>
      <li class="comment_text text">100cc注ぐ</li>
      <li class="comment_text text">100cc注ぐ</li>
      <li class="comment_text text">160cc抽出できたらドリッパーを外す</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'd_timer',
  data() {
    return {
      min: 0,
      sec: 0,
      timerOn: false,
      timerObj: null,
    }
  },
  methods: {
    count: function() {
      if (this.sec <= 0 && this.min >= 0) {
        this.min ++;
        this.sec = 0;
      } else if(this.sec <= 0 && this.min <= 0) {
        this.complete();
      } else {
        this.sec ++;
      }
    },

    start: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 100)
      this.timerOn = true; //timerがONであることを状態として保持
    },

    stop: function() {
      clearInterval(this.timerObj);
      this.timerOn = false; //timerがOFFであることを状態として保持
    },

    complete: function() {
      clearInterval(this.timerObj)
    }
  },
  computed: {
    formatTime: function() {
      let timeStrings = [
        this.min.toString(),
        this.sec.toString()
      ].map(function(str) {
        if (str.length < 2) {
          return "0" + str
        } else {
          return str
        }
      })
      return timeStrings[1] + ":" + timeStrings[0]
    }
  }
}
</script>

<style scoped>

.text {
  font-family: 'Klee One', cursive;
  text-align: left;
  font-size: 1.2rem;
}

#timer {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-body {
  margin: 0;
  padding: 1rem 0rem 0;
}

.d_timer {
  margin: 10px 0;
}

.time {
  font-size: 100px;
}

.d_time {
  font-size: 3.5rem;
  font-family: 'Inconsolata', monospace;
}

.meter_box {
  border: solid 1px #ced4da;;
  width: 200px;
  height: 150px;
  margin: 0 auto;
  border-radius: 0 0 30px 30px ;
  background-color: rgb(111, 37, 21);
  overflow: hidden;
}

.meter {
  width: 100%;
  height: 50%;
  background-color: #e4f6ff;
}

.btn {
  width: 200px;
  margin-bottom: 20px;
}

.explanation {
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
  padding: 0;
}

.comment_wrap , .explanation {
  width: 300px;
  margin: 0 auto;
}

.comment_text {
  list-style: none;
  padding-bottom: 2px;
  margin: 0;
  position: relative;
  font-weight: normal;
  background: linear-gradient(to right, rgb(48, 224, 192) 0%,rgba(96,155,208,0.7) 30%,rgba(125,185,232,0) 100%);
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 50px 0 0 50px;
}


</style>