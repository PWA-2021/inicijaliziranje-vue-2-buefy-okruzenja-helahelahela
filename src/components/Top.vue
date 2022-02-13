<template>
  <div class="b">
    <!--<span v-if="loggedIn">Logged in.</span>
        <span v-else>Not logged in.</span>
        <div>
            <button @click="signOut">Sign out</button>
        </div>-->
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.loggedIn = !!user;
      // if (user) {
      //     this.loggedIn = true;
      // } else {
      //     this.loggedIn = false;
      // }
    });
  },
  data() {
    return {
      loggedIn: false,
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Home" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.b {
  color: black;
}
</style>
