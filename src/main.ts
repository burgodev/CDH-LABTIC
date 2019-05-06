import Vue from 'vue'
import './plugins/vuetify'
import App2 from './AppBurgo.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

Vue.config.productionTip = false;

Vue.use(Vuetify, {
    theme: {
      primary: '#3abcb1',
      secondary: '#b8a370',
      // secondary: '#b8a370',
      accent: '#82B1FF',
      error: '#ffda00',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  }
);


new Vue({
  router,
  store,
  render: h => h(App2)
}).$mount('#app')
