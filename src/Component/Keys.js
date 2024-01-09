import React, { useState } from "react";

const products = [
  { id: 1, Name: "laptop", Brand: "Dell", Qty: 1 },
  { id: 2, Name: "laptop", Brand: "Hp", Qty: 1 },
  { id: 3, Name: "laptop", Brand: "Lenovo", Qty: 1 },
];





const Keys = () => {
  const [item, setitem] = useState(products);

  const chngeqty = (id) => {
    const newitem = item.map((item) =>
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    setitem(newitem);
  };




  return (
    <div>
      {item.map((products) => (
        <div className="bg-success text-white m-2" key={products.id}>
          <h1>{products.Name}</h1>
          <h3>Brand:{products.Brand}</h3>
          <h4>Qty:{products.Qty}</h4>
          <button onClick={() => chngeqty(products.id)} type="but">
            +
          </button>
        </div>
      ))}
    </div>
  );
};



export default Keys;
