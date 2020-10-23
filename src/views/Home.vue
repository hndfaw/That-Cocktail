<template>
  <div class="home">
    <NavBar className="nav-bar" @run-search="runSearching" />

    <div v-if="loadingData" class="loader-container">
      <div>
        <b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>
        <p>Loading Drinks...</p>
      </div>
    </div>

    <b-card-group columns class="cocktails-container">
      <div v-for="cocktail in cocktails" :key="cocktail.id">

        <router-link to="/about">
        <b-card
          :title="cocktail.strDrink"
          :img-src="cocktail.strDrinkThumb"
          :img-alt="cocktail.strDrink"
          img-top
        >
        </b-card>
        </router-link>
      </div>
    </b-card-group>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { fetchCoctails } from "../api/apiCalls";

export default {
  components: {
    NavBar
  },

  data() {
    return {
      // searchParams: {},
      loadingData: false,
      cocktails: []
    };
  },
  methods: {
    runSearching(searchParams) {
      // this.searchParams = searchParams;
      this.loadingData = true;
      fetchCoctails(searchParams).then(data => {
        console.log(data.drinks);
        this.cocktails = data.drinks;
        this.loadingData = false;

        //   this.images = images.results;
        //   this.pagesFound = images.total_pages;
        //   this.photosFound = images.total;
      });
    }
  }
};
</script>

<style>
.loader-container {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cocktails-container {
  margin: 0 30px 20px;
}
</style>


