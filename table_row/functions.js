/**
 * @typedef {{nation: string, writer1: string, work1: string, writer2?: string, work2?: string}} CountryWriters
 */

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
 * @param {HTMLTableSectionElement} tablebody
 * @param {CountryWriters} writerRow 
 */

function renderTableRow(tablebody, writerRow){
        const tr1 = document.createElement('tr')
        tablebody.appendChild(tr1);
        const td1 = createTableCell('td', writerRow.nation, tr1)
  
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


        createTableCell('td', writerRow.writer1, tr1)
        createTableCell('td', writerRow.work1, tr1)

        if(writerRow.writer2  && writerRow.work2 ){
            td1.rowSpan = '2'
            const tr2 = document.createElement('tr')
            tablebody.appendChild(tr2);
            createTableCell('td', writerRow.writer2, tr2)
            createTableCell('td', writerRow.work2, tr2)

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

    const nemzetiseg = target.querySelector('#nemzetiseg');
    const szerzo1 = target.querySelector('#szerzo1');
    const mu1 = target.querySelector('#mu1');
    const szerzo2 = target.querySelector('#szerzo2');
    const mu2 = target.querySelector('#mu2');

        const obj = {
            nation: nemzetiseg.value,
            writer1: szerzo1.value,
            work1: mu1.value,
            writer2: szerzo2.value,
            work2: mu2.value
        };

        const tbody = document.getElementById('valami');
        renderTableRow(tbody, obj);
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
