<template>
    <img :src="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].url" 
    :alt="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].alt"
    :title="this.$store.state.myWork[projectVal].imageList[this.$store.state.myWork[projectVal].currentImage].alt">
</template>

<script>
export default {
    data() {
        return {
            projectVal: "1"
        }
    }
}
</script>

<style scoped>
 img {
     width: 150%;
 }
 @media (max-width: 720px) {
     img {
        margin-bottom: 15vh;
        width: 150%;
     }
 }
</style>
