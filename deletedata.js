const dbConnect = require("./mongodb");
const deletedata = async () => {
    let db = await dbConnect();
    const result = await db.deleteOne({Name: 'Deepu-1'});
    console.log(result);
    if(result.acknowledged) {
        console.log("Data Deleted Successfully");
    } else {
        console.log("Error found!")
    }
}
deletedata();