<template>
  <div class="home">
    <div v-if="loadingStatus" class="loader-container">
      <div>
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
        <p>Loading Drinks...</p>
      </div>
    </div>

    <div v-if="this.noCocktailsFound()">
      <b-card-group columns class="cocktails-container">
        <div v-for="drink in allDrinks" :key="drink.idDrink">
          <router-link
            :to="{ name: 'Cocktail', params: { id: drink.idDrink } }"
          >
            <b-card
              :title="drink.strDrink"
              :img-src="drink.strDrinkThumb"
              :img-alt="drink.strDrink"
              img-top
            >
            </b-card>
          </router-link>
        </div>
      </b-card-group>
    </div>
    <div v-else>No Cocktails Found, Sorry!</div>
    <div :class="computedClass">
      <div class="home-page-note">
        <p>Looking for</p>
        <p></p>
        <p class="home-page-note-that-cocktail">That Coocktail?</p>
        <p>Start Serching!</p>
      </div>
      <img
        class="home-page-background-img"
        alt="Background cocktail"
        src="../../assets/home-page-background.jpg"
      />
    </div>
  </div>
</template>

<script src="./Home.js"></script>
<style src="./Home.css"></style>
