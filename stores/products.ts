import { defineStore } from "pinia";
import type { Products, Pagination } from "~/types/index.d.ts";

export const useProductsStore = defineStore("products", {
  state: () => {
    return {
      products: [] as Products[],
      filteredProducts: [] as Products[],
      pagination: {
        currPage: 1,
        perPage: 6,
        dataLength: 0,
        pageCount: 0,
        data: [],
        dataRange: {
          start: 1,
          end: 6,
        },
      } as Pagination,
    };
  },
  actions: {
    setProducts(products: Products[]) {
      this.products = [...products];
    },
    setFilteredProducts(products: Products[]) {
      this.filteredProducts = [...products];
    },
    setPagination(products: Products[]) {
      this.pagination.dataLength = products.length;
      this.pagination.data = [...products];

      this.pagination.pageCount = Math.ceil(
        products.length / this.pagination.perPage
      );

      if (this.pagination.pageCount == 1) {
        this.pagination.currPage = 1;
      }

      if (this.pagination.currPage > this.pagination.pageCount) {
        this.pagination.currPage = this.pagination.currPage - 1;
      }
    },
  },
  getters: {
    getProducts: (state: { products: Products[] }): Products[] => {
      return state.products;
    },
    getFilteredProducts: (state: {
      filteredProducts: Products[];
    }): Products[] => {
      return state.filteredProducts;
    },
    getPagination: (state: { pagination: Pagination }): Pagination => {
      return state.pagination;
    },
  },
});
