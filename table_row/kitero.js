//Hf.:

/**
 * @type {CountryWriters[]}
 */
const arr =[
    {
        nation: 'Orosz',
        writer1: 'Gogol',
        work1: 'A köpönyeg',
        writer2: 'Csehov',
        work2: 'A csinovnyik halála'
    },
    {
        nation: 'Cseh',
        writer1: 'Franz Kafka',
        work1: 'Az átváltozás'
    },
    {
        nation: 'Magyar',
        writer1: 'Örkény István',
        work1: 'Egyperces Novellák',
        writer2: 'József Attila',
        work2: 'Klárisok'
    },
    {
        nation: 'Svájc',
        writer1: 'Friedrich Dürrenmatt',
        work1: 'A fizikusok'
    }
]

const formArray=[
    {
        label: "Nemzetiség:",
        input: "nemzetiseg",
    },
    {
        label: "Szerző1:",
        input: "szerzo1",
    },
    {
        label: "Mű:",
        input: "mu1",
    },
    {
        label: "Szerző2:",
        input: "szerzo2",
    },
    {
        label: "Mű:",
        input: "mu2",
    },
]

generateTable('created' ,["Nemzetiseg","Szerzo","Mű"])
renderTableBody(arr)
    


/**
 * @type {HTMLFormElement}
 */
const htmlform = document.getElementById('htmlform')

/**
 * @type {HTMLFormElement}
 */
const jsform = jsformRender('jsform', formArray)

jsform.addEventListener('submit', function(e) {
    e.preventDefault()
    /**
     * @type {CountryWriters}
     */
    const obj = {}

    /**
     * @type {HTMLFormElement}
     */
    const target = e.target
    
    /**
     * @type {HTMLInputElement}
     */
    const nemzetiseg = target.querySelector('#nemzetiseg')
    const szerzo1 = target.querySelector('#szerzo1')
    const mu1 = target.querySelector('#mu1')
    const szerzo2 = target.querySelector('#szerzo2')
    const mu2 = target.querySelector('#mu2')

    if(validateFields(nemzetiseg, szerzo1, mu1)) {
        obj.nation = nemzetiseg.value;
        obj.writer1 = szerzo1.value;
        obj.work1 = mu1.value;
        obj.writer2 = szerzo2.value;
        obj.work2 = mu2.value;

        arr.push(obj);
        renderTableBody(arr);
    }
})


/** 
* @param {HTMLElement} parent 
*/
function br(parent) {
    parent.appendChild(document.createElement('br'));
}

/**
 * @param {HTMLFormElement} form
 * @param {string} labelszov
 * @param {string} id
 */
function createFormElement(form, labelszov, id) {
    const div = document.createElement('div')
    form.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor = id
    label.innerText = labelszov
    div.appendChild(label)
    br(div)

    const input = document.createElement('input')
    input.type = "text"
    input.id = id
    input.name = id
    div.appendChild(input)

    br(div)

    const span = document.createElement('span');
    span.classList.add('error')
    div.appendChild(span)
    br(div)
}

/**
 * @param {"td"|"th"} celltype
 * @param {string} content
 * @param {HTMLTableRowElement} row
 */
function createTableCell(celltype, content, row) {
    const cell = document.createElement(celltype);
    cell.innerText = content;
    row.appendChild(cell);

    return cell;
}


/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow
 */

function renderTableRow(tablebody, writerRow) {
    const tr = document.createElement('tr')
    tablebody.appendChild(tr)

    const tdN = createTableCell("td", writerRow.nemzet, tr);

    tdN.addEventListener('click', function(e) {
        const target = e.target
        target.classList.add('marked')
        const tbody = target.closest('tbody');
        const marked = tbody.querySelector('.marked');
        if(marked){
            marked.classList.remove('marked');
        } 
        target.classList.add('marked');
    });

    createTableCell("td", writerRow.szerzo, tr)
    createTableCell("td", writerRow.mu, tr)

    if(writerRow.szerzo2 && writerRow.mu2) {
        tdN.rowSpan = 2
        const tr2 = document.createElement('tr')
        tablebody.appendChild(tr2)
        createTableCell("td", writerRow.szerzo2, tr2)
        createTableCell("td", writerRow.mu2, tr2)
    }
}

/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow 
 */

