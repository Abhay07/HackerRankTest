const { fakeServer } = require("sinon");
const fs = require("fs");

const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';

module.exports = function (req, res, next) {
    const header = req.headers['x-api-key'];
    fs.readFile(VALID_KEYS_PATH,'utf8',function(err,data){
        console.log(data);
        if(data.includes(header)){
            console.log('valid')
            next()
        }
        else{
            console.log('invalid')
            res.sendStatus(401);
        }
    })
};
