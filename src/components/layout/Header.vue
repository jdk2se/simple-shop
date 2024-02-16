<template>
  <header class="sticky top-0">
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <router-link to="/" class="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="My Shop" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MyShop</span>
        </router-link>
        <div class="flex items-center lg:order-2">
          <router-link to="/cart"
             class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <CartBtn @cartAction="openCart" />
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import CartBtn from "@/components/buttons/CartBtn.vue";

const openCart = () => {};
</script>

<style lang="scss" scoped>
header {
  z-index: 2;
}
</style>
