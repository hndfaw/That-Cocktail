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
