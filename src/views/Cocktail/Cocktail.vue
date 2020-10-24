<template>
  <div class="cocktail">
    <div class="cocktail-info-container">
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
<style scoped>
.cocktail {
  display: flex;
  justify-content: space-between;
}

.cocktail-info-container {
  border: 1px solid rgb(245, 240, 240);
  width: 50vw;
  border-radius: 3px;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: space-between;
  margin: 15px;
  padding: 15px;
  flex-direction: column;
  align-items: center;
}

.cocktail-title {
  font-family: "Dancing Script", cursive;
}

.cocktail-img-container {
  background: rgb(245, 244, 244);
  border-radius: 3px;
  width: 50vw;
  height: calc(100vh - 125px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.cocktail-img {
  max-height: 100%;
  max-width: 100%;
  padding: 8px;
  border-radius: 10px;
}

.cocktail-categories {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.cocktail-cat-item {
  font-size: 11px;
  background: rgb(240, 235, 235);
  color: rgb(100, 93, 93);
  padding: 2px 5px;
  border-radius: 3px;
}

ul {
  text-align: left;
  margin: 0;
  font-size: 14px;
}

ul li {
  margin: 0;
  padding: 0;
}

.cocktail-instructions {
  text-align: left;
}

.cocktail-ingr-container {
  background: rgba(131, 122, 255, 0.075);
  padding: 8px 17px 8px 0;
  color: #281e80;
  border-radius: 3px;
}
</style>
