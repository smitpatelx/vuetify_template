<template>
<v-layout
    wrap
    class="pr-0"
  >
  <v-toolbar app class="pr-0">
    <v-toolbar-title class="headline text-uppercase">
      <span>AXIOS</span>
      <span class="font-weight-light subheading pl-2 hidden-sm-and-down">JS RUNTIME</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/">HOME</v-btn>
      <v-btn flat to="/about">ABOUT</v-btn>
      <v-btn flat to="/todo">ToDo</v-btn>
      <v-btn flat href="https://github.com/smitpatelx/vuetify_template" target="blank">
        <v-icon center class="black--text fa-lg fab fa-github"></v-icon>
      </v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-md-and-up">
       <v-btn
          flat
          @click.stop="drawer = !drawer"
        >
          <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar-items>
    </v-toolbar>
     
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      hide-overlay
      width="170"
      @blur="drawer = false"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon  class="fab fa-autoprefixer"></v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Axios</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="item.router"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  
  </v-layout>
</template>
<script>
export default {
  data () {
      return {
        drawer: false,
        items: [
          { title: 'Home', icon: 'dashboard', router: '/' },
          { title: 'About', icon: 'question_answer' , router:'/about'},
          { title: 'ToDo', icon: 'assignment_turned_in' , router:'/todo'}
        ]
      }
    }
};
</script>