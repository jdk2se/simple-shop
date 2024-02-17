<template>
  <Modal
      :is-shown="isOrderCompleted"
      @closeModal="isOrderCompleted = false"
  />
  <div class="mt-8">
    <div class="flow-root">
      <ul role="list"
          class="-my-6 divide-y divide-gray-200">
        <li v-for="(product, name) in cartStore.grouped"
            :key="name"
            class="flex py-6">
          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img :src="product[0].thumbnailUrl"
                 :alt="name"
                 class="h-full w-full object-cover object-center"/>
          </div>

          <div class="ml-4 flex flex-1 flex-col">
            <div>
              <div class="flex justify-between text-base font-medium text-gray-900">
                <h3>
                  <router-link :to="`/catalog/product/${product[0].id}`">
                    {{ name }}
                  </router-link>
                </h3>
                <p class="ml-4">{{ product[0].defaultDisplayedPriceFormatted }}</p>
              </div>
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
              <p class="text-gray-500">Количество: {{ cartStore.groupCount(name) }}</p>

              <div class="flex">
                <button
                    @click="cartStore.deleteCardproduct(product[0].id)"
                    type="button"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="border-t border-gray-200 px-4 py-6 sm:px-6" v-if="cartStore.isNotEmpty">
    <div class="flex justify-between text-base font-medium text-gray-900">
      <p>Итого</p>
      <p>₽{{ cartStore.cardTotal }}</p>
    </div>
    <div class="mt-6">
      <a
          @click="makeOrder"
          class="items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
        Оформить заказ
      </a>
    </div>
  </div>
  <div class="border-t border-gray-200 px-4 py-6 sm:px-6" v-else>
    <router-link to="/">
      Продолжить покупки
    </router-link>
  </div>
</template>

<script setup lang="ts">

import { useCartStore } from "@/stores/CartStore";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const cartStore = useCartStore();
const isOrderCompleted = ref(false);
const makeOrder = () => {
  isOrderCompleted.value = true;
  cartStore.checkout();
};
</script>
