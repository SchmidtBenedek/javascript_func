const szam1 = 5 //globális változó

valami1()
valami2()
valami3()
const a = valami4(2)
console.log(a)

/**
 * Ez a függvény valami
 * @returns {void}
 */
function valami1(){
    console.log('valami1')
}

/**
 * Kilogolja a globális scopeon lévő szám változót
 */
function valami2(){
    console.log(szam1)
}

/**
 * Deklarál lokális változót és logolja
 */
function valami3(){
    const szam2 = 4
    console.log(szam2)
}
/**
 * @param {number} para  //Deklaralulnk 1 lokalist valtozok utana meg egy et aminek az erteke a lokalis valtozo es a parameter osszege
 * @returns {number} 
 */
function valami4(para){
    const szam3 = 4
    const osszeg = szam3 + para

    return osszeg
}