import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allDrinks", "loadingStatus", "searchHappened"]),
    computedClass() {
      let className;

      if (this.searchHappened) {
        className = "no-background";
      } else {
        className = "home-page_background-img-container";
      }

      return className;
    }
  },
  methods: {
    noCocktailsFound() {
      return this.allDrinks !== null;
    }
  }
};
