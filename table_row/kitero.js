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