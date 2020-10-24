<template>
  <div>
    <b-navbar fixed="top" toggleable="lg" variant="light">
      <router-link to="/"
        ><h1 class="logo">
          <span class="logo-that">
            That
          </span>
          Cocktail!
        </h1></router-link
      >

      <!-- Bellow line brings menu button for small screens -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="fetchDrinks({ searchTerm, searchType })">
            <b-form-select
              v-model="searchType"
              :options="options"
              class="my-2 my-sm-0"
              size="sm"
              value-field="item"
              text-field="name"
            ></b-form-select>
            <b-form-input
              v-model="searchTerm"
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button
              :disabled="this.isDisabled()"
              size="sm"
              class="my-2 my-sm-0"
              type="submit"
              variant="danger"
              ><b-icon icon="search"></b-icon
            ></b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavBar",
  data() {
    return {
      searchTerm: "",
      searchType: "s",
      options: [
        { item: "s", name: "Cocktail by Name" },
        { item: "f", name: "Coocktail by First Letter" }
      ]
    };
  },
  methods: {
    isDisabled() {
      return this.searchTerm === "";
    },
    ...mapActions(["fetchDrinks"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #dfece6;
}

.logo {
  font-family: "Dancing Script", cursive;
  /* font-size: 80px; */
  color: rgb(209, 38, 38);
  margin: 0;
}

.logo-that {
  color: #ed9702;
}

.navbar-nav {
  align-items: center;
}

.form-control-sm {
  margin-left: 8px;
}

a[data-v-4295d220]:hover {
  text-decoration: none;
  color: #ffffff;
}
</style>
