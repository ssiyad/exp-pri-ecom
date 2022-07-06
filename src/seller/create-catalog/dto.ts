export interface CatalogItem {
    name: string;
    price: number;
}

export interface CreateCatalogDto {
    items: CatalogItem[];
}

