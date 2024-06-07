const dbConnect = require("./mongodb");
const insert = async () => {
    let db = await dbConnect();
    const result = await db.insertOne({
        Name: 'Deepu-1',
        Address: 'Rajapur',
        age: 11
    });
    if(result.acknowledged) {
        console.log("Data Inserted Successfully");
    } else {
        console.log("Error found!")
    }
}
insert();