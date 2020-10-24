import { mapGetters } from "vuex";

export default {
  computed: mapGetters(["allDrinks", "loadingStatus"]),
  methods: {
    noCocktailsFound() {
      return this.allDrinks !== null;
    }
  }
};
