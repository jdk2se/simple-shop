<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl py-16 lg:max-w-none">
      <h3 class="text-2xl text-gray-900">
        Categories({{ shopStore.categories.count }})
      </h3>
      <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <Category
            v-for="category in shopStore.categories.items"
            :key="category.id"
            :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Category from "@/components/catalog/category/Category.vue";
import { useShopStore } from "@/stores/ShopStore";
const shopStore = useShopStore();
</script>
