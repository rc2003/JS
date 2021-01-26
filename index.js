const fs = require("fs")

const finalText = [null, null, null]

function readyToPrint(){
    if (!finalText[0] || !finalText[1] || !finalText[2]) {return} 

    const endFile = finalText[0] + " " + finalText[1] + " " + finalText[2] 

    fs.writeFile('finaltext.txt', endFile , function (err) {
        if (err) return console.log(err)})
    console.log ("Testo finale salvato")
    
}

    fs.readFile("./text1.txt", (err, data) => {
    if (err) throw err
    console.log ("Testo 1 caricato")
    const text1 = data.toString()
    finalText[0] = text1
    readyToPrint()
})

    fs.readFile("./text2.txt", (err, data) => {
    if (err) throw err
    console.log ("Testo 2 caricato")
    const text2 = data.toString()
    finalText[1] = text2
    readyToPrint()
})

    fs.readFile("./text3.txt", (err, data) => {
    if (err) throw err
    console.log ("Testo 3 caricato")
    const text3 = data.toString()
    finalText[2] = text3
    readyToPrint()
})
