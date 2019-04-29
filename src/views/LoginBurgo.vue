<template>
  <v-container fluid fill-height >
    <v-layout align-center justify-center >

      <v-flex xs12 sm8 md4>
        <v-card-text>

          <v-text-field dark
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        color="red"
                        placeholder="Username"
                        required
          ></v-text-field>

          <v-text-field dark
                        v-model="password"
                        :append-icon="show1 ? 'visibility' : 'visibility_off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        placeholder="Password"
                        name="input-10-1"
                        hint="At least 8 characters"
                        color="error"
                        counter
                        @click:append="show1 = !show1"
          ></v-text-field>
        </v-card-text>

        <v-spacer></v-spacer>
        <v-tooltip
          v-if="formHasErrors"
          left
        >
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
          <span>Refresh form</span>
        </v-tooltip>



        <v-btn class="custom-btn" @click="login" outline round small text>Login</v-btn>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {},
  })
  export default {

    data() {
      return {
        show1: false,
        password: 'Password',
        rules: {
          required: (value: any) => !!value || 'Required.',
          min: (v: any) => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match')
        }
      }
    },

    methods: {

      login() {
        this.$router.replace('/CdhBurgo');

      },
    }
  }


</script>

<style>

  /*.custom-btn::before {*/
    /*color: transparent*/
  /*}*/



  /*.cdh-color {*/
    /*background-image: radial-gradient(#444e54, #0b0b0b)*/
  /*}*/


  /*.login-card {*/
  /*style="background-color: rgba(244,248,255,0.8)"*/
  /*}*/


</style>


