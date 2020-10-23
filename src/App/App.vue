<template>
  <div id="app">
    <NavBar className="nav-bar" @run-search="runSearching"/>
        <b-spinner v-if="loadingData" class="loader" variant="primary" type="grow" label="Spinning"></b-spinner>


    <!-- <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
