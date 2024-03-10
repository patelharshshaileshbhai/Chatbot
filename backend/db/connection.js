import {connect, disconnect} from "mongoose";


 async function connectToDatabase() {
try {
    await connect(process.env.MONGO_URI);
} catch (error) {
    throw new Error('Failed to connect to database');
}
}
async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        throw new Error('Failed to disconnect from database');
    }
}
export {connectToDatabase, disconnectFromDatabase}