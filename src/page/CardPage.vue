<template>
  <button @click="$router.go(-1)">
    H <img src="/assets/pokeball.png" /> me
  </button>
  <SelectedCard
    v-for="(information, index) in informations"
    :key="index"
    :name="information.name"
    :number="information.number"
    :cardInSet="information.set.printedTotal"
    :image="information.images.large"
    :block="information.set.series"
    :set="information.set.name"
    :rarity="information.rarity"
    :artist="information.artist"
    :date="information.set.releaseDate"
    :cardmarketLink="information.cardmarket.url"
    :cardmarketLow="information.cardmarket.prices.lowPrice"
    :cardmarketTrend="information.cardmarket.prices.trendPrice"
    :cardmarketAverage7="information.cardmarket.prices.avg7"
    :cardmarketAverage30="information.cardmarket.prices.avg30"
  />
</template>

<script>
import SelectedCard from '../components/SelectedCard.vue'
import axios from 'axios'

export default {
  name: 'card-page',
  components: { SelectedCard },
  data() {
    return {
      informations: null,
    }
  },
  mounted() {
    axios
      .get(`https://api.pokemontcg.io/v2/cards/${this.$route.params.id}`)
      .then((response) => {
        this.informations = response.data
      })
  },
}
</script>

<style>
body {
  height: calc(100vh-100px);
}

button {
  font-size: 1.3rem;
  background-color: transparent;
  cursor: pointer;
  color: #1964ac;
  border: 2px solid #1964ac;
  padding: 0 15px;
  height: 40px;
  border-radius: 4px;
}

button img {
  width: 12px;
  margin: 0 -5px;
}
</style>
