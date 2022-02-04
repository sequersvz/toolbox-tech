const { getFiles } = require("../../../external/toolbox/api/files");

// service to get file list from external toolbox API
module.exports = async (_, res) => {
    try {
        const files = (await getFiles()).data.files || []
        res.status(200).json(files)
    } catch (error) {
        console.error(error);
        res.status(400).json([])
    }
}