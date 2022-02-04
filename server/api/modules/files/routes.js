// route file for module "files"

const getFileList = require("./services/getFileList")
const getFilesData = require("./services/getFilesData")

module.exports = (router) => {
    router.get("/files/data", getFilesData)
    router.get("/files/list", getFileList)

    return router
}