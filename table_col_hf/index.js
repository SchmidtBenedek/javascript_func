/**
 * @type {{theme: string, time: string, scientist1: string, scientist2: string}[]}
 */

const arr = [
    {
        theme: 'Optika',
        time: 'XI. szazad',
        scientist1: 'Alhazen'
    },
    {
        theme: 'Asztronómia',
        time: 'reneszánsz',
        scientist1: 'Kepler',
        scientist2: 'Galilei'
    },
    {
        theme: 'Kvantumfizika',
        time: 'XIX-XX. század',
        scientist1: 'Max Planck',
        scientist2: 'Albert Einstein'
    },
    {
        theme: 'Modern fizika',
        time: 'XX-XXI. század',
        scientist1: 'Richard Feynman',
        scientist2: 'Stephen Hawking'
    }
]

const table = document.createElement("table")
document.body.appendChild(table)

const thead = document.createElement("thead") // Létrehozzuk a thead elementet
table.appendChild(thead) //Hozzáfűzzük

const tr = document.createElement("tr")
thead.appendChild(tr)

const th1 = document.createElement("th")
const th2 = document.createElement("th")
const th3 = document.createElement("th")
tr.appendChild(th1)
tr.appendChild(th2)
tr.appendChild(th3)

const fejlec = ["Fizika területe", "Időszak", "Képviselők"]

for(let i = 0; i < fejlec.length; i++){
    const th = document.createElement("th")
    thead.appendChild(th)
    th.innerText = fejlec[i]
    
    if(i%2 == 0 && i != 0){
        th.colSpan = '2'
    }
    
}





const tbody = document.createElement("tbody")
table.appendChild(tbody)



for(const x of arr){
    const tr = document.createElement("tr")
    tbody.appendChild(tr)

    const td1 = document.createElement("td")
    tr.appendChild(td1)
    td1.innerText = x.theme
    const td2 = document.createElement("td")
    tr.appendChild(td2)
    td2.innerText = x.time
    const td3 = document.createElement("td")
    tr.appendChild(td3)
    td3.innerText = x.scientist1

    if (x.scientist2 === undefined){
        td3.colSpan = 2
    }
    else{
        const td4 = document.createElement("td")
        td4.innerText = x.scientist2
        tr.appendChild(td4)
    }
}

