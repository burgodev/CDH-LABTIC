<template>
  <v-app id="app2" dark>

    <v-toolbar app fixed clipped-left>
      <v-btn v-on:click="" round small text class="custom-btn"></v-btn>
      <v-btn v-on:click="" round small text class="custom-btn"></v-btn>

      <v-spacer/>
      <v-toolbar-title class="white--text">Controle de Horário</v-toolbar-title>
      <v-spacer/>

      <v-tooltip color="primary" bottom>
        <template v-slot:activator="{ on }">
          <v-btn :color="selectedButtonCdh" v-on:click="showCdh" v-on="on" round outline small class="custom-btn">
            <v-icon class="custom-btn">view_list</v-icon>
          </v-btn>
        </template>
        <span> CDH </span>
      </v-tooltip>

      <v-tooltip color="primary" bottom>
        <template v-slot:activator="{ on }">
          <v-btn :color="selectedButtonUser" v-on:click="showUsers" v-on="on" round outline small text class="custom-btn">
            <v-icon class="custom-btn">people</v-icon>
          </v-btn>
        </template>
        <span> Usuários </span>
      </v-tooltip>

      <!--<v-btn v-on:click="logout" class="custom-btn" outline  round small text>-->
      <!--<v-icon class="custom-btn">logout</v-icon>-->
      <!--</v-btn>-->


      <v-tooltip color="primary" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on:click="logout" v-on="on" class="custom-btn" outline round small text>
            <v-icon class="custom-btn">logout</v-icon>
          </v-btn>
        </template>
        <span> Sair </span>
      </v-tooltip>

    </v-toolbar>


    <v-content class="cdh-color" >
      <router-view/>
    </v-content>


    <v-footer app fixed>
      <span>&copy; 2019</span>


    </v-footer>


  </v-app>
</template>


<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })

  export default {
    data: () => ({

      selectedButtonColorCdh: false,
      selectedButtonColorUser: false

    }),

    computed: {
      selectedButtonCdh() {
        if (this.selectedButtonColorCdh) return 'primary';

      },

      selectedButtonUser() {
        if (this.selectedButtonColorUser) return 'primary';

      },

    },


    methods: {

      logout() {
        this.$router.replace('/loginBurgo');
        this.selectedButtonColorCdh = false;
        this.selectedButtonColorUser = false;
      },

      showUsers() {
        this.$router.replace('/usersBurgo')
        this.selectedButtonColorUser = !this.selectedButtonColorUser;
        this.selectedButtonColorCdh = false;
      },

      showCdh() {
        this.$router.replace('/cdhBurgo')
        this.selectedButtonColorCdh = !this.selectedButtonColorCdh;
        this.selectedButtonColorUser = false;

      },

      changeColor() {

      }

    }
  }

</script>

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
    color: #e900ff;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  /*!*333333*!*/
  .cdh-color {
    background-image: radial-gradient(#535353, #2f2f2f);
  }

  /*.cdh-color {*/
  /*background-image: url("./assets/teste.jpg")*/
  /*}*/

  .cdh-color2 {
    background-image: radial-gradient(#763a00, #1f0f00);
  }

  .cdh-color3 {
    /*background-image: radial-gradient(#ce7000, #7c123a);*/


  }

  .cdh-color55 {
    background-image: radial-gradient(#75706e, #313030);


  }

  .custom-btn:hover {
    color: #3abcb1 !important;

  }


</style>
