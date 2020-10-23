import { fetchCoctails } from '../api/apiCalls';
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
data() {
    return {
        searchParams: {},
        loadingData: false,
        cocktails: []
    }
},
  methods: {
    runSearching(searchParams) {
        this.searchParams = searchParams;
        this.loadingData = true;
      fetchCoctails(searchParams)
        .then(data => {
            console.log(data);
            this.cocktails = data.drinks
            this.loadingData = false;
            

        //   this.images = images.results;
        //   this.pagesFound = images.total_pages;
        //   this.photosFound = images.total;
          
        });
    }

  },
};