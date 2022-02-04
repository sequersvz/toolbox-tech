const chai = require("chai");
const expect = chai.expect;
const { baseRequestTest } = require("./base")

let files

before(function(done) {
    baseRequestTest("/secret/files", "get", (res) => {
        expect(res.body).to.have.property("files")
        files = res.body.files
        done()
    })
});

beforeEach(function() {
    expect(files).to.not.be.undefined
});

describe("Get List of Files", () => { 
    it("Expect files to be an array of strings", () => {
       expect(files).to.be.an('array')
       files.forEach((file) => {
           expect(file).to.have.string(".csv")
       })
    })
})

describe("Get File" , () => {
    const filesValue = {}

    before(async function() {
        const promise = files.map((file) => baseRequestTest(`/secret/file/${file}`, "get"))

        const filesRes = await Promise.all(promise)
        filesRes.forEach((file, i) => {
            if (![undefined, null].includes(file)) {
                expect(file.text).to.be.string
                filesValue[files[i]] = file.text
            }
        })

    })

    it("Expect file to be in Files and Headers be the same", () => {
        Object.keys(filesValue).forEach((file) => {
            expect(file).to.include(file)
            expect(filesValue[file]).to.have.string("file,text,number,hex")
        })
    })

    it("should remove empty files", (done) => {
        Object.keys(filesValue).forEach((file) => {
            const splitted = filesValue[file].split("\n")
            const headers = splitted[0]
            if(headers.length <= 1) {
                delete filesValue[file]
            }
        })
        done()
    })
})