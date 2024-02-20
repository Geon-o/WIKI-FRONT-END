<template>
  <v-app>
    <v-container>
      <v-app-bar :elevation="0">
        <v-app-bar-title>
          <a href="/" class="appbar-title">Geon's WIKI</a>
        </v-app-bar-title>
      </v-app-bar>

      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
.appbar-title{
  font-weight: bold;
  text-decoration: none;
  color: black;
}

</style>
