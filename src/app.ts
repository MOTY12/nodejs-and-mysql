import express,{Request, Response} from "express";
import mysql from 'mysql';
import dotenv from `dotenv`;
import { env } from "process";
const app = express() ;

const connectionString = process.env.DATABASE_URL || '';
const connection =mysql.createConnection(connectionString)
connection.connect();

dotenv.config()

app.get('/api/character', (req: Request, res: Response) => {
    res.send("it works")
})

app.get('/api/character/:id', (req: Request, res: Response) => {
    const id = req.params.id
    res.send("it works for id" + id )

})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
        console.log("App is running")
})