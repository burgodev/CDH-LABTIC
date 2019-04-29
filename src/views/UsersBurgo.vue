<template>
  <v-container fluid fill-height>
    <v-layout wrap justify-center align-start>
      <v-flex xs10 sm10 md10>

        <v-toolbar flat class="dark">
          <v-toolbar-title class="primary--text">Usuários</v-toolbar-title>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>

          <v-flex xs3 sm3 md3>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
            ></v-text-field>
          </v-flex>


          <spacer></spacer>

          <v-layout justify-end>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
          </v-layout>


          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>


          <v-dialog persistent v-model="dialog" max-width="500px">

            <template v-slot:activator="{ on }">
              <v-btn icon fab round class="custom-btn" v-on="on"
              >
                <v-icon class="custom-btn" dark>add</v-icon>
              </v-btn>
            </template>


            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>


              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.surname" label="Sobrenome"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md12>
                      <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.exitDate" label="Data de Saída"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.entryDate" label="Data de Entrada"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.cpf" label="CPF"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field v-model="editedItem.birthday" label="Data de Nascimento"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md4>
                      <v-switch color="primary" v-model="editedItem.isAdm" label="Admin" value="isAdm"></v-switch>
                    </v-flex>
                  </v-layout>
                </v-container>

                <v-card-actions>
                  <v-btn @click="showChangePassword" round outline small text class="custom-btn">Alterar Senha</v-btn>
                  <v-spacer></v-spacer>
                  <v-btn class="custom-btn" round outline small @click="close">Cancelar</v-btn>
                  <v-btn class="custom-btn" round outline small @click="save">Salvar</v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-dialog>


        </v-toolbar>

        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-center">{{ props.item.surname }}</td>
            <td class="text-xs-center">{{ props.item.email }}</td>
            <td class="text-xs-center">{{ props.item.cpf }}</td>
            <td class="text-xs-center">{{ props.item.entryDate }}</td>
            <td class="text-xs-center">{{ props.item.exitDate }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                @click="editItem(props.item)"
                class="custom-btn"
              >
                edit
              </v-icon>

              <v-icon
                small
                @click="deleteItem(props.item)"
                class="custom-btn"
              >
                delete
              </v-icon>
            </td>
          </template>

          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>
          <!--<template v-slot:no-data>-->
          <!--&lt;!&ndash;<v-btn color="primary" @click="initialize">Reset</v-btn>&ndash;&gt;-->
          <!--</template>-->
        </v-data-table>


        <ChangePassword ref="changePassword"/>

      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  import JustifyAbsence from "../components/JustifyAbsence";
  import ChangePassword from "../components/ChangePassword";

  export default {
    name: "UsersBurgo",
    components: {ChangePassword, JustifyAbsence},

    data: () => ({

      search: '',
      dialog: false,
      headers: [
        {
          text: 'Nome',
          align: 'left',
          value: 'name'
        },

        {text: 'Sobrenome', value: 'surname', align: 'center'},
        {text: 'Email', value: 'email', align: 'center'},
        {text: 'CPF', value: 'cpf', align: 'center'},
        {text: 'Data de Entrada', value: 'entryDate', align: 'center'},
        {text: 'Data de Saída', value: 'exitDate', align: 'center'},
        {text: 'Ações', sortable: false, align: 'center'}


      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        surname: '',
        email: '',
        cpf: '',
        entryDate: '',
        exitDate: '',
        password: '',
        isAdm: false
      },
      defaultItem: {
        name: '',
        surname: '',
        email: '',
        cpf: '',
        entryDate: '',
        exitDate: '',
        password: '',
        isAdm: false
      }
    }),

    computed: {
      formTitle() {
        return this.editedIndex === -1 ? 'Novo Usuário' : 'Editar Usuário'
      }
    },

    watch: {
      dialog(val) {
        val || this.close()
      }
    },

    created() {
      this.initialize()
    },

    methods: {
      initialize() {
        this.users = [
          {
            name: 'User1',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },

          {
            name: 'User',
            surname: 'user',
            email: 'user@gmail.com',
            cpf: '000-000-000-00',
            entryDate: '11/06/2018',
            exitDate: '11/06/2019'
          },


        ]
      },

      editItem(item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem(item) {
        const index = this.users.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
      },

      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save() {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
        } else {
          this.users.push(this.editedItem)
        }
        this.close()
      },


      showChangePassword() {
        this.$refs.changePassword.open({})
        this.close()
      }
    },
  }
</script>

<style scoped>

</style>
