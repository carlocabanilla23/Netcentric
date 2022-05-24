const fs = require("fs");

async function ReadData(){
    try{
        // Make sure the file exists
        await fs.promises.access("./listdata.json",fs.constants.R_OK | fs.constants.F_OK);
        // Read the file
        const dataIn = await fs.promises.readFile("./listdata.json","utf8");
        // Conver the buffer to a json object and return it.
        return JSON.parse(dataIn);
    } catch (error){
        return;
    }
}

async function WriteData(){

}

exports.ReadData = ReadData;
exports.WriteData = WriteData;