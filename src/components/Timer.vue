<template>
<div>
<button class="bg-purple-500 text-white active:bg-purple-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
type="button">Button</button>
<button class="purple-btn" type="button">Button</button>
<button class="purple-btn" type="button">Reset</button>
</div>

        <div class="mb-4">
        <input type="time" step="1" class="outline-none">
        <input type="time" step="1" class="outline-none" v-model="time">
        </div>
</template>

  <script setup lang="ts">
        import { ref } from "vue"

        const INITIAL_TIME = '00:00:00'
        const time = ref(INITIAL_TIME)
        const HOUR_IN_SEC = 3600
        const MIN_IN_SEC = 60
        const timeToSec = (t: string): number => {
        const [h,m,s] = t.split(':').map(e => parseInt(e))
        if (s === undefined) return 0
          return h * HOUR_IN_SEC + m * MIN_IN_SEC + s
}
  </script>

..