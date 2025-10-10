const obj = {}
const szam = 10

if (szam > 5){
    obj.name = 'Benedek'
    console.log(obj)
}
else{
    obj['name'] = 'Benedek2' //ugyanúgy értéket ada  tulajdonságnak
}
console.log(obj.age)
console.log(obj)


//Hf.:

/**
 * @type {{nation: string, writer1: string, work1: string, writer2: string?, work2?: string}[]}
 */
const arr =[
    {
        nation: 'Orosz',
        writer1: 'Gogol',
        work1: 'A köpönyeg',
        writer2: 'Csehov',
        work2: 'A csinovnyik halála'
    },
    {
        nation: 'Cseh',
        writer1: 'Franz Kafka',
        work1: 'Az átváltozás'
    },
    {
        nation: 'Magyar',
        writer1: 'Örkény István',
        work1: 'Egyperces Novellák',
        writer2: 'József Attila',
        work2: 'Klárisok'
    },
    {
        nation: 'Svájc',
        writer1: 'Friedrich Dürrenmatt',
        work1: 'A fizikusok'
    }
]


const fejlec = ['Nemzetiség', 'Szerző', 'Mű']

const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

document.body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)

for(const x of  fejlec){
    const th = document.createElement('th')
    thead.appendChild(th)
    th.innerText = x
}
    
for(const i of arr){
    const tr1 = document.createElement('tr')
    tbody.appendChild(tr1)
    
    
    const td1 = document.createElement('td')
    tr1.appendChild(td1)
    td1.innerText = i.nation


    const td2 = document.createElement('td')
    tr1.appendChild(td2)
    td2.innerText = i.writer1
    
    const td3 = document.createElement('td')
    tr1.appendChild(td3)
    td3.innerText  = i.work1

    if(i.writer2 != undefined && i.work2 != undefined){
        td1.rowSpan = 2
        const tr2 = document.createElement('tr')
        tbody.appendChild(tr2)
        
        const td4 = document.createElement('td')
        tr2.appendChild(td4)
        td4.innerText  = i.writer2

        const td5 = document.createElement('td')
        tr2.appendChild(td5)
        td5.innerText = i.work2


        
    }
      
}
 

