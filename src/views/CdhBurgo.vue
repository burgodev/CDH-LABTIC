<template>
  <v-container fluid fill-height >
    <v-layout wrap justify-center align-start>
      <v-flex xs10 sm10 md10>

        <v-toolbar flat>
          <v-toolbar-title class="primary--text">CDH</v-toolbar-title>

          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>


          <v-flex xs6 sm6 md4 d-flex>
            <v-select v-if="testOsv"
                      :items="items"
                      label="User"
            ></v-select>
            <h1 v-else> eu sou um usuario logado</h1>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex xs6 sm6 md2 d-flex>
            <v-select
              :items="items"
              label="Month"
            ></v-select>
          </v-flex>

          <v-spacer></v-spacer>

          <v-flex xs6 sm6 md2 d-flex>
            <v-select
              :items="items"
              label="Year"
            ></v-select>
          </v-flex>


          <v-spacer></v-spacer>

          <v-flex xs2 sm2 md2 d-flex>
            <v-layout justify-end align-center>
              <v-layout justify-end>

                <v-btn class="custom-btn" icon fab round v-on="">
                  <v-icon class="custom-btn">search</v-icon>
                </v-btn>

              </v-layout>
              <v-divider
                class="mx-1"
                vertical
                inset
              ></v-divider>


              <!--<v-layout wrap>-->
              <!--<v-btn round outline small class="custom-btn" v-on="on">-->
              <!--<v-icon class="custom-btn" >power_settings_new</v-icon>-->
              <!--</v-btn>-->
              <!--</v-layout>-->

              <v-layout wrap>
                <v-tooltip  color="primary" bottom>
                  <template v-slot:activator="{ on }">
                    <v-btn  round outline small :color="sessionButton" class="custom-btn" @click="sessionControl" v-on="on">
                      <v-icon class="custom-btn">power_settings_new</v-icon>
                    </v-btn>
                  </template>
                  <span> Iniciar/Finalizar Sessão </span>
                </v-tooltip>
              </v-layout>

              <!--<v-btn v-on:click="logout" class="custom-btn" icon round >-->
              <!--<v-icon class="custom-btn" color="white" >logout</v-icon>-->
              <!--</v-btn>-->

              <!--<v-btn icon  round class="custom-btn" v-on="beginSession">-->
              <!--<v-icon class="custom-btn" dark>power_settings_new</v-icon>-->
              <!--</v-btn>-->
            </v-layout>
          </v-flex>


        </v-toolbar>

        <v-data-table
          :headers="headers"
          :items="timeRegister"
          :search="search"
          class="elevation-1"

        >
          <template v-slot:items="props">

            <td class="text-xs-center">{{ props.item.day }}</td>
            <td class="text-xs-center">{{ props.item.entry }}</td>
            <td class="text-xs-center">{{ props.item.exit }}</td>
            <td class="text-xs-center">{{ props.item.timeWorked }}</td>
            <td class="justify-center layout px-0">
              <v-icon
                small
                class="custom-btn"
                @click="showJustifyAbsence(props.item)"
              >
                edit
              </v-icon>
            </td>
          </template>

          <template v-slot:no-results>
            <v-alert :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </template>

        </v-data-table>

        <JustifyAbsence ref="JustifyAbsence"/>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import JustifyAbsence from "../components/JustifyAbsence";
  import {
    AdminAPI,
  } from '../requests';
  import {AxiosInstance as axios} from "axios";

  export default {
    name: "Cdh",
    components: {JustifyAbsence},

    data: () => ({
      testOsv: true,
      search: '',
      teste: false,
      selectedButtonColorCdhCdh: true,
      headers: [

        {text: 'Dia', value: 'day', align: 'center'},
        {text: 'Entrada', value: 'entry', align: 'center'},
        {text: 'Saída', value: 'exit', align: 'center'},
        {text: 'Horas Trabalhadas', value: 'timeWorked', align: 'center'},
        {text: 'Justificativa', sortable: false, align: 'center'},


      ],
      timeRegister: [],
      items: []

    }),


    mounted() {
      this.initialize()

    },


    computed: {
      sessionButton(){
        if(this.teste) return'primary';
      },

      formTitle() {
        return this.editedIndex === -1 ? 'Novo Usuário' : 'Editar Usuário'
      }

    },

    methods: {
      async initialize() {


        // let ret = await AdminAPI.cdhConsult()

        // this.timeRegister = [
        //   {
        //     day: 1,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //
        //   },
        //
        //   {
        //     day: 2,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },
        //
        //   {
        //     day: 3,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },
        //
        //   {
        //     day: 4,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },
        //
        //   {
        //     day: 5,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },
        //
        //   {
        //     day: 6,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },
        //
        //
        //   {
        //     day: 6,
        //     entry: "14:00",
        //     exit: "18:00",
        //     timeWorked: 4,
        //   },


        // ]
      },


      showJustifyAbsence() {
        this.$refs.JustifyAbsence.open({})
      },

      sessionControl() {
        this.teste = !this.teste;
      }
    }
  }

</script>

<style scoped>

</style>
