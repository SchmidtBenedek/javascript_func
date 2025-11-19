//Hf.:

/**
 * @type {CountryWriters[]}
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
 * @
 */
const formArray=[
    {
        label: "Nemzetiség:",
        input: "nemzetiseg",
    },
    {
        label: "Szerző1:",
        input: "szerzo1",
    },
    {
        label: "Mű:",
        input: "mu1",
    },
    {
        label: "Szerző2:",
        input: "szerzo2",
    },
    {
        label: "Mű:",
        input: "mu2",
    },
]

generateTable('created' ,["Nemzetiseg","Szerzo","Mű"])
renderTableBody(arr)
    


/**
 * @type {HTMLFormElement}
 */
const htmlform = document.getElementById('htmlform')

htmlform.addEventListener('submit', addToHtmlTable)


/**
 * @type {HTMLFormElement}
 */
const jsform = jsformRender('jsform', formArray)

jsform.addEventListener('submit', function(e) {
    e.preventDefault()
    /**
     * @type {CountryWriters}
     */
    const obj = {}

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

    if(validateFields(nemzetiseg, szerzo1, mu1)) {
        obj.nation = nemzetiseg.value;
        obj.writer1 = szerzo1.value;
        obj.work1 = mu1.value;
        obj.writer2 = szerzo2.value;
        obj.work2 = mu2.value;

        arr.push(obj);
        renderTableBody(arr);
    }
})





