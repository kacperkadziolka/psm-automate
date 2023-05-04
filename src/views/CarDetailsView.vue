<template>
    <TopBar />
    <h1>{{ make }}</h1>
</template>

<script>
    import TopBar from '@/components/TopBar.vue'

    export default {
        name: 'CarDetailsView',
        components: {
            TopBar
        },
        computed: {
            car() {
                return this.$route.params.car
            }
        }
    }
</script>

<style>
</style>