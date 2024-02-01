import express from "express";
import { bookRouter } from "./src/routes/book.routes.js";
const app = express();
const port = 3002;

app.use(express.json());
app.use(bookRouter);


app.listen(port, ()=> {
  console.log("started server");
})
