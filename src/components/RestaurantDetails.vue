<template>
  <div v-if="restaurant">
    <v-sheet color="amber" elavation="10" width="500" heigth="200">
      <h2>{{ restaurant.name }}</h2>
      <h3>{{ restaurant.location.address }}</h3>
      <p>Hours: {{ restaurant.timings }}</p>
      <p>Phone: {{ restaurant.phone_numbers }}</p>
    </v-sheet>
    <br />
    <p>
      <span class="font-weight-medium">Cuisines:</span>
      {{ restaurant.cuisines }}
    </p>
    <p>
      <span class="font-weight-medium">Average cost for two customers:</span>
      {{ restaurant.average_cost_for_two }}
      {{ restaurant.currency }}
    </p>
    <p>
      <span class="font-weight-medium">Rating: </span>
      <span :style="`color=#${restaurant.user_rating.rating_color}`"
        >{{ restaurant.user_rating.aggregate_rating }},
        {{ restaurant.user_rating.rating_text }}</span
      >
      <span class="text--secondary">
        ({{ restaurant.all_reviews_count }} ratings)</span
      >
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
          <a :href="restaurant.url">{{ restaurant.name }}</a
          ><br />
          <a :href="restaurant.photos_url">Photos</a><br />
          <a :href="restaurant.menu_url">Menu</a><br />
          <a :href="restaurant.events_url">Events</a><br />
        </li>
      </ul>
    </div>
    <br />
    <v-btn to="/" color="brown darken-1" dark>
      go back
    </v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RestaurantDetails",
  mounted() {
       this.fetchRestaurantById(this.$route.params.id);
    //if user saw this route earlier, load saved restaurants
    //  this.$router.push(localStorage.getItem('paragraphId'))
    console.log(localStorage.getItem('visitedRestaurant'))
    if(localStorage.getItem('visitedRestaurant')) {
       this.$router.push(localStorage.getItem('visitedRestaurant'))
    }

  },
  watch: {
    //watch if currect restaurant is loaded
    //if new restaurant is loaded, save the new restaurant to local storage
    //localStorage.setItem('visitedRestaurant', this.$route.params.id);
    //else: don't save to local storage
      $route(to, from) {
        if(to.path !== from.path && this.$route.params.id) {
          localStorage.setItem('visitedRestaurant', this.$route.params.id)
        }
      }
  },
  methods: {
    ...mapActions(["fetchRestaurantById"])
  },
  computed: {
    ...mapGetters(["resByID"]),
    restaurant() {
      return this.resByID;
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
