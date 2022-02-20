<template>
  <div class="bg">
    <div class="home">
      <div id="info">
        <div id="user">
          <img class="moon" src="@/assets/img/drink.png" />
          <h1>Username</h1>
        </div>

        <div id="nav">
          <ul>
            <li><router-link to="/timeline">Timeline</router-link></li>
            <li><router-link to="/newentry">New Entry</router-link></li>
            <li><router-link to="/calendar">Calendar</router-link></li>
            <li><a @click.prevent="signOut">Sign out</a></li>
          </ul>
        </div>
      </div>

      <div id="display">
        <div class="article">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            id="newentry"
          >

          <v-text-field
            label="Title: "
            placeholder=""
            dark
          ></v-text-field>

          <select 
            v-model="search"
            class="selectentry"
            dark>
            <option disabled value="">Select category :</option>
            <option>Excited</option>
            <option>Happy</option>
            <option>Hopeful</option>
            <option>Bored</option>
            <option>Sad</option>
            <option>Annoyed</option>
          </select>

          <v-textarea
            name="input-7-1"
            label="New Journal Entry"
            clearable
            clear-icon="mdi-close-circle"
            rows="7"
            row-height="15"
            dark
          ></v-textarea>

          <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          Publish
        </v-btn>
          </v-form>
        </div>
      </div>

      <div id="socials">
        <div class="friends">
          <h2>Prijatelji</h2>
          <ul id="prijatelji">
            <li v-for="friend in friends" :key="friend.username">
              <img class="frIcons" :src="friendIcon(friend.icon)" />
              <h5 class="blue">{{ friend.username }}</h5>
            </li>
          </ul>
        </div>

        <div class="friends">
          <h2>Teme</h2>
          <ul id="teme">
            <li><a>Glazba</a></li>
            <li><a>Ljubimci</a></li>
            <li><a>Računalne igre</a></li>
            <li><a>Sport</a></li>
            <li><a>Izleti</a></li>
          </ul>
        </div>

        <div class="friends">
          <h2>Nadolazeći događaji</h2>
          <ul id="teme">
            <li><a>12.11.2021. Koncert</a></li>
            <li><a>17.11.2021. Rođendan</a></li>
            <li><a>06.12.2021. Sv. Nikola</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import json2 from "@/assets/data/Friends.json";
export default {
  data: function () {
    return {
      friends: json2.friends,
      search: "",
    };
  },
  mounted() {
    console.log(this.friends);
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
    friendIcon: function (path) {
      return require("@/" + path);
    },
  },
};
</script>
