<template>
  <div class="about">
    <h1>This is an about page</h1>
    <RestaurantDetails />
    </div>
</template>

<script>

import RestaurantDetails from "@/components/RestaurantDetails";

export default {
  name: 'About',
  components: {
    RestaurantDetails
  }
}


</script>
