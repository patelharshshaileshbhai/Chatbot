import app from "./app.js";
import {connectToDatabase} from "./db/connection.js";

connectToDatabase().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT} & connect to the database`);
    })
}).catch((error) =>console.log(error)); 
    

