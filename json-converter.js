function transformFromCsvToJson(data, divider){

    const rows = data.split(/\r?\n/);

    //1) creare una costante 'header' con la prima riga che AVRETE TOLTO a rows;
    const header = rows.shift();
    console.log(header);

    //2) creare una constante 'headerArray' splittando la stringa header sulle virgole;
    const headerArray = header.split(divider);
    console.log(headerArray);

    //3) crare un array chiamato elements (vuoto);
    const elements = [];
    console.log(elements);

    //4) ciclare sull'array rows;
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        console.log(row);

        //4a) creare una costante rowArray splittando la singola row sulle virgole;
        const rowArray = row.split(divider);
        console.log(rowArray);

        //4b) creare un oggetto vuoto chiamato element;
        const element = {};
        console.log(element);

        //4c) ciclare sull'headerArray;
        for (let j = 0; j < headerArray.length; j++) {
            const key = headerArray[j];
            console.log(key);
            const value = rowArray[j];
            const trimmedValue = value.trim(); //A3)gestire la possibilità che nel csv ci siano degli spazi non voluti 
            const convertedValue = tryParse(trimmedValue);

            //4c1) per ogni elemento dell'headerArray aggiungere una proprietà all'oggetto element
            // element[headerArray[j]] = rowArray[j];
            element[key] = convertedValue; 
            console.log(element); 
        }
        
        //4d) aggiungere element a elements
        elements.push(element);
        console.log(elements);
    }

    //5) ritornare JSON.stringify di elements
    return JSON.stringify(elements, null, 4);

    // return JSON.stringify(rows, null, 4);
 
}

function tryParse(str) { //A1)tipizzare i valori nel json
    
    // if (str === 'true' || str === 'false') {
    //     return str === 'true';
    // }
    if (str === 'true') {
        return true;
    }
    if (str === 'false') {
        return false;
    }
    const number = parseFloat(str);
    console.log(number);
    if (isNaN(number)) {
        return str;
    } else {
        return number;
    }
}

// module.exports = {transform: transformFromCsvToJson, parse: tryParse}
module.exports = transformFromCsvToJson;