const app = Vue.createApp({
  data() {
    return {
      cards: [],
    }
  },
  methods: {
    search() {
      const pokemon = this.name
      axios
        .get(`https://api.pokemontcg.io/v2/cards?q=name:${pokemon}`)
        .then((response) => (this.cards = response.data.data))
    },
  },
})

app.mount('#app')
