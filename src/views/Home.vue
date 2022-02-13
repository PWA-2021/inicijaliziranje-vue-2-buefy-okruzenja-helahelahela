<template>
  <div id="pozadina">
    <div id="sadrzaj">
      <div id="login">
        <h1>Journal Time</h1>
        <form class="prijava" @submit.prevent="pressed">
          <div class="login">
            <input
              type="email"
              class="log"
              placeholder="Enter E-mail"
              name="email"
              id="email"
              v-model="email"
              required
            />
          </div>

          <div class="password">
            <input
              type="password"
              class="log"
              placeholder="Enter Password"
              name="password"
              id="password"
              v-model="password"
              required
            />
          </div>

          <label for="checkbox" id="check"
            ><input
              id="checkbox"
              type="checkbox"
              checked="checked"
              name="remember"
            />Remember me</label
          >

          <a>Forgot your password?</a>

          <button type="submit" id="loginB"><h2 id="boja">Log In</h2></button>
          <router-link to="/Register"
            ><button id="regC">
              <h2 id="boja2">Register</h2>
            </button></router-link
          >
          <label> </label>
        </form>
        <div class="error" v-if="error">{{ error.message }}</div>
      </div>
      <div id="slika">
        <router-link to="/Register"
          ><button id="regB"><h2 id="boja2">Register</h2></button></router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async pressed() {
      try {
        const val = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(val);
        this.$router.replace({ name: "Timeline" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
