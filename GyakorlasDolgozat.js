/**
 * @type {{name:string, age: string, love1: string, love2?: string}[]}
 */

const arr = [
    {
        name: 'Balassi Bálint',
        age: 'reformáció',
        love1: 'Losonczy Anna',
        love2: 'Dobó Krisztina'
    },
    {
        name: 'Csokonai Vitéz Mihály',
        age: 'felvilágosodás',
        love1: 'Vajda Juliána'
    },
    {
        name: 'Petőfi Sándor',
        age: 'magyar romantika',
        love1: 'Mednyánszky Berta',
        love2: 'Szendrey Júlia'
    },
    {
        name: 'Ady Endre',
        age: '20. század',
        love1: 'Léda',
        love2: 'Csinszka'
    }
]

const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')
const trHead = document.createElement('tr')

document.body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)
thead.appendChild(trHead)

/**
 * @type {string[]}
 */
const fejlec = ['Szerző neve', 'Korszak', 'Szerelmek']

for(let i = 0; i < fejlec.length; i++){
    const th = document.createElement('th')
    trHead.appendChild(th)

    th.innerText = fejlec[i]
}

for(const x of arr){
    const trBody = document.createElement('tr')
    tbody.appendChild(trBody)

    const tdName = document.createElement('td')
    trBody.appendChild(tdName)
    tdName.innerText = x.name

    const tdAge = document.createElement('td')
    trBody.appendChild(tdAge)
    tdAge.innerText = x.age
    
    const tdLove1 = document.createElement('td')
    trBody.appendChild(tdLove1)
    tdLove1.innerText = x.love1

    if(x.love2 != undefined){

        const tdLove2 = document.createElement('td')
        trBody.appendChild(tdLove2)
        tdLove2.innerText = x.love2
    }
    else{
        tdLove1.colSpan = 2
    }

}



