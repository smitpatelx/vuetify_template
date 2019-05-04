<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <v-btn color="white" flat round to="/">Home</v-btn>
      <v-btn color="white" flat round to="/about">About</v-btn>
      <v-btn color="white" flat round href="https://netdevv.com/blog">Blog</v-btn>
      <v-btn color="white" flat round href="https://netdevv.com/contact">Contact Us</v-btn>
      <v-flex primary lighten-2 py-3 text-xs-center white--text xs12>
        &copy;2019 —
        <strong>Js Runtime</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>