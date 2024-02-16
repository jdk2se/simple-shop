<template>
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8">
    <h3 class="text-2xl text-gray-900">
      Products
    </h3>
    <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <Product
          v-for="product in products"
          :key="product.id"
          :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Product from "@/components/catalog/product/Product.vue";
import { IProduct } from "@/types/IProduct";

defineProps<{
  products: IProduct[],
}>();
</script>
