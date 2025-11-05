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


//----
//Hf:

/**
 * @returns {void}
 */
function brOwn(){
    const br = document.createElement("br")
    form.appendChild(br)
}

/**
 * @param {string} labelText - A label tartlama
 * @param {string} inputIdName 
 * @returns {HTMLElement}
 */

function createLabelAndInput(labelText, inputIdName){
    const label = document.createElement("label");
    label.innerText = labelText;
    label.htmlFor = inputIdName;
    form.appendChild(label);

    brOwn()

    const input = document.createElement("input");
    input.type = "text";
    input.id = inputIdName;
    input.name = inputIdName;
    form.appendChild(input);

    brOwn()
    brOwn()

    return input
}

const form = document.createElement("form");
form.id = "form_js";
document.body.appendChild(form)
brOwn()

const h2 = document.createElement("h2");
h2.innerText = "Javascript űrlap"
form.appendChild(h2)

const input1 = createLabelAndInput("Költő neve:", "kolto_nev");
const input2 = createLabelAndInput("Korszak:", "korszak");
const input3 = createLabelAndInput("Szerelme:", "szerelem1");


/*


const label1 = document.createElement("label")
label1.innerText = "Költő neve: "
label1.htmlFor = "kolto_nev"
form.appendChild(label1)
brOwn()

const input1 = document.createElement("input")
input1.type = "text"
input1.id = "kolto_nev"
input1.name = "kolto_nev"
form.appendChild(input1)
brOwn()
brOwn()


const label2 = document.createElement("label");
label2.innerText = "Korszak:";
label2.htmlFor = "korszak";
form.appendChild(label2)
brOwn()

const input2 = document.createElement("input");
input2.type = "text";
input2.id = "korszak";
input2.name = "korszak";
form.appendChild(input2);
brOwn()
brOwn()


const label3 = document.createElement("label");
label3.innerText = "Szerelme:";
label3.htmlFor = "szerelem1";
form.appendChild(label3);
brOwn()

const input3 = document.createElement("input");
input3.type = "text";
input3.id = "szerelem1";
input3.name = "szerelem1";
form.appendChild(input3);
brOwn()
brOwn()

const button = document.createElement("button")
button.innerText = "Hozzáadás"
form.appendChild(button)
*/