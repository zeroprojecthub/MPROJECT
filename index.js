
import {app} from './app.js';
import dotenv from "dotenv"

const PORT = process.env.PORT || 8000;

dotenv.config({
    path: './.env'
})

app.listen(PORT,()=>{
    console.log(`Listion gon port ${PORT}`);
});