function renderTableRow(tablebody, writerRow){
        const tr1 = document.createElement('tr')
        tablebody.appendChild(tr1)

        const td1 = document.createElement('td')
        tr1.appendChild(td1)
        td1.innerText = writerRow.nation
        td1.addEventListener('click', 
            function (e){
                /**
                 * @type {HTMLTableCellElement} 
                 */
                const target = e.target //Td amire rakattintok
                const tr = target.parentElement
                const tbody = tr.parentElement
                const kijelol = tbody.querySelector('.marked')
                
                if (kijelol) {
                    kijelol.classList.remove('marked')
                }
                target.classList.add('marked')
                
            }
        )


        const td2 = createTableCell('td', writerRow.writer1, tr1)
        const td3 = createTableCell('td', writerRow.work1, tr1)

        if(writerRow.writer2 != "" && writerRow.work2 != ""){
            td1.rowSpan = '2'
            const tr2 = document.createElement('tr')
            tablebody.appendChild(tr2)
            const td4 = createTableCell('td', writerRow.writer2, tr2)
            const td5 = createTableCell('td', writerRow.work2, tr2)

        }

    }

/**
 * 
 * @param {"th" | "td"} celltype 
 * @param {string} cellcontent 
 * @param {HTMLTableRowElement} parent 
 */

function createTableCell(celltype, cellcontent, parent){

    const cell = document.createElement(celltype) //Cella létrehozása
    parent.appendChild(cell) //Hozzáadjuk
    cell.innerText = cellcontent //Contentet beállítjuk 

    return cell
}

/**
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow
 */

function renderTableRow(tablebody, writerRow) {
    const tr = document.createElement('tr')
    tablebody.appendChild(tr)

    const tdN = createTableCell("td", writerRow.nemzet, tr)

    tdN.addEventListener('click', function(e) {
        const target = e.target
        target.classList.add('marked')
    });

    createTableCell("td", writerRow.szerzo, tr)
    createTableCell("td", writerRow.mu, tr)

    if(writerRow.szerzo2 && writerRow.mu2) {
        tdN.rowSpan = 2
        const tr2 = document.createElement('tr')
        tablebody.appendChild(tr2)
        createTableCell("td", writerRow.szerzo2, tr2)
        createTableCell("td", writerRow.mu2, tr2)
    }
}

/**
 * @param {CountryWriters[]} gyujtemeny
*/

function renderTableBody(gyujtemeny) {
    const tbody = document.getElementById('created')
    tbody.innerHTML = ''
    for(const x of gyujtemeny) {
        renderTableRow(tbody, x)
    }
}

/**
 * @param {HTMLTableElement} table
 * @param {string[]} headerlist
 */

function generetHeader(table, headerlist) {
    const thead = document.createElement('thead');
    table.appendChild(thead);

    const trHead = document.createElement("tr");
    thead.appendChild(trHead);

    for(const x of headerlist) {
        createTableCell("th", x, trHead);
    }
}

function addToHtmlTable(e) {
    e.preventDefault();
    const target = e.target;
    const nemzetiseg = target.querySelector('#nemzetiseg')
    const szerzo1 = target.querySelector('#szerzo1')
    const mu1 = target.querySelector('#mu1')
    const szerzo2 = target.querySelector('#szerzo2')
    const mu2 = target.querySelector('#mu2')

    if(validateFields(nemzetiseg, szerzo1, mu1)){
        const obj = {
            nemzet: nemzetiseg.value,
            szerzo: szerzo1.value,
            mu: mu1.value,
            szerzo2: szerzo2.value,
            mu2: mu2.value
        };

        const tbody = document.getElementById('alap');
        renderTableRow(tbody, obj);
    }
}

/**
 * @param {HTMLInputElement} input1
 * @param {HTMLInputElement} input2
 * @param {HTMLInputElement} input3
 * @returns {boolean}
 */

function validateFields(input1, input2, input3) {
    let valid = true;
    if(!validateField(input1, "kötelező")) valid = false
    if(!validateField(input2, "kötelező")) valid = false
    if(!validateField(input3, "kötelező")) valid = false
    return valid;
}

/**
 * @param {string} id
 * @returns {HTMLFormElement}
 */

function jsformRender(id, mezok) {
    const jsform = document.createElement('form')
    jsform.id = id
    document.body.appendChild(jsform)

    for(const x of mezok) {
        createFormElement(jsform, x.label, x.input)
    }

    const button = document.createElement('button')
    button.innerText = 'Hozzáadás'
    jsform.appendChild(button)

    return jsform;
}

/**
 * @param {string} tbodyId
 * @param {string[]} fejleclist
 */

function generateTable(tbodyId, fejleclist) {
    const table = document.createElement('table')
    document.body.appendChild(table)

    generetHeader(table, fejleclist)

    const tbody = document.createElement('tbody')
    tbody.id = tbodyId
    table.appendChild(tbody)
}

/**
 * @param {HTMLInputElement} input
 * @param {string} hibaUzenet
 * @returns {boolean}
 */
function validateField(input, hibaUzenet) {
    let valid = true
    if(input.value === '') {
        const errorSpan = input.parentElement.querySelector('.error')
        errorSpan.innerText = hibaUzenet
        valid = false
    }
    return valid
}


