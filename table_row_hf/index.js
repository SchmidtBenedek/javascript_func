/**
 * @type {{war: string, team1: string, team1Size: string, team2: string, team2Size: string? }[]}
 */

const arr = [
    {
        war: 'Rákóczi szabadságharc',
        team1: 'Kuruc',
        team1Size: '70.000',
        team2: 'Labanc',
        team2Size: '60.000',
    },
    {
        war: '48-as szabadságharc',
        team1: 'Osztrák császárság (+ Orosz birodalom)',
        team1Size: '170.000 (+ 200.000)',
        team2: 'Magyar királyság',
        team2Size: '170.000',
    },
    {
        war: 'I. világháború',
        team1: 'Antant',
        team1Size: '43 millió',
        team2: 'Központi hatalmak',
        team2Size: '25 millió',
    },
    {
        war: 'Bosworthi csata',
        team1: 'Angolok (York + Lancester)',
        team1Size: '15.000',
    }
]

const fejlec = ['Harc megnevezése', 'Szembenálló felek', 'Haderő']

const table = document.createElement("table")
const thead = document.createElement('thead')
const tr = document.createElement('tr')
const tbody = document.createElement('tbody')

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
table.appendChild(tbody)

for(const x of fejlec){
    const th = document.createElement('th')
    tr.appendChild(th)
    th.innerText = x
}

for(const x of arr){
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    
    const td1 = document.createElement('td')
    tr.appendChild(td1)
    td1.innerText = x.war

    td1.rowSpan = 2
    const td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.innerText = x.team1

    const td3 = document.createElement('td')
    tr.appendChild(td3)
    td3.innerText = x.team1Size
    
    if (x.team2 != undefined && x.team2Size != undefined){
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)

        const td4 = document.createElement('td')
        tr2.appendChild(td4)
        td4.innerText = x.team2
    
        const td5 = document.createElement('td')
        tr2.appendChild(td5)
        td5.innerText = x.team2Size
    }
    
}



