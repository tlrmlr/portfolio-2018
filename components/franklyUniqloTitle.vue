<template>
    <p>{{this.$store.state.myWork[projectVal].title}}, {{this.$store.state.myWork[projectVal].date}}</p>
</template>

<script>
export default {
    data() {
        return {
            projectVal: "2"
        }
    }
}
</script>

<style scoped>
p {
    user-select: none;
}
</style>
