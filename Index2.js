
const fs = require("fs")
const util = require('util')

const read1 = util.promisify(fs.readFile)
const r1 = read1('text1.txt')
.then(data => data.toString())
.catch(err => console.log(`Ci sono stati dei problemi nella lettura del file text1.txt:\n` + err.message))

const read2 = util.promisify(fs.readFile)
const r2 = read1('text2.txt')
.then(data => data.toString())
.catch(err => console.log(`Ci sono stati dei problemi nella lettura del file text2.txt:\n` + err.message))

const read3 = util.promisify(fs.readFile)
const r3 = read1('text3.txt')
.then(data => data.toString())
.catch(err => console.log(`Ci sono stati dei problemi nella lettura del file text3.txt:\n` + err.message))

const write = util.promisify(fs.writeFile)

Promise.all([r1, r2, r3])
.then(r => {
    let sum = ""
    r.forEach(element => {
        sum = sum + " " + element
    })
    return sum
})
.then(data => {write(`text4.txt`, data)
    .catch(err => console.log(`Ci sono stati dei problemi nella scrittura del file text4.txt:\n` + err.message))
})
