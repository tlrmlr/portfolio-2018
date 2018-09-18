<template>
    <section>
        <img src="@/static/arrow_left.svg" 
            alt="Previous project"
            @click="decreaseIndex()"
        >
        <img src="@/static/arrow_right.svg" 
            alt="Next project"
            @click="increaseIndex()"
        >
    </section>
</template>

<script>
export default {
    methods: {
        increaseIndex() {
            let newIndex = this.$store.state.currentWorkIndex + 1

            if (newIndex === this.$store.state.myWork.length) {
            newIndex = 0
            }

            this.$store.state.currentWorkIndex = newIndex
        },
        decreaseIndex() {
        let newIndex = this.$store.state.currentWorkIndex - 1

            if (newIndex < 0) {
            newIndex = this.$store.state.myWork.length - 1
            }

            this.$store.state.currentWorkIndex = newIndex
        }
    }
}
</script>

<style scoped>

img {
    height: 24px;
    margin-top: 2px;
    cursor: pointer;
}

img:hover {
    cursor: pointer;
}

img:first-of-type {
    margin-right: 8px;
}

@media (max-width: 720px) {
    img:first-of-type {
        margin-right: 16px;
    }
}

</style>
