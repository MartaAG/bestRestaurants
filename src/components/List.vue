<template>
<div>

  <h1>best restaurants from Wroclaw, dzień dobry!</h1>
  <v-row
  align="center"
  justify="center"
  class="grey lighten-5">

    <v-card
    class="mx-auto my-12"
    max-width="374"
    v-for="restaurant in allRestaurants"
    :key="restaurant.id">

      <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>


      <v-card-title>{{restaurant.name}}
      </v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
          :value="restaurant.rating"
          empty-icon="mdi-heart-outline"
          full-icon="mdi-heart"
          half-icon="mdi-heart-half-full"
          color="red"
          background-color="grey lighten-2"
          half-increments readonly size="30">
          </v-rating>
          <div class="grey--text ml-5">
            {{restaurant.rating}}
          </div>

          <div class="my-4 subtitle-1">
            Cuisine: {{restaurant.cuisine}}
          </div>
        </v-row>

      </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text to="/about">
          Details
        </v-btn>
      </v-card-actions>


    </v-card>

  </v-row>

</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'List',
  computed: mapGetters(['allRestaurants'])
}
</script>
