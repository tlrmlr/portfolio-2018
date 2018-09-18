<template>
    <section>
        <a 
        class="info-button" 
        :href="this.$store.state.myWork[this.$store.state.currentWorkIndex].studyUrl" 
        v-if="this.$store.state.myWork[this.$store.state.currentWorkIndex].hasStudy">
            <span>i</span>
        </a>
        <transition-group 
            class="screen-list" 
            name="icon-wipe"
            appear
            v-if="this.$store.state.myWork[this.$store.state.currentWorkIndex].imageList.length >= 2">
            <div v-for="image in this.$store.state.myWork[this.$store.state.currentWorkIndex].imageList"
                :key="image.title"
                class="image-button"
                @click="alterImageCount(image.title)">
                <span>{{ image.title }}</span>
            </div>
        </transition-group>
    </section>    
</template>

<script>
export default {
    methods: {
        alterImageCount(t) {
            let newCount = t - 1
            this.$store.state.myWork[this.$store.state.currentWorkIndex].currentImage = newCount
        }
    }
}
</script>

<style scoped>

a, .image-button {
    margin-left: 12px;
}

.info-button {
    border-radius: 8px;
    height: 16px;
    width: 16px;
    display: grid;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: white;
    text-decoration: none;
}

.image-button {
    border-radius: 14px;
    height: 28px;
    width: 28px;
    border: 1px solid white;
    display: grid;
    justify-content: center;
    align-items: center;
}

.image-button:hover {
    cursor: pointer;
}

span {
    user-select: none;
    font-weight: 300;
    font-size: 14px;
    margin-bottom: 2px;
}

.screen-list {
    display: flex;
}

@media (max-width: 720px) {
    a, .image-button {
        margin-left: 16px;
    }
}


</style>
