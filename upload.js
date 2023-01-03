const Moralis = require("moralis").default;
const fs = require("fs"); 

async function uploadToIpfs() {

    await Moralis.start({
        apiKey: "szaiOQef4xaAJhvjqrVuRSwqs28lvbB1nPX7sZUMKghL0XE5UaxTnO5soJIba1J9",
    });

    const uploadArray = [
        // {
        //     path: "cat.jpg",
        //     content: fs.readFileSync('./Cat.jpg', {encoding: 'base64'})
        // },
        // {
        //     path: "dog.jpg",
        //     content: fs.readFileSync('./dog.jpg', {encoding: 'base64'})
        // },
        {
            path: "1.jpg",
            content: fs.readFileSync('./1.jpg', {encoding: 'base64'})
        },
        {
            path: "2.jpg",
            content: fs.readFileSync('./2.jpg', {encoding: 'base64'})
        },
        {
            path: "3.jpg",
            content: fs.readFileSync('./3.jpg', {encoding: 'base64'})
        },
        {
            path: "4.jpg",
            content: fs.readFileSync('./4.jpg', {encoding: 'base64'})
        },
        {
            path: "5.jpg",
            content: fs.readFileSync('./5.jpg', {encoding: 'base64'})
        },
        {
            path: "favResturants.json",
            content: {
                one: "Red Lobster",
                two: "Chipotle", 
                three: "Chic-Fil-A"
            },
        },
    ];

    const response = await Moralis.EvmApi.ipfs.uploadFolder({
        abi: uploadArray,
    });

    console.log(response.result)
}

uploadToIpfs();



