import type { IncomingMessage, ServerResponse } from "node:http"

const userName = (req:IncomingMessage,res:ServerResponse)=>{
    res.writeHead(200,{
            "content-type": "application/json"
        })
        .end(JSON.stringify({"message": "User Name",
            names:["Arafat,Abir,Ariyan,samiya,Roja,Rida"]
        }))
}

export default userName;