<template>
  <div v-if="restaurant">
    <v-row>
      <v-col lg="4">
        <v-card
          dark
          class="mx-auto pink darken-4"
          max-width="500"
          elevation="15">
          <v-card-text>
            <p
              class="display-1 text--primary
              font-weight-medium
              pink--text text--lighten-5">
              {{ restaurant.name }}
            </p>

            <p
              class="font-weight-bold
              pink--text text--lighten-5
              text-subtitle-1">
              {{ restaurant.location.address }}
            </p>

            <p
              class="pink--text text--lighten-5
              text-subtitle-1">

              <span class="font-weight-medium">Hours:</span>
              {{ restaurant.timings }}
            </p>

            <p
              class="pink--text text--lighten-5
              text-subtitle-1">

              <span class="font-weight-medium">Phone:</span>
              {{ restaurant.phone_numbers }}
            </p>
          </v-card-text>
        </v-card>
        <br />
        <p>
          <span class="font-weight-medium">Cuisines:</span>
          {{ restaurant.cuisines }}
        </p>
        <p>
          <span class="font-weight-medium">
            Average cost for two customers:
          </span>
          {{ restaurant.average_cost_for_two }}
          {{ restaurant.currency }}
        </p>
        <p>
          <span class="font-weight-medium">Rating: </span>
          <span>
            {{ restaurant.user_rating.aggregate_rating }},
            {{ restaurant.user_rating.rating_text }}
          </span>
          <span class="text--secondary">
            ({{ restaurant.all_reviews_count }} ratings)
          </span>
        </p>
        <p v-if="restaurant.has_online_delivery === 0">
          No online delivery
        </p>
        <p v-else>
          There is online delivery
        </p>
        <p v-if="restaurant.has_table_booking === 0">
          No table booking
        </p>
        <p v-else>
          There is table booking
        </p>
        <div>
          <h4>Links</h4>
          <ul>
            <li>
              <a :href="restaurant.url">{{ restaurant.name }}</a>
              <br />
              <a :href="restaurant.photos_url">Photos</a>
              <br />
              <a :href="restaurant.menu_url">Menu</a>
              <br />
              <a :href="restaurant.events_url">Events</a>
              <br />
            </li>
          </ul>
        </div>
        <br />
        <v-btn to="/" color="brown darken-1" dark>
          go back
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "RestaurantDetails",
  mounted() {
    this.fetchRestaurantFromCache(this.$route.params.id);
  },
  methods: {
    ...mapActions(["fetchRestaurantFromCache"])
  },
  computed: {
    ...mapGetters(["getOneRestaurant"]),
    restaurant() {
      return this.getOneRestaurant;
    }
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>
