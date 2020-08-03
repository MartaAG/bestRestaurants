<template>
  <div>
    <h2>{{restaurant.name}}</h2>
    <h3>{{restaurant.location.address}}</h3>
    <p>
      {{restaurant.cuisines}}
    </p>
    <p>

    </p>
    <p> average cost for two customers:
      {{restaurant.average_cost_for_two}}
      {{restaurant.currency}}
    </p>
    <p>
      Rating: {{restaurant.user_rating.aggregate_rating}}, {{restaurant.user_rating.rating_text}}
      ({{restaurant.all_reviews_count}})
    </p>
    <p>
      zamówienia przez internet: {{restaurant.has_online_delivery}}
      rezerwacja miejsc: {{restaurant.has_table_booking}}
    </p>
    <div>
      <h4>Linki</h4>
      <ul>
        <li>
          <a :href="restaurant.url">{{restaurant.name}}</a><br/>
          <a :href="restaurant.photos_url">Photos</a><br/>
          <a :href="restaurant.menu_url">Menu</a><br/>
          <a :href="restaurant.events_url">Events</a><br/>
        </li>
      </ul>

    </div>
  <v-btn @click="goBack">
    go back
  </v-btn>

  </div>
</template>

<script>

import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: "RestaurantDetails",
  methods: {
    goBack() {
      return this.$router.go(-1)
    },
    ...mapActions(['fetchRestaurants'])
  },
  computed: {
    ...mapGetters(['restaurantsByID']),
    restaurant () {return this.restaurantsByID.get(this.$route.params.id)}
  }
}


</script>
