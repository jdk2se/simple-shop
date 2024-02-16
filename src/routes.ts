import Homepage from "./components/Homepage.vue";
import CategoryPage from "@/components/catalog/category/CategoryPage.vue";
import ProductPage from "@/components/catalog/product/ProductPage.vue";

export const routes = [
    { path: '/', component: Homepage },
    {
        path: '/catalog',
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
    { path: '/cart', component: Homepage },
    { path: '/*', name: '404', component: Homepage },// @TODO DudnikES
];
