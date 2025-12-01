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

const formArray=[
    {
        label: "Település:",
        input: "telepules",
    },
    {
        label: "Ágazat1:",
        input: "agazat1",
    },
    {
        label: "Példa1:",
        input: "pelda1",
    },
    {
        label: "Ágazat2:",
        input: "agazat2",
    },
    {
        label: "Példa2",
        input: "pelda2",
    },
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
 * @returns {void}
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

function brOwn(){
    const br = document.createElement('br')
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

const jsTable = renderTable(arr, fejlec)





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
    
function addToHtmlTable(e){
    e.preventDefault()

    const target = e.target

    const telepules = target.querySelector('#elso')
    const agazat1 = target.querySelector('#masodik')
    const pelda1 = target.querySelector('#harmadik')
    const agazat2 = target.querySelector('#negyedik')
    const pelda2 = target.querySelector('#otodik')

    const obj = {
        telepules: telepules.value,
        agazat1: agazat1.value,
        pelda1: pelda1.value,
        agazat2: agazat2.value,
        pelda2: pelda2.value
    }
    const tbody = document.getElementById('htmltablebody')
    renderTableRow(tbody, obj)
}

function createFormElement(form, id, labeltext){
    const div = document.createElement('div')
    form.appendChild(div)

    const label = document.createElement('label')
    label.htmlFor = id
    label.innerText = labeltext
    div.appendChild(label)

    const input = document.createElement('input')
    input.type = 'text'
    input.id = id
    input.name = id
    div.appendChild(input)

    const span = document.createElement('span');
    span.classList.add('error')
    div.appendChild(span)

}

function renderTableRow(tablebody, telepulesRow){
    const tr1 = document.createElement('tr')
    tablebody.appendChild(tr1)
    const td1 = createCell(tr1, telepulesRow.telepules, 'td')

    td1.addEventListener('click',
        function(e){
            const target = e.target
            const tr = target.parentElement
            const tbody = tr.parentElement
            const kijelol = tbody.querySelector('.marked')

            if(kijelol){
                kijelol.classList.remove('marked')
            }
            target.classList.add('marked')
        }
    )

    createCell(tr1, telepulesRow.agazat1, 'td')
    createCell(tr1, telepulesRow.pelda1, 'td')

    if(telepulesRow.agazat2 !== undefined && telepulesRow.pelda2 !== undefined){
        td1.rowSpan = 2
        

        const tr2 = document.createElement('tr')
        tablebody.appendChild(tr2)

        createCell(tr2, telepulesRow.agazat2, 'td')
        createCell(tr2, telepulesRow.pelda2, 'td')
    }
}

const htmlForm = document.getElementById('htmlform')

htmlForm.addEventListener('submit', addToHtmlTable)


function jsFormCreate(id, mezok){
    const jsForm = document.createElement('form')
    jsForm.id = id
    jsDiv.appendChild(jsForm)

    for(const x of mezok){
        createFormElement(jsForm, x.input, x.label)
        
    }

    const button = document.createElement('button')
    jsForm.appendChild(button)

    return jsForm
}

jsDiv.appendChild(jsTable)    
jsFormCreate('jsform', formArray)



