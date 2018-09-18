<template>
    <section class="info">
        <transition name="title-wipe" mode="out-in">
          <component class="work-title" :is="this.$store.state.myWork[this.$store.state.currentWorkIndex].titleComponent"></component>
        </transition>
        <section class="controls">
            <corePaginator/>
            <corePageControls/>
        </section>
    </section>
</template>

<script>
import corePaginator from "@/components/corePaginator.vue"
import corePageControls from "@/components/corePageControls.vue"

import franklyNativeAppsTitle from "@/components/franklyNativeAppsTitle.vue"
import franklyTVAppTitle from "@/components/franklyTVAppTitle.vue"
import franklyUniqloTitle from "@/components/franklyUniqloTitle.vue"
import welldoneTrackerTitle from "@/components/welldoneTrackerTitle.vue"

export default {
  components: {
    corePaginator,
    corePageControls,
    franklyNativeAppsTitle,
    franklyTVAppTitle,
    franklyUniqloTitle,
    welldoneTrackerTitle
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>

