<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>AXIOS</span>
      <span class="font-weight-light subheading pl-4">JS RUNTIME</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">HOME</v-btn>
      <v-btn flat to="/about">ABOUT</v-btn>
      <v-btn flat to="/test">TEST</v-btn>
      <v-btn flat href="https://github.com/smitpatelx/vuetify_template" target="blank">
        <v-icon center class="black--text fa-lg fab fa-github"></v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {};
</script>