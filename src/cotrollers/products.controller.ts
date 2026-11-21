import type { IncomingMessage, ServerResponse } from "node:http";
import { title } from "node:process";
import { productService } from "../service/products.service";
import type { ITypes } from "../types/types";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;
  //For Get Single Product
  const urlParams = url?.split("/");
  const id =
    urlParams && urlParams[1] === "products" ? Number(urlParams[2]) : null;
  console.log(id);

  if (url === "/products" && method === "GET") {
    const products = productService();

    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "Products ritrive Successfully! ",
          data: products,
        }),
      );
    //Single Products
  } else if (method === "GET" && id !== null) {
    const products = productService();
    //===========
  
    console.log("Products:", products);
    console.log("Product ID:", products[0]?.id);
    console.log("ID from URL:", id);

    const product = products.find((p: ITypes) => {
      return Number(p.id) === id;
    });
    console.log(product);

    res
      .writeHead(200, {
        "content-type": "application/json",
      })
      .end(
        JSON.stringify({
          message: "Products ritrive Successfully! ",
          data: product,
        }),
      );
  }
};

export default productController;
