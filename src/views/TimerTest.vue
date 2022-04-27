<template>
    <div>
        <a class="u-link-white" href="#" @click="toggleTimer">
            {{ time }}
        </a>
    </div>
</template>

<script>
    export default {
        props: ['order'],
        data() {
            return {
                time: this.order.time_to_complete,
                isRunning: false,
            }
        },
        methods: {
            toggleTimer() {
                var interval = setInterval(this.incrementTime, 1000);
                if (this.isRunning) {
                    //debugger
                    clearInterval(interval);
                    console.log('timer stops');
                } else {
                    console.log('timer starts');
                }
                this.isRunning = (this.isRunning ? false : true);
            },
            incrementTime() {
                this.time = parseInt(this.time) + 1;
            },
        }
    }
</script>