<template>
    <section>
        <a v-for="link in this.$store.state.socialList"
            :key="link.name"
            :href="link.url"
            target="_blank"
        >
            <img :src="link.icon" :alt="link.name">
        </a>
    </section>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
}

a {
  margin-right: 12px;
  transition: transform 80ms ease-in-out;
}

a:hover {
    transform: translateY(-4px);
}

img {
    height: 24px;
}

@media (max-width: 720px) {
    a {
        /* margin-right: 0;
        margin-bottom: 8px; */
        margin-right: 8px;
    }
}

</style>
