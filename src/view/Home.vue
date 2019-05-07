<template>
  <v-parallax height="600" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-container grid-list-xl text-xs-center>
      <v-layout>
        <v-flex xs12 class="white--text text--lighten-2 pt-5 mt-5">
          <p class="display-3 font-weight-medium">JS RUNTIME</p>
          <div class="text-xs-center pt-5">
            <v-chip>
              <v-avatar class="teal">
                <v-icon center class="red white--text fa-lg fab fa-youtube"></v-icon>
              </v-avatar>
              <a
                href="https://www.youtube.com/channel/UC_tw0DNLIG5armeeJq8vrcQ"
                class="black--text"
                target="blank"
              >Youtube</a>
            </v-chip>
          </div>
          <div class="text-xs-center">
            <v-chip>
              <v-avatar class="teal">
                <v-icon center class="deep-purple darken-1 white--text fa-lg fab fa-twitch"></v-icon>
              </v-avatar>
              <a href="https://twitch.com/jsruntime" class="black--text" target="blank">Twitch TV</a>
            </v-chip>
          </div>
          <div class="text-xs-center">
            <v-chip>
              <v-avatar class="teal">
                <v-icon center class="red lighten-1 white--text fa-lg fab fa-patreon"></v-icon>
              </v-avatar>
              <a href="https://www.patreon.com/jsruntime" class="black--text" target="blank">Patreon</a>
            </v-chip>
          </div>
          <div class="text-xs-center">
            <v-chip>
              <v-avatar class="teal">
                <v-icon center class="light-blue white--text fa-lg fab fa-twitter"></v-icon>
              </v-avatar>
              <a href="https://twitter.com/smitpatelx" class="black--text" target="blank">Twitter</a>
            </v-chip>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-img :src="publicPath+'assets/undraw_landing_page_q6hh.png'">
            <div class="fill-height bottom-gradient"></div>
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </v-parallax>
</template>
<script>
export default {
  data() {
    return {
      publicPath: process.env.BASE_URL
    };
  }
};
</script>