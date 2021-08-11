export const API_URL = "http://localhost:4000/api";

export const formatCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
