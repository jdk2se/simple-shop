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
        count: (state) => {
            return state.products.length;
        },
        isNotEmpty(): boolean {
            return this.count > 0;
        },
        grouped: (state) => {
            const grouped = groupBy(state.products, product => product.name);
            const sorted = Object.keys(grouped).sort();
            const inOrder: Record<string, IProduct[]> = {};
            sorted.forEach((productName) => inOrder[productName] = grouped[productName] );

            return inOrder;
        },
        groupCount() {
            return (name: string) => this.grouped[name].length;
        },
        cardTotal: state => state.products.reduce((acc , product) => acc + product.price, 0),
    },
    actions: {
        addProducts(count: number, product: IProduct) {
            for (let i = 0; i < count; i++) {
                this.products.push({ ...product });
            }
        },
        deleteCardProduct(id: string) {
            this.products = this.products.filter(product => product.id !== id);
        },
        checkout(){
            this.products = [];
        },
        setProductsCount(count: number, product:IProduct) {
            this.deleteCardProduct(product.id);
            if (count > 0) {
                this.addProducts(count, product);
            }
        }
    }
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
