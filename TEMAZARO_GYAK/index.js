/**
 * @type {[{telepules: string, agazat: string, pelda1: string, pelda2?: string}]}
 */

const arr = [
    {
        telepules: 'Athén',
        agazat: 'politika',
        pelda1: 'demokrácia'
    },
    {
        telepules: 'Athén',
        agazat: 'tudomany',
        pelda1: 'filozofia'
    },
    {
        telepules: 'Egyiptom',
        agazat: 'mezőgazdaság',
        pelda1: 'csatornák',
        pelda2: 'gátak'
    },
    {
        telepules: 'Spárta',
        agazat: 'neveléstudomány',
        pelda1: 'agogé'
    },
    {
        telepules: 'Spárta',
        agazat: 'harcművészet',
        pelda1: 'hoplita',
        pelda2: 'phalanx'
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
    td2.innerText = x.agazat

    const td3 = document.createElement('td')
    tr1.appendChild(td3)
    td3.innerText = x.pelda1

    if(x.pelda2){
        const tr2 = document.createElement('tr')
        tBody.appendChild(tr2)

        const td4 = document.createElement('td')
        tr2.appendChild(td4)   

        td4.innerText = x.pelda2

    }

}

