import type { Products, SelectItems } from "~/types/index.d.ts";

const useProductSort = (
  data: Products[],
  selection: SelectItems,
): Products[] => {
  const sortBy = selection.sort.split("-")[0];
  const sortOrder = selection.sort.split("-")[1];

  let sortedData: Products[] = [];

  if (sortBy == "rating") {
    if (sortOrder == "asc") {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.rating.rate > b.rating.rate ? 1 : -1,
        ),
      ];
    } else {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.rating.rate > b.rating.rate ? -1 : 1,
        ),
      ];
    }
  }

  if (sortBy == "count") {
    if (sortOrder == "asc") {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.rating.count > b.rating.count ? 1 : -1,
        ),
      ];
    } else {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.rating.count > b.rating.count ? -1 : 1,
        ),
      ];
    }
  }

  if (sortBy == "price") {
    if (sortOrder == "asc") {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.price > b.price ? 1 : -1,
        ),
      ];
    } else {
      sortedData = [
        ...data.sort((a: Products, b: Products): number =>
          a.price > b.price ? -1 : 1,
        ),
      ];
    }
  }

  return sortedData;
};

export { useProductSort };
