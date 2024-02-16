import Homepage from "./components/Homepage.vue";
import Category from "./components/catalog/category/Category.vue";
import Product from "./components/catalog/product/Product.vue";

export const routes = [
    { path: '/', component: Homepage },
    { path: '/category/:id', component: Category, props: true },
    { path: '/product/:id', component: Product, props: true },
];
