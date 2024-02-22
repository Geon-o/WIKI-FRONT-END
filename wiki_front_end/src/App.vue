<template>
  <v-app>
    <v-container>
      <v-app-bar :elevation="0">
        <v-app-bar-title>
          <a href="/" class="appbar-title">Geon's WIKI</a>
        </v-app-bar-title>
      </v-app-bar>

      <v-main>
        <v-layout>
          <div>
            <category-form/>
          </div>
          <v-container>
            <router-view/>
          </v-container>
        </v-layout>
      </v-main>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import CategoryForm from "@/components/CategoryForm.vue";

export default defineComponent({
  name: 'App',
  components: {CategoryForm},
})
</script>

<style>
.appbar-title {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

</style>
