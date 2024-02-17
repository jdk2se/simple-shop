import { defineStore, acceptHMRUpdate } from "pinia";
import { groupBy} from "lodash";
import { IProduct } from "@/types/IProduct";

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            products: [] as IProduct [],
        };
    },
    getters: {
        count: (state) => state.products.length,
        isNotEmpty() {
            return this.count > 0;
        },
        grouped: (state) => {
            const grouped = groupBy(state.products, product => product.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach((key) => inOrder[key] = grouped[key] );

            return inOrder;
        },
        groupCount() {
            return (name) => this.grouped[name].length;
        },
        cardTotal: state => state.products.reduce((acc , product) => acc + product.price, 0),
    },
    actions: {
        addProducts(count: number, product: IProduct) {
            for (let i = 0; i < count; i++) {
                this.products.push({ ...product });
            }
        },
        deleteCardproduct(id) {
            this.products = this.products.filter(product => product.id !== id);
        },
        checkout(){
            this.products = [];
        },
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
