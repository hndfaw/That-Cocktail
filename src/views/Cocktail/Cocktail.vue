<template>
  <div class="cocktail">
    <div class="cocktail-info-container">
      <b-button class="back-btn" size="sm" variant="light" @click="this.goBack"
        >&#8592; Back</b-button
      >
      <h2 class="cocktail-title">{{ this.cocktail.strDrink }}</h2>
      <div class="cocktail-ingr-container">
        <h6>Ingredients</h6>
        <ul v-for="ing in ingredients" :key="ing">
          <li>{{ ing }}</li>
        </ul>
      </div>
      <div>
        <h6>Instructions</h6>
        <p class="cocktail-instructions">{{ this.cocktail.strInstructions }}</p>
      </div>
      <div class="cocktail-categories">
        <p class="cocktail-cat-item">{{ this.cocktail.strAlcoholic }}</p>
        <p class="cocktail-cat-item">{{ this.cocktail.strCategory }}</p>
        <p class="cocktail-cat-item">{{ this.cocktail.strGlass }}</p>
      </div>
    </div>
    <div class="cocktail-img-container">
      <img
        class="cocktail-img"
        :src="this.cocktail.strDrinkThumb"
        :alt="this.cocktail.strDrink"
      />
    </div>
  </div>
</template>

<script src="./Cocktail.js"></script>
<style src="./Cocktail.css" scoped></style>
