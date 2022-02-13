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

        <select v-model="search">
          <option disabled value="">Select category :</option>
            <option>Excited</option>
            <option>Happy</option>
            <option>Hopeful</option>
            <option>Bored</option>
            <option>Sad</option>
            <option>Annoyed</option>
        </select>
      </div>

      <div id="display">
        <ul class="posts">
          <li v-for="post in filteredList" :key="post.category" class="article">
            <h2>{{ post.title }}</h2>
            <br />
            <span
              >Category: <span class="blue">{{ post.category }}</span></span
            ><br />
            <p>{{ post.entry }}</p>
            <br />
            <p class="date">{{ post.date }}</p>
          </li>
        </ul>
        <hr />
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
import json from "@/assets/data/DummyPosts.json";
import json2 from "@/assets/data/Friends.json";
export default {
  name: "Home",
  data: function () {
    return {
      posts: json.posts,
      friends: json2.friends,
      search: "",
    };
  },
  mounted() {
    // console.log(this.posts);
    console.log(this.friends);
  },
  computed: {
    //funkcija za pretragu postova
    filteredList() {
      return this.posts.filter((post) => {
        return post.category.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    friendIcon: function (path) {
      return require("@/" + path);
    },
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
  },
};
</script>

<style>
select {
  margin-top: 20px;
  font-size: 15px;
  background-color: #4B2C5D;
  color: #A3BDF5;
  border: 1px solid white;
  border-radius: 20px;
  width: 100%;
  padding: 10px 0 10px 20px;
}
</style>
