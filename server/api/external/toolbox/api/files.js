const axios = require("axios")
const baseUrl = "https://echo-serv.tbxnet.com/v1"
const authToken = "Bearer aSuperSecretKey"


// get files from external toolbox API, return a Promise
const getFiles = () => {
    const config = {
        url: `${baseUrl}/secret/files`,
        headers: {
            authorization: authToken
        },
        method: "GET",
        
    }
    return axios(config)
}

// get file data from external toolbox API, return a text if the request is good or null if the request return an error
// "some files data return errors"
const getFilesByName = async (name) => {
    const config = {
        url: `${baseUrl}/secret/file/${name}`,
        headers: {
            authorization: authToken
        },
        method: "GET",
        
    }
    try {
        const res = await axios(config)
        return res.data || null
    } catch (error) {
        return null
    }
    
}

module.exports = {
    getFiles,
    getFilesByName
} 