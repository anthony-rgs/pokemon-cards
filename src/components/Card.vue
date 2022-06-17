<template>
  <div class="cards">
    <router-link :to="{ name: 'card', params: { id: id } }">
      <img :src="image" alt="Pokémon card" class="card" />
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
}
</script>

<style>
.card {
  height: 260px;
  width: 187px;
  border-radius: 6px;
  cursor: pointer;
}

/* .card:hover {
  transform: translateY(-6px);
} */

.cards {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.cards a {
  margin: 0 auto;
}

.cards p {
  margin: 5px auto 40px;
  font-size: 0.9rem;
  width: 187px;
  text-align: center;
}

#hidden {
  display: none;
}
@-webkit-keyframes card {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes card {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes card-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes card-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.card {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.card:hover,
.card:focus,
.card:active {
  -webkit-animation-name: card-float, card;
  animation-name: card-float, card;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>
