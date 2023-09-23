export const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5050"
    : process.env.BASE_URL;
export const PRODUCTS_URL = "/api/products";
export const CATEGORY_URL = "/api/category";
