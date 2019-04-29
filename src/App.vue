<template>
  <v-app  id="app">
    <div id="nav" >
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/login2">Login2</router-link> |
      <router-link to="/timeRegister">CDH</router-link>
    </div>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .buttonColor{


  }
</style>
