<template>
    <section>
        <h1>Tyler Miller</h1>
        <h2>Product designer in San Francisco, <br class="linebreak"/>working on digital things.</h2>
        <coreLinkList class="link-list"/>
    </section>
</template>

<script>
import coreLinkList from "@/components/coreLinkList.vue"

export default {
    components: {
        coreLinkList
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>

h1, h2  {
    user-select: none;
}

h1 {
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 0.04em;
}

h2 {
    font-size: 32px;
    font-weight: 100;
}

.link-list {
    margin-top: 16px;
}

@media (max-width: 720px) {
    section {
        background-image: linear-gradient(
        rgba(0,0,0,0.96),
        rgba(0,0,0,0.56) 10%,
        rgba(0,0,0,0.19) 25%,
        rgba(0,0,0,0.0) 30%
        );
        text-shadow: 0px 0px 4px rgba(0,0,0,0.8);
    }

    h1 {
        letter-spacing: 0.05em;
    }

    h2 {
        font-weight: 300;
    }

    .link-list {
        margin-top: 5px;
        margin-right: 16px;
    }
}

@media (max-width: 1100px) {
    .linebreak {
        display: none;
    }
}

@media (max-width: 720px) and (max-height: 639px) {
    h1 {
        font-size: 12px;
    }

    h2 {
        font-size: 24px;
        font-weight: 300;
    }

    .link-list {
        display: none;
    }
}

</style>
