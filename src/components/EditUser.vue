<!--<template>-->

  <!--<div class="text-xs-center">-->
    <!--<v-dialog-->
      <!--v-model="dialog"-->
      <!--max-width="500"-->
    <!--&gt;-->
      <!--<v-card>-->
        <!--<v-card-title class="headline" align-center justify-center> Justificar Ausência</v-card-title>-->

        <!--<v-card-text>-->
          <!--<v-flex>-->
            <!--<v-form-->
              <!--ref="form"-->
              <!--v-model="valid"-->
              <!--lazy-validation-->
            <!--&gt;-->

              <!--<v-select-->
                <!--v-model="select"-->
                <!--:items="items"-->
                <!--:rules="[v => !!v || 'Item is required']"-->
                <!--label="Usuário"-->
                <!--required-->
              <!--&gt;</v-select>-->

              <!--<v-text-field-->
                <!--v-model="hours"-->
                <!--:rules="hoursRules"-->
                <!--label="Horas"-->
                <!--required-->
              <!--&gt;</v-text-field>-->

              <!--<v-text-field-->
                <!--v-model="justification"-->
                <!--:rules="justificationRules"-->
                <!--label="Justificativa"-->
                <!--required-->
              <!--&gt;</v-text-field>-->


            <!--</v-form>-->
          <!--</v-flex>-->
        <!--</v-card-text>-->

        <!--<v-card-actions>-->
          <!--<v-spacer></v-spacer>-->
          <!--<v-btn-->
            <!--:disabled="!valid"-->
            <!--@click="validate"-->
            <!--round-->
            <!--outline-->
          <!--&gt;-->
            <!--Confirmar-->
          <!--</v-btn>-->


          <!--<v-btn-->

            <!--@click="cancel"-->
            <!--round-->
            <!--outline-->
          <!--&gt;-->
            <!--Cancelar-->
          <!--</v-btn>-->

        <!--</v-card-actions>-->
      <!--</v-card>-->
    <!--</v-dialog>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--export default {-->
    <!--name: "EditUser",-->

    <!--data() {-->
      <!--return {-->

        <!--dialog: false,-->

        <!--valid: true,-->
        <!--Users: [],-->

        <!--editedIndex: -1,-->
        <!--editedItem: {-->
          <!--name: '',-->
          <!--surname: '',-->
          <!--email: '',-->
          <!--cpf: '',-->
          <!--entryDate: '',-->
          <!--exitDate: '',-->
          <!--password: ''-->
        <!--},-->
        <!--defaultItem: {-->
          <!--name: '',-->
          <!--surname: '',-->
          <!--email: '',-->
          <!--cpf: '',-->
          <!--entryDate: '',-->
          <!--exitDate: '',-->
          <!--password: ''-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--computed: {-->
      <!--formTitle() {-->
        <!--return this.editedIndex === -1 ? 'Novo Usuário' : 'Editar Usuário'-->
      <!--}-->
    <!--},-->


    <!--watch: {-->
      <!--dialog(val) {-->
        <!--val || this.close()-->
      <!--}-->
    <!--},-->

    <!--methods: {-->
      <!--editItem() {-->
        <!--this.editedIndex = this.users.indexOf(item)-->
        <!--this.editedItem = Object.assign({}, item)-->
        <!--this.dialog = true-->


      <!--},-->

      <!--deleteItem(item) {-->
        <!--const index = this.users.indexOf(item)-->
        <!--confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)-->
      <!--},-->

      <!--close() {-->
        <!--this.dialog = false-->
        <!--setTimeout(() => {-->
          <!--this.editedItem = Object.assign({}, this.defaultItem)-->
          <!--this.editedIndex = -1-->
        <!--}, 300)-->
      <!--},-->

      <!--save() {-->
        <!--if (this.editedIndex > -1) {-->
          <!--Object.assign(this.users[this.editedIndex], this.editedItem)-->
        <!--} else {-->
          <!--this.users.push(this.editedItem)-->
        <!--}-->
        <!--this.close()-->
      <!--},-->

      <!--open() {-->
        <!--this.dialog = true;-->
        <!--alert('teste')-->
      <!--},-->

      <!--cancel() {-->
        <!--this.dialog = false;-->
      <!--},-->

    <!--}-->
  <!--}-->

<!--</script>-->

<!--<style scoped>-->
<!--</style>-->
