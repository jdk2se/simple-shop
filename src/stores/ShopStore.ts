import { defineStore, acceptHMRUpdate } from "pinia";
import shopConfig from "../shopConfig";
import { ICatalogCategories, ICatalogProducts } from "@/types/ICatalog";

export const useShopStore = defineStore('ShopStore', {
    state: () => {
        return {
            categories: null as ICatalogCategories | null,
            products: null as ICatalogProducts | null,
            isLoading: true,
        }
    },
    getters: {
    },
    actions: {
        async fill() {
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', Authorization: `Bearer ${shopConfig.token}`}
            };

            const [categoriesResponse, productsResponse] = await Promise.all([
                fetch(`https://app.ecwid.com/api/v3/${shopConfig.storeId}/categories`, options),
                fetch(`https://app.ecwid.com/api/v3/${shopConfig.storeId}/products`, options)
            ]);

            this.categories = await categoriesResponse.json();
            this.products = await productsResponse.json();

            console.log(this.products);// @TODO DudnikES
            this.isLoading = false;
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopStore, import.meta.hot));
}
