import mongoose from 'mongoose';

export const dbConnect=()=>{
   /* const connectionParams={useNewUrlParser:true};
    mongoose.connect(process.env.DB_URL,connectionParams);

    mongoose.connection.on("connected",()=>{
        console.log("Connected to database successfully");
    })
    mongoose.connection.on("error",(err)=>{
        console.log("Error while connection to database:"+err);
    })
    mongoose.connection.on("disconnected",(err)=>{
        console.log("Mongodb disconnected");
    })*/
    mongoose.set('strictQuery', true)
    mongoose
        .connect(process.env.DB_URL)
        .then(() => {
            console.log('connected to mongodb')
        })
        .catch(() => {
            console.log('error mongodb')
        })
}

