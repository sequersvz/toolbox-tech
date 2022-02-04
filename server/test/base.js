const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const baseUrl = "https://echo-serv.tbxnet.com/v1"
const authToken = "Bearer aSuperSecretKey"

const baseRequestTest = (path, method, callback) => {
    return chai
    .request(baseUrl)
    [method](path)
    .set('authorization', authToken)
    .then((res) => {
        expect(res.text).to.be.string;
        if(callback) {
            callback(res)
        }

        if(res.statusCode !== 200) {
            return undefined
        }
        return res
    })
    .catch((err) => {
        console.log(err);
        return ""
    })
}


module.exports = {
    baseRequestTest
}