const nullifyValues = [null, undefined, "null", "undefined"]

const textVerification = (header, textToVerify) => {
    const headers = {
        // number: its a string that can be converted to number
        number: () => { 
            if(nullifyValues.includes(textToVerify)) return false
            const one = Number(textToVerify)
            const two = isNaN(one)
            return !two // true is valid number, false is not valid number
        },
        // text: should exist and it can't be empty
        text: () => !!textToVerify.length,
        // hex: hexadecimal string with a length of 32
        hex: () => textToVerify.length === 32
    }

    return header in headers ? headers[header]() : false
}

module.exports = {
    nullifyValues,
    textVerification
}