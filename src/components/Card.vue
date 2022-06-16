<template>
  <div class="card">
    <router-link :to="{ name: 'card', params: { id: id } }">
      <img
        :src="image"
        alt="Pokémon card"
        class="pokemon-card"
        @click="showCard()"
      />
    </router-link>
    <p>
      {{ name }} {{ number }}-{{ cardInSet }}
      <span id="hidden"> {{ id }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'pokemon-card',
  props: {
    image: String,
    name: String,
    number: String,
    cardInSet: Number,
    id: String,
  },
  methods: {
    showCard() {
      console.log(`https://api.pokemontcg.io/v2/cards/${this.id}`)
    },
  },
}
</script>

<style>
.pokemon-card {
  height: 260px;
  width: 187px;
  border-radius: 6px;
  cursor: pointer;
}

.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

a {
  margin: 0 auto;
}

.card p {
  margin: 5px auto 40px;
  font-size: 0.9rem;
  width: 187px;
  text-align: center;
}

#hidden {
  display: none;
}
</style>
