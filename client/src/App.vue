<template>
  <v-app>
    <v-app-bar absolute color="primary" dark app>
      <img src="../src/assets/bird.png" alt="" width="60" class="mr-3" />

      <v-toolbar-title>BIRD WATCH</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn color="primary" class="mr-3" to="/">Home</v-btn>
      <v-btn color="primary" class="mr-3" to="/gallery">Gallery</v-btn>
      <v-btn color="primary" to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view :birds="birds" @getBirds="getBirds()" @patchCount="patchCount"
      /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',

  data: () => ({
    birds: [],
  }),
  created() {
    this.getBirds();
  },
  methods: {
    async getBirds() {
      const { data } = await axios({
        url: 'http://127.0.0.1:3000/birds',
        method: 'GET',
      });
      this.birds = data;
    },
    async patchCount(bird) {
      await axios({
        url: 'http://127.0.0.1:3000/birds/' + bird.id,
        method: 'PATCH',
        data: {
          count: (bird.count += 1),
          observerName: bird.name,
        },
      });
      this.getBirds();
    },
  },
};
</script>
