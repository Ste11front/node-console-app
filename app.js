const fs = require("fs");

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl)

if (data) {

    const result = transFormData(data)

    writeData(outputUrl, result);
}


function readFile(url){
    try {
        const data = fs.readFileSync(url, "utf8");
        return data;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}


function writeData(url, data){
    try {
        fs.writeFileSync(url, data);
    } catch (err) {
        console.error(err.message);
    }
}

function transFormData(data){

    const rows = data.split(/\r?\n/);

    //1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows;
    //2) create una constante 'headerArray' splittando la stringa header sulle virgole;
    //3) crate un array chiamato students (vuoto);
    //4) ciclate sull'array rows;
        //4a) create una costante rowArray splittando la singola row sulle virgole;
        //4b) create un oggetto vuoto chiamato student;
        //4c) ciclate sull'headerArray;
            //4c1) per ogni elemento dell'headerArray aggiungo una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j];
        //4d) aggiungo student a students
    //5) ritorno JSON.stringify di students


    //A1)tipizzare i valori nel json
    //A2)aggiungere un parametro alla applicazione che mi permette di indicare il carattere divisorio
    //A3)gestire la possibilità che nel csv ci siano degli spazi non voluti 

    
    return JSON.stringify(rows);


}

// Esercizio

// const fs = require("fs");

// const inputUrl = process.argv[2];
// const outputUrl = process.argv[3];

// let data = readFile(inputUrl)

// if (data) {

//     const result = transFormData(data)

//     writeData(outputUrl, result);
// }


// function readFile(url){
//     try {
//         const data = fs.readFileSync(url, "utf8");
//         return data;
//     } catch (err) {
//         console.error(err.message);
//         return null;
//     }
// }


// function writeData(url, data){
//     try {
//         fs.writeFileSync(url, data);
//     } catch (err) {
//         console.error(err.message);
//     }
// }

// function transFormData(data){

//     const rows = data.split(/\r?\n/);

//     //1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows;
//     const header = rows.shift();
    
//     //2) create una constante 'headerArray' splittando la stringa header sulle virgole;
//     const headerArray = header.split(",");

//     //3) crate un array chiamato students (vuoto);
//     const students = [];

//     //4) ciclate sull'array rows;
//     for (let i = 0; i < rows.length; i++) {
//         //4a) create una costante rowArray splittando la singola row sulle virgole;
//         const rowArray = rows[i].split(",");

//         //4b) create un oggetto vuoto chiamato student;
//         const student = {};

//         //4c) ciclate sull'headerArray;
//         for (let j = 0; j < headerArray.length; j++) {
//             //4c1) per ogni elemento dell'headerArray aggiungo una proprietà all'oggetto student
//             // student[headerArray[j]] = rowArray[j];
//             student[headerArray[j]] = rowArray[j];
//         }

//         //4d) aggiungo student a students
//         students.push(student);
//     }

//     //5) ritorno JSON.stringify di students
//     return JSON.stringify(students);


// }