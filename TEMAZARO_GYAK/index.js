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

//Basic cunyok tablazathoz
const table = document.createElement('table')
const tHead = document.createElement('thead')
const trHead = document.createElement('tr')
const tBody = document.createElement('tbody')

document.body.appendChild(table)
table.appendChild(tHead)
tHead.appendChild(trHead)
table.appendChild(tBody)

//Fejlec megcsinalasa
for(const x of fejlec){
    const th = document.createElement('th')
    trHead.appendChild(th)
    th.innerText = x
}

//Tablazat tobbi reszenek megcsinalasa
for(const x of arr){
    const tr1 = document.createElement('tr')
    tBody.appendChild(tr1)

    const td1 = document.createElement('td')
    tr1.appendChild(td1)
    td1.innerText = x.telepules

    const td2 = document.createElement('td')
    tr1.appendChild(td2)
    td2.innerText = x.agazat1

    const td3 = document.createElement('td')
    tr1.appendChild(td3)
    td3.innerText = x.pelda1

    if(x.agazat2 != undefined && x.pelda2 != undefined){
        const tr2 = document.createElement('tr')
        tBody.appendChild()
    }
    

}

