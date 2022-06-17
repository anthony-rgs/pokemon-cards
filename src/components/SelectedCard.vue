<template>
  <div id="selected-card">
    <div id="left-section">
      <div id="card">
        <p id="name">
          {{ name }} <span class="blue"> {{ number }}-{{ cardInSet }} </span>
        </p>
        <img :src="image" alt="Pokémon card" id="selected-pokemon-card" />
      </div>
      <div id="card-informations">
        <p>
          Block <span class="blue"> {{ block }} </span>
        </p>
        <p>
          Set <span class="blue"> {{ set }} </span>
        </p>
        <p>
          Rarity <span class="blue"> {{ rarity }} </span>
        </p>
        <p>
          Artist <span class="blue"> {{ artist }} </span>
        </p>
        <p>
          Date <span class="blue"> {{ date }} </span>
        </p>
      </div>
    </div>
    <div id="right-section">
      <div>
        <a :href="cardmarketLink" target="_blank">
          <img
            src="/assets/cardmarket.webp"
            alt="Cardmarket Logo"
            id="cardmarket-logo"
          />
        </a>
        <div id="prices">
          <p>
            Low <span class="blue"> {{ cardmarketLow }} €</span>
          </p>
          <p>
            Trend <span class="blue"> {{ cardmarketTrend }} €</span>
          </p>
          <p>
            Average 7 days <span class="blue"> {{ cardmarketAverage7 }} €</span>
          </p>
          <p>
            Average 30 days
            <span class="blue"> {{ cardmarketAverage30 }} €</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selected-pokemon-card',
  props: {
    name: String,
    number: String,
    cardInSet: Number,
    image: String,
    block: String,
    set: String,
    rarity: String,
    artist: String,
    date: String,
    cardmarketLink: String,
    cardmarketLow: Number,
    cardmarketTrend: Number,
    cardmarketAverage7: Number,
    cardmarketAverage30: Number,
  },
}
</script>

<style scoped>
#selected-card {
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#left-section {
  display: flex;
}

p {
  font-weight: 400;
  font-size: 1.5rem;
}

p:last-child {
  margin-bottom: 0px;
}

.blue {
  color: #1964ac;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  margin-left: 10px;
}

#name {
  margin: 0 auto 10px;
  width: 252px;
  font-size: 1.2rem;
  text-align: center;
}

#selected-pokemon-card {
  width: 252px;
  height: 350px;
  border-radius: 6px;
}

#card-informations {
  display: grid;
  margin-left: 30px;
  margin-top: 10px;
}

#right-section {
  margin-top: 25px;
}

#prices {
  display: flex;
  flex-direction: column;
}

#cardmarket-logo {
  width: 200px;
}

@media screen and (max-width: 1030px) {
  #selected-card {
    flex-direction: column;
  }

  #right-section {
    margin: 50px;
  }
}

@media screen and (max-width: 710px) {
  #left-section {
    flex-direction: column;
  }

  #card {
    width: fit-content;
  }

  #name {
    width: fit-content;
  }

  #card-informations {
    margin-left: 0px;
  }

  #right-section {
    margin: 50px;
  }
}
</style>
