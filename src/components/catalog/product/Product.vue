<template>
  <div class="group relative">
    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <img :src="product.thumbnailUrl"
           :alt="product.name"
           class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true"
                  class="absolute inset-0"/>
            {{ product.name }}
          </a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IProduct } from "@/types/IProduct.js";

defineProps<{
  product: IProduct,
}>();
</script>
