import path from "path"
import fs from "fs"

const filePath = path.join(process.cwd(),"./src/database/db.json")
export const productService = () =>{
    // console.log(filePath);
    const dbResult = fs.readFileSync(filePath,"utf-8")
    return JSON.parse(dbResult);
    
}