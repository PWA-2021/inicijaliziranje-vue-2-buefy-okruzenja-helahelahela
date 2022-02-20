<template>
  <div id="pozadina">
    <div id="sadrzaj">
      <div id="register">
        <h1>Bullet Journal - Register</h1>
        <div v-if="error" class="error">{{ error.message }}</div>
        <form @submit.prevent="pressed" class="prijava">
          <input
            type="email"
            v-model="email"
            class="log"
            placeholder="Enter E-mail"
            name="uname"
            id="email"
          />

          <input
            type="password"
            v-model="password"
            class="log"
            placeholder="Enter Password"
            name="psw"
            id="password"
          />

          <button type="submit" id="loginB"><h2 id="boja">Register</h2></button>
          <label> </label>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import * as firebase from "firebase/app";

export default {
  methods: {
    async pressed() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "Timeline" });
      } catch (err) {
        console.log(err);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
};
</script>
