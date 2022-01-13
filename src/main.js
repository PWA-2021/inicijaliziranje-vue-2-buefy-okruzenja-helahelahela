import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "./router";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
    apiKey: "AIzaSyAxIJk_HCYxYxyIcCRfYIXwx8qUPBHISqY",
    authDomain: "journal-86463.firebaseapp.com",
    projectId: "journal-86463",
    storageBucket: "journal-86463.appspot.com",
    messagingSenderId: "560017810713",
    appId: "1:560017810713:web:cda0f408c11a1815b71188"
};

firebase.initializeApp(firebaseConfig);

Vue.use(Buefy);
Vue.use(vuetify);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   el: '#app',
//   vuetify: new vuetify(),
// })
