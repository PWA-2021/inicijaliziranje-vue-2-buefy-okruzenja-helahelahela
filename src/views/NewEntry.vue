<template>
<div class="bg">
    <div class="home">
        <div id="info">
            <div id="user">
                <img class="moon" src="../assets/drink.png">
                <h1>Username</h1>
            </div>

            <div id="nav">
                <ul>
                <li><router-link to="/">Timeline</router-link></li>
                <li><router-link to="/newentry">New Entry</router-link></li>
                <li><router-link to="/Calendar">Calendar</router-link></li>
                <li><router-link to="/">Categories</router-link></li>
                <li><router-link to="/Login">Log In</router-link></li>
                </ul>
            </div>
        </div>

        <div id="display">
                <div class="article">
                    <v-text-field 
                        label="Title: " 
                        placeholder=""
                        color="#231133"
                    ></v-text-field>

                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                            >
                            Categories
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                v-for="(item, index) in items"
                                :key="index"
                            >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                    <v-textarea
                        name="input-7-1"
                        label="New Journal Entry"
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="7"
                        row-height="15"
                    ></v-textarea>

                    <v-btn
                        class="mr-4"
                        @click="submit"
                        >
                        Submit
                    </v-btn>
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
export default {
    data: () => ({
      btns: [
        ['Removed', '0'],
        ['Large', 'lg'],
        ['Custom', 'b-xl'],
      ],
      colors: ['deep-purple accent-4', 'error', 'teal darken-1'],
      items: [...Array(4)].map((_, i) => `Item ${i}`),
    }),
  }
</script>
