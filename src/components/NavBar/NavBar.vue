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

<script src="./NavBar.js"></script>

<style src="./NavBar.css" scoped></style>
