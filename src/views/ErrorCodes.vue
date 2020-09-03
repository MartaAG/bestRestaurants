<template>
  <v-alert type="error" color="pink darken-4">
    <v-row align="center">
      <v-col class="grow">
        <div v-html="errorMessage"></div>
      </v-col>
      <v-col class="shrink" v-if="this.$route.params.id==='404'">
        <v-btn v-on:click="$router.go(-2)">Go back</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: "ErrorCodes",
  computed: {
    errorMessage: function() {
      let message = "";
      switch (this.$route.params.id) {
        case "noKey":
          message = `<p>
              Your API key is absent. To run the app, make a file named  .env.local. Visit <a target="_blank" rel="noopener noreferrer" href="https://developers.zomato.com/api#headline2" class="text-decoration-none font-weight-black pink--text text--lighten-3">Zomato</a> and request your API key. Then write in .env.local: VUE_APP_API_KEY=your API KEY. Save it. Run in the console <code>npm run serve</code>. For more information, read <a target="_blank" rel="noopener noreferrer" href="https://github.com/MartaAG/bestRestaurants/blob/fixBugs/README.md" class="text-decoration-none font-weight-black pink--text text--lighten-3">Readme</a> file.
            </p>`;
          break;
        case "403":
          message = `<p>
              Your key expired or is invalid. Visit <a target="_blank" rel="noopener noreferrer" class="text-decoration-none font-weight-black pink--text text--lighten-3" href="https://developers.zomato.com/api#headline2">Zomato</a> and request a new API key. For more information, read <a target="_blank" rel="noopener noreferrer" href="https://github.com/MartaAG/bestRestaurants/blob/fixBugs/README.md" class="text-decoration-none font-weight-black pink--text text--lighten-3">Readme</a> file.
            </p>`;
          break;
        case "404":
          message = `<p>
          Page you requested does not exist.
          </p>`;
          break;
        default:
          message = `Unknown error.`;
      }
      return message;
    }
  }
};
</script>
