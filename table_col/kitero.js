console.log("Szia");
/**
 * @type {string}
 */
const konstans = "szia";

const tomb = ["elso", "masodik", "harmadik"]

for( let i = 0; i < tomb.length; i++ ){
    console.log(tomb[i])
}
console.log(tomb[1])

for(const a of tomb){
    console.log(a)
}

for(const key in tomb){
    console.log(`${key} : ${tomb[key]}`)
}

/**
 * @type {{name: string, age: number}}
 */

const y = {
    name : "nev",
    age : 24
}

for(const key in y){
    console.log(y[key])
}