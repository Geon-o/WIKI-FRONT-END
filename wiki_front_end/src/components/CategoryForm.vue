<template>
 <v-container class="category">
   <v-expansion-panels>
     <v-expansion-panel class="mb-1" v-for="item in listData" :key="item.id">
       <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
         { item.title }
       </v-expansion-panel-title>
       <v-expansion-panel-text>
         <a href="/">객체지향</a><br/>
         <a href="/">Wrapper Class</a><br/>
         <a href="/">SOLID</a><br/>
       </v-expansion-panel-text>
     </v-expansion-panel>

     <v-expansion-panel class="mb-1">
       <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
         Design Pattern
       </v-expansion-panel-title>
       <v-expansion-panel-text>
         <a href="/">팩토리</a><br/>
         <a href="/">싱글턴</a><br/>
       </v-expansion-panel-text>
     </v-expansion-panel>

     <v-expansion-panel class="mb-1">
       <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
         Spring Boot
       </v-expansion-panel-title>
       <v-expansion-panel-text>
         <a href="/">AOP</a><br/>
         <a href="/">IoC</a><br/>
         <a href="/">DI</a><br/>
       </v-expansion-panel-text>
     </v-expansion-panel>
   </v-expansion-panels>
 </v-container>
</template>

<script setup lang="ts">
import { useListStore } from "@/store/useMainStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useListStore();

const { listData } = storeToRefs(store);
const { getList } = store;

onMounted(() => {
  getList.call(store);
});

</script>

<style scoped>
.category{
  width: 250px;
}

</style>
