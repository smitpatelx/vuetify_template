<template>
  <v-app id="app">
    <router-view name="header"></router-view>
    <v-content>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view/>
      </fade-transition>
    </v-content>
    <router-view name="footer"></router-view>
  </v-app>
</template>

<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>
