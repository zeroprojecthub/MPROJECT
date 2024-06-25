
import {app} from './app.js';
import dotenv from "dotenv"
import connectDB from "./db/index.js";

const PORT = process.env.PORT || 8000;

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



app.listen(PORT,()=>{
    console.log(`Listion gon port ${PORT}`);
});

