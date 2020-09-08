<template>
  <div>
    <h1>best restaurants from Wroclaw, dzień dobry!</h1>
    <v-row align="center" justify="center" class="grey lighten-5" fluid>
      <v-card
        class="mx-auto my-12"
        max-width="320"
        v-for="location in allRestaurants"
        :key="location.restaurant.id"
      >
        <v-img height="250" :src="location.restaurant.featured_image"></v-img>

        <v-card-title>{{ location.restaurant.name }} </v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="Number(location.restaurant.user_rating.aggregate_rating)"
              empty-icon="mdi-heart-outline"
              full-icon="mdi-heart"
              half-icon="mdi-heart-half-full"
              color="red"
              background-color="grey lighten-2"
              half-increments
              readonly
              size="30"
            >
            </v-rating>
            <div class="grey--text ml-5">
              {{ location.restaurant.user_rating.aggregate_rating }}
            </div>

            <div class="my-4 subtitle-1">
              Cuisine: {{ location.restaurant.cuisines }}
            </div>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn
            color="brown darken-3"
            text
            :to="{ name: 'About', params: { id: location.restaurant.id } }"
          >
            Details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "List",
  methods: {
    ...mapActions(["fetchRestaurants"])
  },
  computed: {
    ...mapGetters(["allRestaurants"])
  },
  created() {
    this.fetchRestaurants();
  }
};
</script>
