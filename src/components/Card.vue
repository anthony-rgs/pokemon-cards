<template>
  <div class="card">
    <img :src="image" alt="Pokémon card" class="pokemon-card" />
    <p>{{ name }} {{ number }}-{{ cardInSet }}</p>
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

.card {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.card p {
  margin: 10px auto 40px;
  font-size: 0.9rem;
  width: 187px;
  text-align: center;
}
</style>
