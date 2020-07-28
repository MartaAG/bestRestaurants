<template>
  <div id="app">
  <v-app id="inspire">
    <v-app id="inspire">


      <v-app-bar
        app
        color="indigo"
        dark
      >

        <v-toolbar-title>Best restaurants</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center">
              <List>

              </List>
              <v-tooltip left>
              
                <span>Source</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
  </v-app>
</div>
</template>

<script>
import List from "./components/List";

export default {
  name: "App",

  components: {
    List
  },

  data: () => ({
    //
  })
};
</script>
