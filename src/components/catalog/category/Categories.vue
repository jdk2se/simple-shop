<template>
  <div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Categories</h2>
        {{ JSON.stringify(shopStore.categories)}}

        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <Category
              v-for="category in shopStore.categories"
              :key="category.id"
              :category="category"
              class="group relative"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from './Category';
import { useShopStore } from "@/stores/ShopStore";

const shopStore = useShopStore();
</script>
