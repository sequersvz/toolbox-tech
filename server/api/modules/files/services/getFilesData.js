const {
    getFiles,
    getFilesByName
} = require("../../../external/toolbox/api/files")
const {
    nullifyValues, textVerification
} = require("../../../utils/index")
const headersToRemove = ["file"]
const queries = {
    "fileName": (queryValue, data) => {
        return data.filter((name) => name === queryValue)
    }
}

// service to get files data and process it

// it supports get file by name using query: "fileName"
module.exports = async (req, res) => {
    try {
        const {
            query
        } = req
        const files = (await getFiles()).data.files || [];
        const filesProcessed = "fileName" in query ? queries.fileName(query.fileName, files) : files;
        const filesToGet = filesProcessed.map((name) => getFilesByName(name));
        const filesFetched = await Promise.all(filesToGet);
       
        const filesFormatted = [];

        for (const [i, fileFetchValue] of filesFetched.entries()) {
            // conditional to know if a file data response is an error
            if (nullifyValues.includes(fileFetchValue)) continue;

            const name = filesProcessed[i];
            const itemsArray = [];
            const valueSplitted = fileFetchValue.split("\n");

            const [header, rows] = [valueSplitted[0], valueSplitted.slice(1)];
            const headersSplitted = header.split(",");

                for (const column of rows) {
                    const textSplitted = column
                    .split(",")
                    .slice(0, headersSplitted.length)

                    // conditional to skip data where the length of text and headers are not the same
                    if(textSplitted.length !== headersSplitted.length) continue;

                    itemsArray.push(
                        textSplitted.map(
                            (text, i) => 
                            !headersToRemove.includes(headersSplitted[i]) && 
                            textVerification(headersSplitted[i], text) 
                            ? [headersSplitted[i], text] : []
                            )
                    );
                }


           const lines = [];

           itemsArray.forEach((itemArray) => {
               lines.push(Object.fromEntries(itemArray));
            });
            filesFormatted.push({file: name,lines});
        };

        res.status(200).json(filesFormatted);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({});
    };
};