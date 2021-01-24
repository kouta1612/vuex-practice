<template>
    <div>
        <button @click="getIp">IPアドレスを取得</button>
        <p>{{ ip }}</p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            ip: "0.0.0.0"
        }
    },
    methods: {
        async getIp() {
            this.ip = await this.$axios.$get('http://icanhazip.com')
        }
    }
}
</script>