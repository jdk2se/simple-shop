<template>
  <Header />
  <router-view v-if="!shopStore.isLoading"></router-view>
</template>

<script setup lang="ts">
import Header from "./components/layout/Header.vue";
import { onBeforeMount } from "vue";
import { useShopStore } from "./stores/ShopStore";

const shopStore = useShopStore();

onBeforeMount(() => {
  shopStore.fill();
});
</script>
