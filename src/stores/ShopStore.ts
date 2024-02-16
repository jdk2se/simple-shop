import { defineStore, acceptHMRUpdate } from "pinia";
import shopConfig from "../shopConfig";
import { ICategory } from "../types/ICategory";

export const useShopStore = defineStore('ShopStore', {
    state: () => {
        return {
            categories: [] as ICategory[],
            products: [],
        }
    },
    getters: {},
    actions: {
        fill() {
            const options = {
                method: 'GET',
                headers: {accept: 'application/json', Authorization: `Bearer ${shopConfig.token}`}
            };

            fetch(`https://app.ecwid.com/api/v3/${shopConfig.storeId}/categories`, options)
                .then(response => response.json())
                .then(response => {
                    this.categories = response;
                })
                .catch(err => console.error(err));
        },
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useShopStore, import.meta.hot));
}
