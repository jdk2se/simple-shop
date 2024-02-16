<template>
  <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
      <img :src="category.thumbnailUrl" :alt="category.name" class="h-full w-full object-cover object-center" />
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
      <a :href="category.id">
        <span class="absolute inset-0" />
        {{ category.name }}
      </a>
    </h3>
    <p class="text-base font-semibold text-gray-900">{{ category.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ICategory } from "@/types/ICategory";

defineProps<{
  category: ICategory,
}>();
</script>
