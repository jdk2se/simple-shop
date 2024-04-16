<template>
  <form class="max-w-xs mx-auto">
    <label for="counter-input" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
    <div class="relative flex items-center">
      <button
          @click="change(quantity > 0 ? quantity - 1 : 0)"
          type="button" id="decrement-button" data-input-counter-decrement="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
        </svg>
      </button>
      <input
          @input="updateValue"
          type="text"
          :value="qty"
          data-input-counter class="w-7 flex-shrink-0 text-gray-900 border-0 bg-transparent text-sm font-normal text-center"
          placeholder="0" />
      <button
          @click="change(quantity + 1)"
          type="button" id="increment-button" data-input-counter-increment="counter-input" class="flex-shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg class="w-2.5 h-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  qty: { type: [Number, String], default: 0 },
});

const quantity = computed(() => Number(props.qty))

const emit = defineEmits(['change']);

const updateValue = (e: Event) => {
  emit('change', +(e.target as HTMLInputElement).value);
}

const change = (value: number) => {
  if (value > 0) {
    emit('change', value);
  }
}
</script>
