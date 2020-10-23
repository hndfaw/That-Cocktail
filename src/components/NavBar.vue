<template>
  <div>
  <b-navbar fixed="top" toggleable="lg"  variant="light">
      <h1 class="logo"><span class="logo-that">That</span> Cocktail!</h1>

  <!-- Bellow line brings menu button for small screens -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form @submit.prevent="submitSearch">
          <b-form-input v-model="searchTerm" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button :disabled="this.isDisabled()" size="sm" class="my-2 my-sm-0" type="submit" variant="danger"><b-icon icon="search"></b-icon></b-button>
        </b-nav-form>
<!-- 
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    submitSearch() {
      this.$emit('run-search', {'searchTerm': this.searchTerm});
    },
    isDisabled() {
      return this.searchTerm === ''
    }
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
  font-family: 'Dancing Script', cursive;
  /* font-size: 80px; */
  color: rgb(209, 38, 38);
  margin: 0;
}

.logo-that {
  color: #ED9702;
}

 .navbar-nav {
    align-items: center;
 }

</style>
