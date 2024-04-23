import Homepage from "./components/Homepage.vue";
import CategoryPage from "@/components/catalog/category/CategoryPage.vue";
import ProductPage from "@/components/catalog/product/ProductPage.vue";
import CartPage from "@/components/cart/CartPage.vue";
import PageNotFound from "@/components/PageNotFound.vue";
import { useShopStore } from "@/stores/ShopStore.ts";

export const routes = [
    {   path: '/',
        component: Homepage,
        beforeEnter: () => {
            useShopStore().fill();
            return true;
        },
    },
    {
        path: '/catalog',
        beforeEnter: () => {
            useShopStore().fill();
            return true;
        },
        children: [
            {
                path: 'product/:id',
                component: ProductPage,
                props: true,
            },
            {
                path: ':categorySlug',
                children: [
                    {
                        path: '',
                        component: CategoryPage,
                        props: true,
                    },
                    {
                        path: 'product/:id',
                        component: ProductPage,
                        props: true,
                    }
                ],
            },
        ],
    },
    { path: '/cart', component: CartPage },
    { path: '/:pathMatch(.*)*', name: '404', component: PageNotFound },
];
