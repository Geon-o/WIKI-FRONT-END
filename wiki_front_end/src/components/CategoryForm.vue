<template>
  <v-container class="category">
    <v-expansion-panels>
      <v-expansion-panel class="mb-1" v-for="item in listData" :key="item.id">
        <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
          {{ item.name }}
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <div class="subCategory" v-for="subItem in item.subCategory" :key="subItem.id">
            <a href="/" class="subCategory-text">{{ subItem.subCategoryTitle }}</a><br/>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script setup lang="ts">
import {useListStore} from "@/store/useMainStore";
import {storeToRefs} from "pinia";
import {onMounted} from "vue";

const store = useListStore();

const {listData} = storeToRefs(store);
const {getList} = store;

onMounted(() => {
  getList.call(store);
});

</script>

<style>
.category {
  width: 250px;
}

.subCategory-text {
  text-decoration: none;
  color: black;
}

.subCategory {
  margin-bottom: 10px;
}

</style>
