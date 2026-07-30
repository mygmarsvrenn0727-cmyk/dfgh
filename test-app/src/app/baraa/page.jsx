"use client";

import { useState } from "react";
const Page = () => {
  const PRODUCTS = [
    { id: 1, name: "Гар утас", price: 1200000, quantity: 5 },
    { id: 2, name: "Чихэвч", price: 85000, quantity: 12 },
    { id: 3, name: "Гар цүнх", price: 45000, quantity: 3 },
    { id: 4, name: "Ном", price: 25000, quantity: 20 },
    { id: 5, name: "Кофе", price: 8000, quantity: 25 },
  ];

  const [products, setproducts] = useState(PRODUCTS);
  const [cart, setcart] = useState([]);

  const addtocart = (products) => {
    const found = cart.find((cartitem, index) => {
      return cartitem.id === products.id;
    });

    if (found) {
      const newcartitem = cart.map((cartitem, index) => {
        if (cartitem.id === products.id) {
          return { ...cartitem, quantity: cartitem.quantity + 1 };
        } else {
          return cartitem;
        }
      });

      setcart(newcartitem);
    } else {
      const cartitem = {
        id: products.id,
        name: products.name,
        price: products.price,
        quantity: 1,
      };
      setcart([...cart, cartitem]);
    }
  };
  return (
    <div>
      {products.map((products, index) => {
        return (
          <div key={products.id} className="flex gap-2">
            <div>{products.name}</div>
            <div>{products.price}</div>
            <div>{products.quantity}</div>
            <button onClick={() => addtocart(products)}> add to cart</button>
          </div>
        );
      })}

      {cart.map((cartitem, index) => {
        return (
          <div key={cartitem.id} className="flex gap-2">
            <div>
              {cartitem.name} shirheg {cartitem.quantity} = {cartitem.price}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
