<template>
  <v-footer height="auto" color="primary darken-1">
    <v-layout justify-center row wrap>
      <v-btn color="white" flat round to="/">Home</v-btn>
      <v-btn color="white" flat round to="/about">About</v-btn>
      <v-btn color="white" flat round to="/todo">ToDo</v-btn>
      <v-btn color="white" flat round href="https://netdevv.com/blog" target="blank">Blog</v-btn>
      <v-btn color="white" flat round href="https://netdevv.com/contact" target="blank">Contact Us</v-btn>
      <v-flex primary darken-5 py-3 text-xs-center white--text xs12>
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