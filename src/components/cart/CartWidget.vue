<template>
  <div class="cart-widget">
    <CartBtn
        @cartAction="$router.push('/cart')"
    />
    <div class="cart-widget__count">{{ cartStore.count }}</div>
  </div>
</template>

<script setup lang="ts">
import CartBtn from "@/components/cart/CartBtn.vue";
import { useCartStore } from "@/stores/CartStore";

const cartStore = useCartStore();
</script>

<style lang="scss">
.cart-widget {
  position: relative;

  &__count {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: orangered;
    border-radius: 50%;
    text-align: center;
    top: 15px;
    left: 15px;
  }
}
</style>
