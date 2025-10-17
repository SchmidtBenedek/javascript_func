/**
 * @type {{writer: string, work: string, character1: string, character2?: string}[]}
 */
const arr = [
    {
        writer: 'Katona József',
        work: 'Bánk bán',
        character1: 'Gertrudis királyné'
    },
    {
        writer: 'Mikszáth Kálmán',
        work: 'Beszterce ostroma',
        character1: 'Pongrác István gróf',
        character2: 'Estella'
    },
    {
        writer: 'Arany János',
        work: 'Toldi',
        character1: 'Toldi Miklós'
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
const fejlec = ['Szerző', 'Mű', 'Szereplők']

for(let i = 0; i < fejlec.length; i++){
    const th = document.createElement('th')
    trHead.append(th)
    th.innerText = fejlec[i]
}

/*for(const x of arr){
    const trBody = document.createElement('tr')
    tbody.appendChild(trBody)

    const tdWriter = document.createElement('td')
    trBody.appendChild(tdWriter)
    tdWriter.innerText = x.writer

    const tdWork = document.createElement('td')
    trBody.appendChild(tdWork)
    tdWork.innerText = x.work

    const tdCharacter1 = document.createElement('td')
    trBody.appendChild(tdCharacter1)
    tdCharacter1.innerText = x.character1

    if(x.character2){
        const tdCharacter2 = document.createElement('td')
        trBody.appendChild(tdCharacter2)
        tdCharacter2.innerText = x.character2
    }
    else{
        tdCharacter1.colSpan = 2
    }

}
*/

/*for(let i = 0; i < arr.length; i++){
    const trBody = document.createElement('tr')
    tbody.appendChild(trBody)

    const tdWriter = document.createElement('td')
    trBody.appendChild(tdWriter)
    tdWriter.innerText = arr[i].writer
    
    const tdWork = document.createElement('td')
    trBody.appendChild(tdWork)
    tdWork.innerText = arr[i].work

    const tdCharacter1 = document.createElement('td')
    trBody.appendChild(tdCharacter1)
    tdCharacter1.innerText = arr[i].character1

    if(arr[i].character2){
        const tdCharacter2 = document.createElement('td')
        trBody.appendChild(tdCharacter2)
        tdCharacter2.innerText = arr[i].character2
    }
    else{
        tdCharacter1.colSpan = 2
    }
    
}
*/

for(let i in arr){
    const trBody = document.createElement('tr')
    tbody.appendChild(trBody)

    const tdWriter = document.createElement('td')
    trBody.appendChild(tdWriter)
    tdWriter.innerText = arr[i].writer

        const tdWork = document.createElement('td')
    trBody.appendChild(tdWork)
    tdWork.innerText = arr[i].work

     const tdCharacter1 = document.createElement('td')
    trBody.appendChild(tdCharacter1)
    tdCharacter1.innerText = arr[i].character1

    if(arr[i].character2){
        const tdCharacter2 = document.createElement('td')
        trBody.appendChild(tdCharacter2)
        tdCharacter2.innerText = arr[i].character2
    }
    else{
        tdCharacter1.colSpan = 2
    }

}