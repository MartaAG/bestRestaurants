<template>
  <div>
    <h2>Name of the restaurant</h2>
    <h3>place</h3>
    <p>
      adres
    </p>
    <p>
      rodzaj kuchni
    </p>
    <p>
      średni koszt obiadu
    </p>
    <p>
      ocena
    </p>
    <p>
      czy obsługuje zamówienia przez internet?
    </p>
    <p>
      czy ma rezerwację miejsc?
    </p>
    <div>
      jakieś linki do zdjęć, menu i wydarzeń
    </div>

  <v-btn @click="goBack">
    go back
  </v-btn>

  </div>
</template>

<script>

export default {
  name: "RestaurantDetails",
  methods: {
    goBack() {
      return this.$router.go(-1)
    }
  }
}

</script>
