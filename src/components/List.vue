<template>
  <div>


  <h1>best restaurants from Wroclaw, dzień dobry!</h1>
    <div v-for="restaurant in allRestaurants" :key="restaurant.id">
        <h2>{{restaurant.name}}</h2>
        <p>
          {{restaurant.rating}}
        </p>
        <p>
          {{restaurant.cuisine}}
        </p>
    </div>

    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'List',
    computed: mapGetters(['allRestaurants'])
  }
</script>
