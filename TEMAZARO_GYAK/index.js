/**
 * @type {{telepules: string, agazat1: string, pelda1: string, agazat2?: string pelda2?: string}[]}
 */

const arr = [
    {
        telepules: 'Athén',
        agazat1: 'politika',
        pelda1: 'demokrácia',
        agazat2: 'tudomany',
        pelda2: 'filozófia'
    },
    {
        telepules: 'Egyiptom',
        agazat1: 'mezőgazdaság',
        pelda1: 'csatornák',
    },
    {
        telepules: 'Spárta',
        agazat1: 'neveléstudomány',
        pelda1: 'agogé',
        agazat2: 'harcászat',
        pelda2: 'hoplita'
    }
]

//Fejlec megcsinalasahoz kulon tomb a fejlec adataival
const fejlec = ['Ókori település', 'Ágazat', 'Példa']

/**
 * 
 * @param {HTMLElement} parent 
 * @param {string} text 
 * @param {'td' | 'tr'} celltype 
 */
function createCell(parent, text, celltype){
    const cell = document.createElement(celltype)
    parent.appendChild(cell)
    cell.innerText = text

    return cell
}

/**
 * 
 * @param {HTMLElement} tHead 
 * @param {string[]} fejlec 
 */
function createHeader(tHead, fejlec){
    const tr = document.createElement('tr')
    tHead.appendChild(tr)

    for (const x of fejlec){
        createCell(tr, x, 'th')
    }
}

/**
 * 
 * @param {HTMLTableElement} tBody 
 * @param {string} data 
 */
function createRows(tBody, data){
    const tr1 = document.createElement('tr')
    tBody.appendChild(tr1)

    //Elso 3 adat 1 sorban
    const td1 = createCell(tr1, data.telepules, 'td')
    createCell(tr1, data.agazat1, 'td')
    createCell(tr1, data.pelda1, 'td')

    //Agazatos
    if(data.agazat2 !== undefined && data.pelda2 !== undefined){
        td1.rowSpan = '2'

        const tr2 = document.createElement('tr')
        tBody.appendChild(tr2)

        createCell(tr2, data.agazat2, 'td')
        createCell(tr2, data.pelda2, 'td')
    }

}

/**
 * 
 * @param {string[]} arr 
 * @param {string[]} fejlec 
 * @returns {HTMLTableElement}
 */
function renderTable(arr, fejlec){
    //Basic cunyok tablazathoz
    const table = document.createElement('table')
    const tHead = document.createElement('thead')
    const tBody = document.createElement('tbody')

    table.appendChild(tHead)
    table.appendChild(tBody)

    createHeader(tHead, fejlec)

    for(const x of arr){
        createRows(tBody, x)
    }

    return table
}

const jsTable = document.body.appendChild(renderTable(arr, fejlec))




//CHECKBOX 
const jsDiv = document.createElement('div')
jsDiv.id = 'jssection'
jsDiv.classList.add('hide')
document.body.appendChild(jsDiv)

const checkbox = document.getElementById('tableselector')

const htmlDiv = document.getElementById('htmlsection')

/**
 * 
 * @param {HTMLElement} checkbox 
 * @returns {void}
 */
function checkBoxUpdate(checkbox){
    if(checkbox.checked){
        htmlDiv.classList.add('hide')
        jsDiv.classList.remove('hide')
    }
    else{
        htmlDiv.classList.remove('hide')
        jsDiv.classList.add('hide')
    }
}
checkBoxUpdate(checkbox)

checkbox.addEventListener('change', function(){
    checkBoxUpdate(checkbox)

})

jsDiv.appendChild(jsTable)
    


