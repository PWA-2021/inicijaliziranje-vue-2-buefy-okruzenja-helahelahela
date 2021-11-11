<template>
  <div id="app">
    <div id="info">

      <div id="user">
        <div class="slika">
        </div>
        <h1>Username</h1>
      </div>

      <div id="nav">
        <ul>
          <li><router-link to="/home">Početna</router-link></li>
          <li><router-link to="/thismonth">Ovaj mjesec</router-link></li>
          <li><router-link to="/calendar">Kalendar</router-link></li>
          <li><router-link to="/category">Kategorije</router-link></li>
        </ul>
      </div>

    </div>

    <div id="display">

      <div class="article">
        <h2>Naslov</h2>
        <p>May indulgence difficulty ham can put especially. Bringing remember for supplied her why was confined. Middleton principle did she procuring extensive believing add. Weather adapted prepare oh is calling. These wrong of he which there smile to my front. He fruit oh enjoy it of whose table. Cultivated occasional old her unpleasing unpleasant. At as do be against pasture covered viewing started. Enjoyed me settled mr respect no spirits civilly.<br>

        Material confined likewise it humanity raillery an unpacked as he. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an. Matters engaged between he of pursuit manners we moments. Merit gay end sight front. Manor equal it on again ye folly by match. In so melancholy as an sentiments simplicity connection. Far supply depart branch agreed old get our.</p>
        <p class="date">9.10.2021.</p>
      </div>

      <div class="article">
        <h2>Naslov</h2>
        <p>Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he.<br>

        Ye on properly handsome returned throwing am no whatever. In without wishing he of picture no exposed talking minutes. Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. High drew west we no or at john. About or given on witty event. Or sociable up material bachelor bringing landlord confined. Busy so many in hung easy find well up. So of exquisite my an explained remainder. Dashwood denoting securing be on perceive my laughing so.</p>
        <p class="date">29.8.2021.</p>
      </div>

    </div>

    <div id="socials">

    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1, h2 {
    font-weight: bold;
  }
}

#info {
  width: 25%;
  border: 1px solid black;
  float: left;
  padding: 20px;
}

.slika {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background-color: pink;
  margin: 10px auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

li a {
  display: block;
  width: 90%;
  margin: 0 auto;
}

#display {
  width: 50%;
  border: 1px solid black;
  text-align: left;
  float: left;
  padding: 20px;
}

.article {
  margin: 10px;
  margin-bottom: 25px;
}

.date {
  font-size: smaller;
}

#socials {
  float: left;
  border: 1px solid black;
  width: 25%;
}
</style>

<script>
</script>