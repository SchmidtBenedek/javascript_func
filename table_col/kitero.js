console.log("Szia");
/**
 * @type {string}
 */
const konstans = "szia";

const tomb = ["elso", "masodik", "harmadik"]

for( let i = 0; i < tomb.length; i++ ){
    console.log(tomb[i])
}
console.log(tomb[1])

for(const a of tomb){
    console.log(a)
}

for(const key in tomb){
    console.log(`${key} : ${tomb[key]}`)
}

/**
 * @type {{name: string, age: number}}
 */

const y = {
    name : "nev",
    age : 24
}

for(const key in y){
    console.log(y[key])
}


//Hf resz:
/**
 * @type {{poet: string, time: string, love1: string, love2?: string}[]}
 */
const arr = [
    {
        poet: 'Balassi Bálint',
        time: 'reformáció',
        love1: 'Losonczy Anna',
        love2: 'Dobó Krisztina'
    },
    {
        poet: 'Csokonai Vitéz Mihály',
        time: 'felvilágosodás',
        love1: 'Vajda Juliána'
    },
    {
        poet: 'Petőfi Sándor',
        time: 'magyar romantika',
        love1: 'Mednyánszky Berta',
        love2: 'Szendrey Júlia'
    },
    {
        poet: 'Ady Endre',
        time: '20. század',
        love1: 'Léda',
        love2: 'Csinszka'
    }
]

const table = document.createElement("table")
document.body.appendChild(table)
const thead = document.createElement("thead")
table.appendChild(thead)
const tr = document.createElement("tr")
thead.appendChild(tr)


createCell('th', "Szerző neve", tr)
createCell('th', "Korszak", tr)
const th3 = createCell('th', "Szerelmek", tr)
th3.colSpan = 2

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const x of arr) {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    createCell('td', x.poet, tr)
    createCell('td', x.time, tr)
    const td3 = createCell('td', x.love1, tr)


    if (x.love2 === undefined) {
        td3.colSpan = 2
    } 
    else {
        createCell('td', x.love2, tr)
    }
}


/**
 * 
 * @param {string} cellType - Cella típusa
 * @param {string} cellContent - Tartalma
 * @param {HTMLTableRowElement} parentRow
 * @returns {HTMLTableCellElement} - Visszatérünk egy létrehozott cellaelmenttel, hogy tudjuk változtatni a tulajdonságait
 */

function createCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType) //Cella létrehozása
    parentRow.appendChild(cell) //Hozzáadjuk
    cell.innerText = cellContent //Contentet beállítjuk 

    return cell
}

