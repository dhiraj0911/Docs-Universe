require('dotenv').config();

const IPFS = require('ipfs-api');

const projectId = "2PGfyuOFHN2WvcmenzYdipJ7LrY";
const projectSecret = "1f5798a2398f8ac8e2c9e465a5abe053";

const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

//const ipfs = new IPFS({host: 'localhost', port: 5001, protocol: 'http'});
//const ipfs = create('https://ipfs.infura.io:5001/api/v0')
// const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
const ipfs = new IPFS({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export default ipfs;