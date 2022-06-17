<template>
  <div id="head">
    <img src="/assets/logo-pokemon.svg" alt="Pokémon logo" />
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

  <div id="loading-container" v-if="isLoading">
    <img src="/assets/pokeball.png" alt="pokeball" />
  </div>

  <div v-else id="cards">
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
      name: null,
      searchQuery: null,
      isLoading: false,
    }
  },

  methods: {
    get() {
      if (this.searchQuery) {
        this.isLoading = true
      }

      axios
        .get(`https://api.pokemontcg.io/v2/cards?q=name:${this.searchQuery}`)
        .then((response) => {
          this.count = response.data.count
          this.cards = response.data.data
          this.isLoading = false
        })
    },
  },

  created() {
    this.searchQuery = this.$route.query?.search || ''
    this.name = this.searchQuery
    this.get()
  },

  watch: {
    name(next) {
      if (next) {
        this.$router.replace(`?search=${next}`)
      }
      this.searchQuery = next
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

#loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;

  animation: loading-spinner 1s infinite linear;
}

@keyframes loading-spinner {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

#loading-container img {
  width: 40px;
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
