<template>
  <img :src="image" alt="Pokémon card" class="pokemon-card" />
  <p>{{ name }} {{ number }}-{{ cardInSet }}</p>
</template>

<script>
export default {
  name: 'pokemon-card',
  props: {
    image: String,
    name: String,
    number: String,
    cardInSet: String,
  },
}
</script>

<style scoped>
.pokemon-card {
  margin: 0 auto;
  height: 260px;
  width: 187px;
  border-radius: 6px;
  cursor: pointer;
}

.card p {
  margin: 10px auto 40px;
  font-size: 0.9rem;
  width: 187px;
  text-align: center;
}
</style>
