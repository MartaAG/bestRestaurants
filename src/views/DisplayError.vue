<template>
  <div>
    <v-alert type="error" color="pink darken-4">
      <v-row align="center">
        <v-col class="grow">{{ this.errorMessage }}</v-col>
        <v-col class="shrink"> </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  name: "DisplayError",
  computed: {
    errorMessage: function() {
      let message = "";
      switch (this.$route.params.id) {
        case 1:
          message =
            "Your API key is absent. To run the app, please make a file named  '.env.local'. Please visit https://developers.zomato.com/api#headline2 and request your API key. Then write in env.local: VUE_APP_API_KEY=your API KEY. Save it. Run in console npm run serve. For more information, read readme file.";
          break;
        case 403:
          message =
            "Your key expired or is invalid. Please visit https://developers.zomato.com/api#headline2 and request a new API key";
          break;
        case 404:
          message = "Page you requested does not exist";
          break;
        default:
          message = "Unknown error";
      }
      return message;
    }
  }
};
</script>
