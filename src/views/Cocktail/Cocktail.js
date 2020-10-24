import { mapGetters } from "vuex";

export default {
  data() {
    return {
      cocktail: {},
      ingredients: []
    };
  },
  methods: {
    returnSingleCocktail() {
      const { id } = this.$route.params;
      const singleCocktail = this.allDrinks.find(co => co.idDrink === id);
      const processedIngredients = [];
      Object.entries(singleCocktail).forEach(sc => {
        if (sc[0].includes("strIngredient") && sc[1]) {
          let number = sc[0].substring(13);
          let measureKey = `strMeasure${number}`;
          let measure = singleCocktail[measureKey]
            ? ` (${singleCocktail[measureKey]})`
            : "";
          processedIngredients.push(`${sc[1]}${measure}`);
        }
      });

      this.ingredients = processedIngredients;
      this.cocktail = singleCocktail;
    }
  },
  created() {
    this.returnSingleCocktail();
  },
  computed: mapGetters(["allDrinks"])
};
