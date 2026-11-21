import type { IncomingMessage, ServerResponse } from "node:http"
import productController from "../cotrollers/products.controller"
import userName from "../cotrollers/user-name.controller"

const RouteHandler = (req:IncomingMessage,res:ServerResponse)=>{
    const url = req.url
    const method = req.method

    if(url === "/" && method === "GET"){
        // console.log("This is root route");
        res.writeHead(200, {
            "content-type":"text/plain"
        })
        .end("This is root")
    }

    //=========================
    else if (url?.startsWith("/products")){
        productController(req,res)
    }
    else if(url?.startsWith("/name")){
        userName(req,res)
    }
    //========================
    
    else{
        // console.log("Route is not define");
        res.writeHead(404,{
            "content-type":"text/plain"
        })
        .end("This is 404 not found")
    }

}
export default RouteHandler;