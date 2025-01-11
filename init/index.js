const mongoose = require("mongoose");
const initdata = require("./data");
const Listing = require("../models/listing");

main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj)=>({...obj,owner:"677b6750d2effe09defc0a58"}));
    await Listing.insertMany(initdata.data);
    console.log("Data was initialize");
}

initDB();