<template>
  <div class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <router-link :to="`${url}`">
        <img :src="product.thumbnailUrl"
             :alt="product.name"
             class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
      </router-link>
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <router-link :to="`${url}`">
            {{ product.name }}
          </router-link>
        </h3>
        <div class="product-price">
          {{ product.defaultDisplayedPriceFormatted }}
        </div>
      </div>
      <CartBtn @cartAction="addToCart" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "@/types/IProduct.js";
import CartBtn from "@/components/buttons/CartBtn.vue";

defineProps<{
  product: IProduct,
  url: string,
}>();


const addToCart = () => {
  console.log('todo add to cart');
};
</script>
