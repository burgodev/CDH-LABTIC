<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>

      <v-flex xs12 sm8 md4>
        <v-card-text>

          <v-text-field dark
                        ref="name"
                        v-model="user.login"
                        color="primary"
                        placeholder="Username"
                        required
          ></v-text-field>

          <v-text-field dark
                        v-model="user.password"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :type="show1 ? 'text' : 'password'"
                        placeholder="Password"
                        name="input-10-1"
                        color="primary"
                        counter
                        @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>

        <v-spacer></v-spacer>
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            class="my-0"
            @click="resetForm"
            v-on="on"
          >
            <v-icon>refresh</v-icon>
          </v-btn>
        </template>


        <v-btn class="custom-btn" @click="login" outline round small text>Login</v-btn>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import axios from 'axios';
  import {
    OpenAPI,
  } from '../requests';

  import '../App';

  @Component({
    components: {},
  })
  export default {

    data() {
      return {
        show1: false,
        user: {
          login: 'admin@admin.com',
          password: 'admin',
        },
      }
    },

    methods: {

      async login() {
        // try {
        // let ret = await axios.post('http://localhost:1337/api/login', this.user);
        //
        // if (ret.data.success) {
        //   localStorage.setItem('authenticationKey', ret.data.data.authenticationKey);
        //   localStorage.setItem('accessKey', ret.data.data.accessKey);
        //   localStorage.setItem('accessKey', ret.data.data.id);



        console.log('1-chegou no click login')
        console.log('login e senha', this.user);


        console.log('teste1')
        let ret = await OpenAPI.login({login: this.user.login, password: this.user.password});

        // console.log('initialize', ret);
        //
        //
        // console.log(this.$store)
        //
        // this.$router.replace('/cdhBurgo')
        //
        //   } else
        //     alert(ret.data.data.description);
        //
        //   // console.log('retornou isso', ret);
        //
        //
        // } catch (e) {
        //   console.error('erro no login', e);
        // }


      },
    }
  }


</script>

<style>

  /*.custom-btn::before {*/
  /*color: transparent*/
  /*}*/


  /*.timeRegister-color {*/
  /*background-image: radial-gradient(#444e54, #0b0b0b)*/
  /*}*/


  /*.login-card {*/
  /*style="background-color: rgba(244,248,255,0.8)"*/
  /*}*/


</style>


