# Vuetify ToDo App

Please dont try to push on the master branch after your commits

[![Netlify Status](https://api.netlify.com/api/v1/badges/f18f9223-9ecb-407f-bc38-fcf367f5f913/deploy-status)](https://jsruntimevuetodo.netlify.com/)

[Click here for demo](https://code.netdevv.com/vuetify_todo/todo)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production
* Please create a new **.env** file and add **BASE_URL="/"** in the main folder before running this command.
* Reason: It makes sure that all generated files are ready to deploy and have the correct base url configured
  
  **For example :**
  If you are deploying your site in a sub folder named ```vueapp``` than change ```BASR_URL="vueapp"```
```
npm run build --prod
```
### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
