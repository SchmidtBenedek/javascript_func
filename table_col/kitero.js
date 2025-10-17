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

const th1 = document.createElement("th")
th1.innerText = "Szerző neve"
const th2 = document.createElement("th")
th2.innerText = "Korszak"
const th3 = document.createElement("th")
th3.innerText = "Szerelmek"
th3.colSpan = 2

tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

const tbody = document.createElement("tbody")
table.appendChild(tbody)

for (const x of arr) {
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    td1.innerText = x.poet
    tr.appendChild(td1)

    const td2 = document.createElement("td")
    td2.innerText = x.time
    tr.appendChild(td2)

    const td3 = document.createElement("td")
    td3.innerText = x.love1
    tr.appendChild(td3)

    if (x.love2 === undefined) {
        td3.colSpan = 2
    } 
    else {

        const td4 = document.createElement("td")
        td4.innerText = x.love2
        tr.appendChild(td4)
    }
}

/**
 * 
 * @param {string} cellType - Cella típusa
 * @param {string} cellContent - Tartalma
 * @param {HTMLTableRowElement} parentRow
 * @returns {HTMLTableCellElement}
 */

function createCell(cellType, cellContent, parentRow){
    const cell = document.createElement(cellType) //Cella létrehozása
    parentRow.appendChild(cell) //Hozzáadjuk
    cell.innerText = cellContent //Contentet beállítjuk 

    return cell
}
