/**
 * @typedef {{nation: string, writer1: string, work1: string, writer2: string?, work2?: string}} CountryWriters
 */

/**
 * @type {CountryWriters[]}
 */
const dataArr = []

/**
 * 
 * @param {CountryWriters[]} arr
 */
function renderTableBody(arr){
    tbody.id = 'tablebody'
    const tableBody = document.getElementById('tablebody')
    tableBody.innerHTML = ''
    

    for(const obj of arr){
       renderTableRow(tableBody, obj)
        }    
    }





/**
 * @type {HTMLFormElement}
 */

const htmlForm = document.getElementById('htmlform')

htmlForm.addEventListener('submit', htmlEventListener)
renderTableBody(dataArr)

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
 * @param {HTMLTableElement} table 
 * @param {string[]} headerlist 
 */
function generateHeader(table, headerlist){
    const thead = document.createElement('thead')
    table.appendChild(thead)
    const tr = document.createElement('tr')
    thead.appendChild(tr)

    for (const x of headerlist){
        const th = createTableCell('th', x, tr)

    }
}

/**
 * @param {Event} e 
 */
function htmlEventListener(e){
    e.preventDefault() //- nem küldi el a get kerest a szerver fele
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
    /**
     * @type {string}
     */
    const nemzetisegValue = nemzetiseg.value
    const szerzo1Value = szerzo1.value
    const mu1Value = mu1.value
    const szerzo2Value = szerzo2.value
    const mu2Value = mu2.value
    /** 
     * @type {CountryWriters}
    */
    const obj = {}
    obj.nation = nemzetisegValue
    obj.writer1 = szerzo1Value
    obj.work1 = mu1Value
    obj.writer2 = szerzo2Value
    obj.work2 = mu2Value

    dataArr.push(obj)
    renderTableBody(dataArr)
}

//javascript form os reszt bepotolni, a validaciohoz szukseges