import client from "../utils/shopify";
import { useState } from "react";
let state = {
  products: [],
  product: {},
  collections: [],
  collection: {},
};

const [data, setData] = useState(state);

function getAllProducts() {
  client.product.fetchAll().then((prods) => {
    // setData({ ...data, products: prods });
    // return data.products;
    // console.log(prods);
  });
}

export { getAllProducts };
