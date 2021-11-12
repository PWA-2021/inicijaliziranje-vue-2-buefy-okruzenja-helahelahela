<template>
  <div id="app">
    <div id="info">
      <div id="user">
        <div class="slika"></div>
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
        <h2>Sretan dan</h2>
        <p>
          May indulgence difficulty ham can put especially. Bringing remember
          for supplied her why was confined. Middleton principle did she
          procuring extensive believing add. Weather adapted prepare oh is
          calling. These wrong of he which there smile to my front. He fruit oh
          enjoy it of whose table. Cultivated occasional old her unpleasing
          unpleasant. At as do be against pasture covered viewing started.
          Enjoyed me settled mr respect no spirits civilly.<br />

          Material confined likewise it humanity raillery an unpacked as he.
          Three chief merit no if. Now how her edward engage not horses. Oh
          resolution he dissimilar precaution to comparison an. Matters engaged
          between he of pursuit manners we moments. Merit gay end sight front.
          Manor equal it on again ye folly by match. In so melancholy as an
          sentiments simplicity connection. Far supply depart branch agreed old
          get our.
        </p>
        <p class="date">9.10.2021.</p>
      </div>

      <div class="article">
        <h2>Dosadan dan</h2>
        <p>
          Prevailed sincerity behaviour to so do principle mr. As departure at
          no propriety zealously my. On dear rent if girl view. First on smart
          there he sense. Earnestly enjoyment her you resources. Brother chamber
          ten old against. Mr be cottage so related minuter is. Delicate say and
          blessing ladyship exertion few margaret. Delight herself welcome
          against smiling its for. Suspected discovery by he affection household
          of principle perfectly he.<br />

          Ye on properly handsome returned throwing am no whatever. In without
          wishing he of picture no exposed talking minutes. Curiosity continual
          belonging offending so explained it exquisite. Do remember to followed
          yourself material mr recurred carriage. High drew west we no or at
          john. About or given on witty event. Or sociable up material bachelor
          bringing landlord confined. Busy so many in hung easy find well up. So
          of exquisite my an explained remainder. Dashwood denoting securing be
          on perceive my laughing so.
        </p>
        <p class="date">29.8.2021.</p>
      </div>
    </div>

    <div id="socials">
      <div class="friends">
        <h2>Prijatelji</h2>
        <ul id="prijatelji">
          <li>morsmordre</li>
          <li>SmellyCat</li>
          <li>qNeb</li>
        </ul>
      </div>

      <div class="friends">
        <h2>Teme</h2>
        <ul id="teme">
          <li>Glazba</li>
          <li>Ljubimci</li>
          <li>Računalne igre</li>
          <li>Sport</li>
          <li>Izleti</li>
        </ul>
      </div>

      <div class="friends">
        <h2>Nadolazeći događaji</h2>
        <ul id="teme">
          <li>12.11.2021. Koncert</li>
          <li>17.11.2021. Rođendan</li>
          <li>06.12.2021. Sv. Nikola</li>
        </ul>
      </div>
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
  color: #3b3839;
  h1,
  h2 {
    font-weight: bold;
    color: #217beb;
  }
}

#info {
  width: 15%;
  float: left;
  padding: 20px;
  margin: 20px;
  margin-top: 40px;
  margin-left: 100px;
}

.slika {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  background-color: #217beb;
  margin: 10px auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #217beb;
    }
  }
}

li a {
  display: block;
  width: 90%;
  margin: 0 auto;
}

#display {
  width: 45%;
  text-align: left;
  float: left;
  margin-top: 20px;
}

.article {
  margin: 20px auto;
  padding: 20px;
  border-bottom: 1px solid #d5dbe3;
}

.date {
  font-size: smaller;
  color: #217beb;
}

#socials {
  float: left;
  width: 25%;
  margin-top: 40px;
  margin-left: 50px;
}

@counter-style cvijet {
  system: cyclic;
  symbols: "\2601";
  suffix: " ";
}

#prijatelji {
  list-style-type: cvijet;
  width: 65%;
  margin: 0 auto;
  margin-top: 20px;
  text-align: left;
  text-indent: 5px;
}

#prijatelji li {
  margin: 5px;
}

.friends {
  padding: 20px;
  background-color: #f5f0f3;
  border-radius: 30px;
  margin: 20px;
  width: 55%;
}
#teme {
  margin-top: 20px;
}
#teme li {
  font-weight: bold;
  font-size: 15px;
  margin: 5px;
}
</style>

<script></script>
