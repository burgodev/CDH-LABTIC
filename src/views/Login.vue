<template>
    <v-container fluid fill-height>
        <v-layout align-content-center column>
            <v-flex></v-flex>
            <v-flex>
                <v-card
                        max-width="344"
                        class="mx-auto"
                        style="background-color: #711f1f"
                >
                    <v-card-title>
                        <v-layout justify-center>
                            <span class="display-1" style="font-weight: bold; color: whitesmoke">Login</span>
                        </v-layout>
                    </v-card-title>
                    <v-card ref="form">
                        <v-card-text>
                            <v-text-field
                                    ref="name"
                                    v-model="name"
                                    :rules="[() => !!name || 'This field is required']"
                                    :error-messages="errorMessages"
                                    label="Full Name"
                                    placeholder="Digite o seu nome"
                                    required
                            ></v-text-field>

                            <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Normal with hint text"
                                    hint="At least 8 characters"
                                    counter
                                    @click:append="show1 = !show1"
                            ></v-text-field>


                        </v-card-text>
                        <v-divider class="mt-5"></v-divider>
                        <v-card-actions>
                            <v-btn text>Cancel</v-btn>
                            <v-spacer></v-spacer>
                            <v-slide-x-reverse-transition>
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
                            </v-slide-x-reverse-transition>
                            <v-btn color="primary" text @click="submit">Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-card>
            </v-flex>
            <v-flex></v-flex>
        </v-layout>
    </v-container>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Login extends Vue {
      data () {
        return {
          show1: false,
          password: 'Password',
          rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match')
          }
        }
      }
    }
</script>
