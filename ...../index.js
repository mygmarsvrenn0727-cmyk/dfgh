const orders = [
  {
    id: 1,
    customer: "Bat",
    item: "Laptop",
    qty: 1,
    price: 1200000,
    city: "Ulaanbaatar",
    paid: true,
  },
  {
    id: 2,
    customer: "Sara",
    item: "Mouse",
    qty: 4,
    price: 25000,
    city: "Darkhan",
    paid: false,
  },
  {
    id: 3,
    customer: "Tem",
    item: "Keyboard",
    qty: 2,
    price: 80000,
    city: "Ulaanbaatar",
    paid: true,
  },
  {
    id: 4,
    customer: "Bat",
    item: "Monitor",
    qty: 3,
    price: 450000,
    city: "Erdenet",
    paid: true,
  },
  {
    id: 5,
    customer: "Nara",
    item: "Cable",
    qty: 10,
    price: 8000,
    city: "Darkhan",
    paid: false,
  },
  {
    id: 6,
    customer: "Sara",
    item: "Laptop",
    qty: 2,
    price: 1200000,
    city: "Ulaanbaatar",
    paid: true,
  },
];

//Use .map() to return an array of just the product names.
//Use .map() to return an array of just the prices.
//Use .map() to return an array of names in UPPERCASE.
// Use .map() to return prices increased by 10% (price * 1.1).
//Use .map() to return an array of strings like "Milk - 2500".

//Use .filter() to return only products that are inStock.
//Use .filter() to return only products cheaper than 2000.
//Use .filter() to return only products in the "dairy" category.
//Use .filter() to return products that are NOT in stock.
//Use .filter() to return products priced between 1000 and 10000.

const res = [];
for (let i = 0; i < customer.length; i++) {
  if (customer[i].paid === false) {
    res.push(customer[i]);
  }
}
console.log(res);
