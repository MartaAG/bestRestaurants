<template>
  <div v-if="restaurant">
    <div :style="`background-color:${restaurant.user_rating.rating_obj.bg_color.type}`">
    <h2>{{ restaurant.name }}</h2>
    <h3>{{ restaurant.location.address }}</h3>
    </div>
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
      <span class="font-weight-medium">Rating:</span>
      {{ restaurant.user_rating.aggregate_rating }},
      {{ restaurant.user_rating.rating_text }}
      <span class="text--secondary"
        >({{ restaurant.all_reviews_count }} ratings)</span
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
      <h4>Linki</h4>
      <ul :style="`color:${restaurant.user_rating.rating_obj.bg_color.type}`">
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
    this.fetchRestaurantById(this.$route.params.id)
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
