import { ICategory } from "@/types/ICategory";
import { IProduct } from "@/types/IProduct";

export interface ICatalog {
    count: number;
    limit: number;
    offset: number;
    total: number;
}

export interface ICatalogCategories extends  ICatalog {
    items: ICategory[];
}

export interface ICatalogProducts extends ICatalog {
    items: IProduct[];
}
