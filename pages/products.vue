<template>
  <v-container class="d-flex flex-column">
    <v-row>
      <v-col cols="12" md="3">
        <v-card outlined>
          <v-card-title>
            <v-icon icon="mdi-filter-menu-outline" size="small" />
            Filter
          </v-card-title>
          <v-divider></v-divider>
          <v-container class="pt-5" fluid>
            <v-select
              v-model="selected"
              label="Sort by:"
              :items="sortItems"
              variant="outlined"
              item-title="label"
              item-value="sort"
              return-object
            ></v-select>
          </v-container>
          <v-divider></v-divider>
          <v-card-title class="pb-0">Categories</v-card-title>
          <v-container class="pt-0" fluid>
            <v-checkbox
              multiple
              v-model="checkedCategories"
              label="Mens Clothing"
              value="men's clothing"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              multiple
              v-model="checkedCategories"
              label="Jewelry"
              value="jewelery"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              multiple
              v-model="checkedCategories"
              label="Electronics"
              value="electronics"
              hide-details
              dense
            ></v-checkbox>
            <v-checkbox
              multiple
              v-model="checkedCategories"
              label="Women's clothing"
              value="women's clothing"
              hide-details
              dense
            ></v-checkbox>
          </v-container>
          <v-divider></v-divider>
          <v-container>
            <v-btn
              variant="plain"
              size="small"
              color="error"
              prepend-icon="mdi-close-thick"
              @click="resetFilter"
            >
              Reset all
            </v-btn>
          </v-container>
        </v-card>
      </v-col>
      <v-col col="12" md="9">
        <v-row v-if="pending">
          <v-col>
            <v-progress-linear
              color="#f57e12"
              indeterminate
            ></v-progress-linear>
          </v-col>
        </v-row>
        <v-row v-else-if="error">
          <v-col>
            <v-alert variant="outlined" type="error" prominent>
              {{ error }}
            </v-alert>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12">
            <v-chip-group :mobile-breakpoint="1" multiple>
              <v-chip
                class="mr-2"
                v-for="(category, i) in checkedCategories"
                :value="category"
                :key="i"
                size="small"
                @click="removeChip(category)"
                append-icon="mdi-close-circle"
              >
                {{ category }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <!-- <v-col cols="12" v-if="displayedProducts.length == 0">
            <v-alert variant="outlined" type="error" prominent>
              No records found. Please try different criteria.
            </v-alert>
          </v-col> -->
          <v-col
            v-for="(product, index) in displayedProducts"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card class="mx-auto">
              <v-container class="d-flex justify-center">
                <NuxtImg
                  :src="product.image"
                  class="text-center"
                  height="100"
                />
              </v-container>
              <v-card-text>
                <p class="text-subtitle-1">
                  {{ product.title }}
                </p>
                <div class="d-flex mb-5">
                  <v-rating
                    :model-value="product.rating.rate"
                    color="amber"
                    density="compact"
                    half-increments
                    readonly
                    size="small"
                  />
                  <p class="text-grey ml-5">
                    {{ product.rating.rate }} ({{ product.rating.count }})
                  </p>
                </div>
                <p class="text-subtitle-2">${{ product.price }}</p>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn prepend-icon="mdi-view-gallery-outline"> View </v-btn>
                <v-btn
                  prepend-icon="mdi-cart-outline"
                  color="#f57e12"
                  variant="text"
                >
                  Buy
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col
            cols="12"
            v-if="store.getPagination.data.length > store.getPagination.perPage"
          >
            <v-pagination
              v-model="store.getPagination.currPage"
              :length="store.getPagination.pageCount"
              size="small"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "plain",
});

import { ref, watch, computed } from "vue";
import { storeToRefs } from "pinia";
import type { Products, SelectItems } from "~/types/index.d.ts";

// Filter
const checkedCategories = ref<string[]>([]);

// Sort options
const selected = ref<SelectItems>({
  label: "",
  sort: "",
});
const sortItems = ref<SelectItems[]>([
  { label: "Price (High to Low)", sort: "price-desc" },
  { label: "Price (Low to High)", sort: "price-asc" },
  { label: "Customer Rating (High to Low)", sort: "rating-desc" },
  { label: "Customer Rating (Low to High)", sort: "rating-asc" },
  { label: "Popularity (High to Low)", sort: "count-desc" },
  { label: "Popularity (Low to High)", sort: "count-asc" },
]);

const store = useProductsStore();
const { filteredProducts } = storeToRefs(store);

const { pending, data, refresh, error } = useFetch<Products[]>(
  "https://fakestoreapi.com/products",
  {
    lazy: true,
    server: false,
  },
);

watch(
  [data],
  ([newProducts], [_oldProducts]) => {
    // Store the initial response of the API call
    if (newProducts != null) {
      store.setProducts(newProducts);
    }
  },
  { deep: true },
);

watch(
  [filteredProducts],
  ([newFilteredProducts], [_oldFilteredProducts]) => {
    // Set pagination details
    if (newFilteredProducts.length > 0) {
      store.setPagination(newFilteredProducts);
    }
  },
  { deep: true },
);

const displayedProducts = computed((): Products[] => {
  let data: Products[] = [];

  if (!checkedCategories.value.length) {
    data = [...store.getProducts];
  } else {
    data = [...store.getProducts].filter(filterCategory);
  }

  // For sorting
  if (selected.value.sort !== "") {
    data = [...useProductSort(data, selected.value)];
  }

  store.setFilteredProducts(data);
  const startIndex =
    (store.getPagination.currPage - 1) * store.getPagination.perPage;
  return data.splice(startIndex, store.getPagination.perPage);
});

const filterCategory = (product: Products) => {
  return checkedCategories.value.some((category) => {
    return product.category === category;
  });
};

const resetFilter = (): void => {
  checkedCategories.value = [];
  selected.value = {
    label: "",
    sort: "",
  };
};

const removeChip = (item: string): void => {
  const index = checkedCategories.value.indexOf(item);
  if (index >= 0) checkedCategories.value.splice(index, 1);
};
</script>
