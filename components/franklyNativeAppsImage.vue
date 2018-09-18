<template>
    <img :src="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].url" 
    :alt="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].alt"
    :title="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].alt">
</template>

<script>
export default {
    data() {
        return {
            projectVal: "0"
        }
    },
    transition: "main-wipe"
}
</script>

<style scoped>

</style>
