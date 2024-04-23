<template>
  <section class="py-10 font-poppins"
           v-if="product">
    <div class="max-w-6xl px-4 mx-auto">
      <div class="flex flex-wrap mb-24 -mx-4">
        <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
          <div class="sticky top-0 overflow-hidden ">
            <div
                v-if="currentImg"
                class="relative mb-6 lg:mb-10 lg:h-96"
            >
              <a class="absolute left-0 transform lg:ml-2 top-1/2 translate-1/2" href="#">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-left dark:text-blue-200" viewBox="0 0 16 16"
                    @click="slideImage('backward')"
                >
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z">
                  </path>
                </svg>
              </a>
              <img
                  class="object-contain w-full lg:h-full"
                  :src="currentImg.thumbnailUrl"
                  :alt="product.name"
              />
              <a class="absolute right-0 transform lg:mr-2 top-1/2 translate-1/2" href="#">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-5 h-5 text-blue-500 bi bi-chevron-right dark:text-blue-200" viewBox="0 0 16 16"
                    @click="slideImage('forward')"  
                  >
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                  </path>
                </svg>
              </a>
            </div>
            <div
                v-if="product.galleryImages && currentImg"
                class="flex-wrap hidden -mx-2 md:flex"
            >
              <div
                  v-for="img in product.galleryImages"
                  :key="img.id"
                  class="w-1/2 p-2 sm:w-1/4"
                  @click="currentImg.thumbnailUrl = img.thumbnailUrl"
              >
                <a class="block border border-gray-200 hover:border-blue-400 dark:border-gray-700 dark:hover:border-blue-300"
                   href="#">
                  <img
                      class="object-contain w-full lg:h-28"
                      :src="img.thumbnailUrl"
                      :alt="product.name">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full px-4 md:w-1/2">
          <div class="lg:pl-20">
            <div class="mb-6 ">
              <h2 class="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-900 md:text-2xl">
                {{ product.name }}
              </h2>
              <div v-html="product.description" />
              <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                <span>{{ product.defaultDisplayedPriceFormatted }}</span>
              </p>
            </div>
            <div class="flex flex-wrap items-center mb-6">
              <a
                  @click="addToCart"
                  class="cursor-pointer w-full px-4 py-3 text-center text-blue-600 bg-blue-100 border border-blue-600 dark:hover:bg-gray-900 dark:text-gray-400 dark:border-gray-700 dark:bg-gray-700 hover:bg-blue-600 hover:text-gray-100 lg:w-1/2 rounded-xl">
                Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useShopStore } from "@/stores/ShopStore";
import { onBeforeMount, Ref, ref, unref } from "vue";
import { IGalleryImage, IProduct } from "@/types/IProduct";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/CartStore";
import { Nullable } from "@/types/Nullable.ts";

const props = defineProps<{
  id: string
}>();
const cartStore = useCartStore();

const shopStore = useShopStore();
const router = useRouter();
let product: Ref<IProduct | null> = ref(null);
let currentImg: Ref<Nullable<IGalleryImage>> = ref(null);

onBeforeMount(() => {
  shopStore.getProductById(props.id)
      .then(result => {        
        console.log(result);// @TODO DudnikES
        const mainImg: IGalleryImage = {
          id: 0,
          url: result.thumbnailUrl,
          thumbnailUrl: result.thumbnailUrl,
        }

        product.value = result;
        product.value.galleryImages.unshift(mainImg);
        currentImg.value = {...mainImg};
      })
      .catch(() => {
        router.push({name: '404'});
      });
});

const slideImage = (direction: string) => {
  if (!product.value || !currentImg.value) {
    return;
  }
  
  if (direction === 'forward') {
    if ((currentImg.value.id + 1) >= product.value.galleryImages.length) {
      currentImg.value = product.value.galleryImages[0];      
    } else {
      currentImg.value = product.value.galleryImages[currentImg.value.id + 1];
    }   
  }
  else {
    if (currentImg.value.id - 1 >=0) {
      currentImg.value = product.value.galleryImages[currentImg.value.id - 1];
    } else {
      currentImg.value = product.value.galleryImages[product.value.galleryImages.length - 1];
    } 
  }
}

const addToCart = () => {
  cartStore.addProducts(1, <IProduct>unref(product));
}
</script>

