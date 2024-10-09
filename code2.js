const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];
// 1
const listProducts = products.forEach((product) =>
  console.log(product.name, ", ", product.price)
);
const IncPrices = products.forEach(
  (product) => (product.price = Math.round(product.price * 1.1))
);
products.forEach((product) => console.log(product.name, ", ", product.price));
const categories = [];
products.forEach((product) => {
  if (!categories.includes(product.category)) {
    categories.push(product.category);
  }
});
console.log("Unique Categories:", categories);
// 2
const electronics = products.filter(
  (product) => product.category === "Electronics"
);
console.log("Electronics:", electronics);
const expensiveProducts = products.filter((product) => product.price > 300);
console.log("Expensive Products:", expensiveProducts);
const highrateProducts = products.filter((product) => product.rating >= 4.5);
console.log("High Rated Products:", highrateProducts);
//3
const highrateProducts2 = products.filter((product) => product.rating >= 4.5);
const loghighProducts = highrateProducts2.forEach((product) =>
  console.log(product.name)
);
const cheapelectronicProducts = products.filter(
  (product) => product.category === "Electronics" && product.price < 1000
);
const cheapelectronicproductsLog = cheapelectronicProducts.forEach(
  (cheapelectronicproduct) => console.log(cheapelectronicproduct)
);
