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

/**
 * @type {string[]}
 */
const fejlec = ['Nemzetiség', 'Szerző', 'Mű']

const tr = document.createElement('tr')
const table = document.createElement('table')
const thead = document.createElement('thead')
const tbody = document.createElement('tbody')

document.body.appendChild(table)
table.appendChild(thead)
thead.appendChild(tr)
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
    td1.addEventListener('click', 
        function (e){
            /**
             * @type {HTMLTableCellElement} 
             */
            const target = e.target 
            target.classList.add('marked')
        }
    )


    const td2 = document.createElement('td')
    tr1.appendChild(td2)
    td2.innerText = i.writer1
    
    const td3 = document.createElement('td')
    tr1.appendChild(td3)
    td3.innerText  = i.work1

    if(i.writer2 != undefined && i.work2 != undefined){
        td1.rowSpan = '2'
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
/**
 * @type {HTMLFormElement}
 */

const htmlForm = document.getElementById('htmlform')

htmlForm.addEventListener('submit', 
    function (e){
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
         * @type {{nation: string, writer1: string, work1: string, writer2: string?, work2?: string}}
        */
        const obj = {}

        obj.nation = nemzetisegValue
        obj.writer1 = szerzo1Value
        obj.work1 = mu1Value
        obj.writer2 = szerzo2Value
        obj.work2 = mu2Value

        const valami = document.getElementById('valami')

        const tr1 = document.createElement('tr')
        valami.appendChild(tr1)
    
    
        const td1 = document.createElement('td')
        tr1.appendChild(td1)
        td1.innerText = obj.nation
        td1.addEventListener('click', 
            function (e){
                /**
                 * @type {HTMLTableCellElement} 
                 */
                const target = e.target //Td amire rakattintok
                const tr = target.parentElement
                const tbody = tr.parentElement
                const kijelol = tbody.querySelector('.marked')
                if(kijelol){
                    kijelol.classList.remove('marked')
                }

                target.classList.add('marked')
            }
        )


        const td2 = document.createElement('td')
        tr1.appendChild(td2)
        td2.innerText = obj.writer1
        
        const td3 = document.createElement('td')
        tr1.appendChild(td3)
        td3.innerText  = obj.work1

        if(obj.writer2 != "" && obj.work2 != ""){
            td1.rowSpan = '2'
            const tr2 = document.createElement('tr')
            valami.appendChild(tr2)
            
            const td4 = document.createElement('td')
            tr2.appendChild(td4)
            td4.innerText  = obj.writer2

            const td5 = document.createElement('td')
            tr2.appendChild(td5)
            td5.innerText = obj.work2


            
        }    
    }
)

