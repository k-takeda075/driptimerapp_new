<template>
    <div>
      <button id="page-top" v-show="buttonActive" @click="returnTop">
        Topへ戻る
      </button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      buttonActive: false,
      scroll: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    returnTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    scrollWindow() {
      const top = 200 // ボタンを表示させたい位置
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    }
  }
})
</script>

<style scoped>
/***追従するトップへ戻るボタン***/
#page-top {
    position: fixed;
    right: -20px;
    bottom: 40px;
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