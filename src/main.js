import Vue from "vue";
import App from "./App.vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Buefy);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  el: '#app',
  vuetify: new vuetify(),
  
})

new Vue({
  el: "#app",
  vuetify: new vuetify(),
  data: () => ({
    items: [
      { title: "Good-mood" },
      { title: "Dosada" },
      { title: "Busy Day" },
    ],
  }),
})