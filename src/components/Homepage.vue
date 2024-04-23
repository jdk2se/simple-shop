<template>
  <div class="bg-gray-100">
    <Categories />
    <Products
        v-if="shopStore.products"
        :products="shopStore.products.items"
    />
  </div>
</template>

<script setup lang="ts">
import Categories from "@/components/catalog/category/Categories.vue";
import Products from "@/components/catalog/product/Products.vue";
import { useShopStore } from "@/stores/ShopStore";

const shopStore = useShopStore();
</script>


