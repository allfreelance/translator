import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import VuetifyConfirm from 'vuetify-confirm'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.use(VuetifyConfirm, {
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  width: 400,
})

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch('STATE_CHANGED', user)
    });
   }
}).$mount('#app')
