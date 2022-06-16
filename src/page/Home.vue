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
    }
  },

  methods: {
    get() {
      const pokemon = this.name
      axios
        .get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`)
        .then((response) => {
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
  position: absolute;
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

#cards {
  display: grid;
  grid-template-columns: repeat(5, auto);
}
</style>
