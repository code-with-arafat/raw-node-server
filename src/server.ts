import { createServer, IncomingMessage, Server, ServerResponse } from 'node:http';
import RouteHandler from './route/route';

const server:Server = createServer((req:IncomingMessage,res:ServerResponse)=>{
    // console.log(req);
    RouteHandler(req,res)
})

server.listen(5000,()=>{
    console.log("Server is running on port 5000");
})