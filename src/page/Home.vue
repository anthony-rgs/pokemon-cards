<template>
  <div id="head">
    <img src="../assets/logo-pokemon.svg" alt="Pokémon logo" />
    <div id="nav">
      <input
        type="text"
        placeholder="Search a Pokémon card ..."
        v-model="name"
        @keyup.enter="get"
      />
      <button @click="get()">Search</button>
    </div>
    <p id="count" v-if="count != null">{{ count + ' results' }}</p>
  </div>

  <div id="cards">
    <Card
      v-for="(card, index) in cards"
      :key="index"
      :image="card.images.small"
      :name="card.name"
      :number="card.number"
      :cardInSet="card.set.printedTotal"
      :id="card.id"
    />
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import axios from 'axios'

export default {
  name: 'home-page',
  components: { Card },

  data() {
    return {
      cards: null,
      count: null,
    }
  },

  methods: {
    get() {
      const pokemon = this.name
      axios
        .get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`)
        .then((response) => {
          this.count = response.data.count
          console.log(this.count)
          this.cards = response.data.data
        })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');
body {
  font-family: 'Lato', sans-serif;
  margin: 60px 60px 0;
}

#head {
  display: flex;
}

#head img {
  height: 44px;
}

#nav {
  margin: 0 auto 80px;
}

#nav input,
#nav button {
  color: #1964ac;
  border: 2px solid #1964ac;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 1rem;
}

#nav input {
  height: 40px;
  width: 500px;
  outline: none;
}

#nav button {
  height: 100%;
  margin-left: 20px;
  background-color: #fff;
  cursor: pointer;
}

button:hover {
  -webkit-transform: scale(0.97);
  -ms-transform: scale(0.97);
  transform: scale(0.97);
}

#cards {
  display: grid;
  grid-template-columns: repeat(5, auto);
}

@media screen and (max-width: 1120px) {
  body {
    margin: 50px 50px 0;
  }

  #nav input {
    width: 300px;
  }

  #cards {
    grid-template-columns: repeat(4, auto);
  }
}

@media screen and (max-width: 920px) {
  body {
    margin: 40px 40px 0;
  }

  #cards {
    grid-template-columns: repeat(3, auto);
  }
}

@media screen and (max-width: 750px) {
  #nav input {
    width: 190px;
  }
}

@media screen and (max-width: 680px) {
  body {
    margin: 30px 30px 0;
  }

  #head {
    flex-direction: column;
  }

  #head img {
    margin-bottom: 25px;
  }

  #nav button,
  #count {
    display: none;
  }

  #cards {
    grid-template-columns: repeat(2, auto);
  }
}

@media screen and (max-width: 465px) {
  body {
    margin: 20px;
  }

  #cards {
    grid-template-columns: repeat(1, auto);
  }
}
</style>
