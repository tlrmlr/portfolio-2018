<template>
  <section 
    class="home"
    v-touch:swipe.left="decreaseIndex"
    v-touch:swipe.right="increaseIndex">
    <transition
      appear
      name="intro-fade">
      <coreIntroCard class="introcard"/>
    </transition>
    <transition
      appear
      name="intro-fade">
      <coreInfoCard class="infocard"/>
    </transition>
    <transition
      appear
      name="intro-fade">
      <section class="imagery">
        <transition name="main-wipe" mode="out-in">
          <component :key="this.$store.state.myWork[this.$store.state.currentWorkIndex].imageComponent" :is="this.$store.state.myWork[this.$store.state.currentWorkIndex].imageComponent"></component>
        </transition>
      </section>
    </transition>
  </section>
</template>

<script>
import coreIntroCard from "@/components/coreIntroCard.vue"
import coreInfoCard from "@/components/coreInfoCard.vue"

import franklyNativeAppsImage from "@/components/franklyNativeAppsImage.vue"
import franklyTVAppImage from "@/components/franklyTVAppImage.vue"
import franklyUniqloImage from "@/components/franklyUniqloImage.vue"
import welldoneTrackerImage from "@/components/welldoneTrackerImage.vue"

export default {
  components: {
    coreIntroCard,
    coreInfoCard,
    franklyNativeAppsImage,
    franklyTVAppImage,
    franklyUniqloImage,
    welldoneTrackerImage
  },
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
  },
  data() {
    return {

    }
  }
}
</script>

<style>
.home {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 600px) minmax(0, 600px) minmax(0, 1fr);
  grid-gap: 32px;
  overflow: hidden;
  height: 100%;
  width: 100%;
}

.imagery {
  grid-column: 3/4;
  grid-row: 1/2;
  display: grid;
  height:100%;
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: relative;
}

.imagery img {
  object-fit: contain;
  width: 100%;
  height: 80%;
  user-select: none;
  position: absolute;
}


.introcard, .info {
  grid-row: 1/2;
  grid-column: 2/3;
}

.introcard {
  margin-top: 40vh;
}

.info {
  align-self: end;
  padding-bottom: 32px;
}

.work-title {
  margin-bottom: 12px;
  font-size: 18px;
}

.controls {
  display: flex;
}

@media (max-width: 720px) {
  .home {
    grid-gap: 0px;
  }

  .imagery {
    grid-column: 2/4;
  }

  .introcard, .info {
    grid-column: 2/4;
    margin-top: 0;
    padding-left: 16px;
    padding-right: 16px;
  }

  .introcard {
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
  }

  .info {
    padding-bottom: 16px;
    padding-top: 64px;
    background-image: linear-gradient(
    rgba(0,0,0,0.0), 
    rgba(0,0,0,0.19) 30%, 
    rgba(0,0,0,0.56) 60%, 
    rgba(0,0,0,0.96)
    );
    text-shadow: 0px 0px 4px rgba(0,0,0,0.8);
  }

  .imagery img {
    margin-top: 20vh;
  }
}

@media (max-width: 720px) and (min-height: 760px) {
  .info {
    padding-bottom: 32px;
  }
}

</style>

