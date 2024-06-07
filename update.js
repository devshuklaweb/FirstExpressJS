const dbConnect = require("./mongodb");
const insert = async () => {
    let db = await dbConnect();
    const result = await db.updateOne(
        {Name: 'Deepu-1'},//first block is for condition
        { $set: { Address: 'Rajapur Alld2', age: 13 } }//second for column where you update data
    );
    console.log(result);
    if(result.acknowledged) {
        console.log("Data Updated Successfully");
    } else {
        console.log("Error found!")
    }
}
insert();