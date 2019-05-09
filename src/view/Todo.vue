<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.cross-line {
  text-decoration: line-through;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div>
    <v-container class="text-xs-center mb-0 pb-0">
      <v-flex xs12 class="my-0 py-0">
        <v-text-field
          v-model="newTaskDes"
          :append-outer-icon="newTaskDes ? 'fas fa-paper-plane fa-2x' : ''"
          outline
          clear-icon="far fa-times-circle"
          clearable
          label="Add new to-do item"
          type="text"
          @click:append="toggleMarker"
          @click:append-outer="addToDo"
          @click:clear="clearMessage"
          v-on:keyup.13="addToDo"
          autofocus
        ></v-text-field>
      </v-flex>
    </v-container>
    <v-container class="my-0 py-0">
      <v-layout row wrap justify-space-between>
        <v-flex xs12 md5 class="my-0 py-0 text-xs-center text-md-left ">
          <v-btn-toggle v-model="toggle_exclusive" mandatory>
            <v-btn
              round
              small
              color="green"
              class="white--text"
              @click="filter='all'"
            >All - {{dataStore.length}}</v-btn>
            <v-btn
              round
              small
              color="deep-purple darken-1"
              class="white--text"
              @click="filter='completed'"
            >Completed - {{totalCompleted}}</v-btn>
            <v-btn
              round
              small
              color="red"
              class="white--text"
              @click="filter='active'"
            >Active - {{totalActive}}</v-btn>
          </v-btn-toggle>
        </v-flex>
        <v-flex xs12 md7 class="my-0 py-0 text-xs-center text-md-right">
          <v-btn
            outline
            small
            color="red darken-3"
            class="white--text"
            @click="deleteCompleted"
          >Clear completed</v-btn>
          <v-btn
            outline
            small
            :loading="loading || dialog"
            :disabled="loading || dialog"
            color="blue darken-3"
            class="white--text"
            @click="(loader = 'loading') && fetch() || (dialog = true)"
          >
            <v-icon dark>cloud_download</v-icon>
          </v-btn>
          <v-btn
            outline
            small
            :loading="loading"
            :disabled="loading"
            color="blue darken-3"
            class="white--text"
            @click="loader = 'loading' && clear()"
          >Clear All</v-btn>
        </v-flex>
        <v-flex xs12 class="my-0 py-0 text-xs-right">
          <v-divider></v-divider>
          <v-checkbox
            data-vv-name="checkbox"
            v-model="allCheckbox"
            color="blue darken-3"
            type="checkbox"
            @change="checkAllToDo"
            label="Mark All"
          ></v-checkbox>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="text-xs-center">
      <v-layout row wrap v-if="!dialog">
        <v-container fluid>
          <v-layout
            row
            wrap
            v-for="(data, index) in filteredToDo"
            v-bind:key="index"
            class="elevation-2 text-xs-center align-center my-2"
          >
            <v-flex xs10 class="pl-4">
              <v-checkbox
                data-vv-name="checkbox"
                color="blue darken-3"
                class="black--text"
                type="checkbox"
                v-model="data.completed"
              >
                <template v-slot:label class="align-center text-align-center">
                  <span
                    @click.stop
                    v-if="!data.edit"
                    :class="data.completed ? 'cross-line' : ''"
                    @dblclick="data.edit = true"
                  >{{data.title}}</span>
                  <v-text-field
                    v-else
                    class="align-center text-align-center"
                    solo
                    height="25px"
                    hide-details
                    :autofocus="data.edit"
                    @click.stop
                    @keyup.13="data.edit = false"
                    @dblclick="data.edit = false"
                    @blur="data.edit = false"
                    :value="data.title"
                    v-model="data.title"
                  ></v-text-field>
                </template>
              </v-checkbox>
            </v-flex>
            <v-flex xs2>
              <v-btn flat color="white" small @click="deleteToDo(data)">
                <v-icon center class="fa-2x far fa-times-circle red--text"></v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-layout>
    </v-container>

    <v-dialog v-model="dialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Keep Calm and be patience
          <v-icon class="white--text fa-lg fas fa-circle-notch fa-spin"></v-icon>
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import axios from "axios";
var filters = {
  all: function(todos) {
    return todos;
  },
  active: function(todos) {
    return todos.filter(function(todo) {
      return !todo.completed;
    });
  },
  completed: function(todos) {
    return todos.filter(function(todo) {
      return todo.completed;
    });
  }
};
export default {
  data: () => ({
    dataStore: [
      {
        title: "Completed ToDo Tasks",
        id: 99999,
        completed: true,
        edit: false
      },
      {
        title: "Active ToDo Tasks",
        id: 99998,
        completed: false,
        edit: false
      }
    ],
    loader: null,
    loading: false,
    dialog: false,
    newTaskDes: "",
    lastId: {},
    filter: "all",
    toggle_exclusive: 0,
    allCheckbox: false
  }),
  methods: {
    fetch() {
      axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
        this.dataStore = data.data;
        this.completedToDo = 0;
        this.uncompletedToDo = 0;
        for (var obj in this.dataStore) {
          if (this.dataStore[obj].completed) {
            this.completedToDo++;
          } else {
            this.uncompletedToDo++;
          }
        }
      });
    },
    clear() {
      this.dataStore = [];
      this.completedToDo = 0;
      this.uncompletedToDo = 0;
    },
    addToDo() {
      var obj = {
        title: this.newTaskDes,
        id: this.dataStore.length + 1,
        completed: false,
        edit: false
      };
      this.dataStore.unshift(obj);
      this.newTaskDes = "";
    },
    clearMessage() {
      this.newTaskDes = "";
    },
    toggleMarker() {
      this.marker = !this.marker;
    },
    deleteToDo(val) {
      this.dataStore.splice(this.dataStore.indexOf(val), 1);

      //For understanding above code
      // for (var i = 0; i < this.dataStore.length; i++) {
      //   if (this.dataStore[i].id === id) {
      //     this.dataStore.splice(i, 1);
      //   }
      // }
    },
    deleteCompleted() {
      this.dataStore = filters.active(this.dataStore);
    },
    checkAllToDo() {
        this.dataStore.forEach(
          data => (data.completed = this.allCheckbox)
        );
    }
  },
  created() {},
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
    dialog(val) {
      if (!val) return;

      setTimeout(() => (this.dialog = false), 4000);
    },
    dataStore() {
      this.lastId = this.dataStore.length;
    }
  },
  computed: {
    filteredToDo() {
      if (this.filter === "all") {
        return this.dataStore;
      } else if (this.filter === "completed") {
        return this.dataStore.filter(data => data.completed);
      } else if (this.filter === "active") {
        return this.dataStore.filter(data => !data.completed);
      }
      return this.dataStore;
    },
    totalActive() {
      var totalActive = this.dataStore.filter(data => !data.completed).length;
      if (!totalActive) {
        // eslint-disable-next-line
        this.allCheckbox = true;
      }
      return totalActive;
    },
    totalCompleted() {
      var totalCompleted = this.dataStore.filter(data => data.completed).length;
      if (totalCompleted) {
        // eslint-disable-next-line
        this.allCheckbox = false;
      }
      return totalCompleted;
    }
  }
};
</script>