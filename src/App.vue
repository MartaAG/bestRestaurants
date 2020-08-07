<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-app-bar app color="brown darken-4" dark>
          <v-toolbar-title>Best restaurants</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container class="fill-height">
            <v-row>
              <v-col cols="12">
                <router-view></router-view>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <v-footer color="brown darken-4" app dark>
          <span>2020</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>
