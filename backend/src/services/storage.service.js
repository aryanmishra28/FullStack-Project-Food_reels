const ImageKit = require("imagekit");
require("dotenv").config();

const imagekit = new ImageKit({
    publicKey : process.env.IMAGE_PUBLIC_KEY,
    privateKey : process.env.IMAGE_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGE_URL_ENDPOINT
});


async function uploadFile(file, fileName){
    const result = await imagekit.upload({
        file : file, //required
        fileName : fileName,   //required
    });
    return result;

}

module.exports={
    uploadFile
}