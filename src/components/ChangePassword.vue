<template>

  <div class="text-xs-center">
    <v-dialog
      persistent
      v-model="dialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="headline" align-center justify-center> Alterar Senha</v-card-title>
        <v-card-text>
          <v-flex>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >

              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'User is required']"
                label="Usuário"
                required
              ></v-select>

              <v-text-field
                v-model="currentPassword"
                :rules="currentPassword"
                label="Senha Atual"
                required
              ></v-text-field>

              <v-text-field
                v-model="newPassword"
                :rules="newPassword"
                label="Nova Senha"
                required
              ></v-text-field>

              <v-text-field
                v-model="confirmNewPassword"
                :rules="confirmNewPassword"
                label="Confirmar Nova Senha"
                required
              ></v-text-field>


            </v-form>
          </v-flex>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              @click="validate"
              round
              small
              outline
              class="custom-btn"
            >
              Confirmar
            </v-btn>


            <v-btn

              @click="cancel"
              round
              outline
              small
              class="custom-btn"
            >
              Cancelar
            </v-btn>
          </v-card-actions>
        </v-card-text>


      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: "ChangePassword",

    data() {
      return {

        dialog: false,

        valid: true,
        Users: [
          'User 1',
          'User 2',
          'User 3',
          'User 4'
        ],
        currentPassword: '',
        currentPasswordRules: [
          // v => !!v || 'Hours is required',
          // v => (v && v.length <= 2) || 'Hours must be less than 2 characters'
        ],
        newPassword: '',
        newPasswordRules: [
          // v => !!v || 'Justification is required',
          // v => (v && v.length >= 10) || 'Justifiaction must be more than 10 characters',
        ],

        confirmeNewPassword: '',
        confirmNewPasswordRules: [
          // v => !!v || 'Justification is required',
          // v => (v && v.length >= 10) || 'Justifiaction must be more than 10 characters',
        ],
        select: null,
      }
    },

    methods: {
      // validate () {
      //   if (this.$refs.form.validate()) {
      //     this.snackbar = true
      //   }
      // },
      // reset () {
      //   this.$refs.form.reset()
      // },
      // resetValidation () {
      //   this.$refs.form.resetValidation()
      // }

      open() {
        this.dialog = true;
      },

      cancel() {
        this.dialog = false;
      },
    }
  }


</script>

<style scoped>

</style>
