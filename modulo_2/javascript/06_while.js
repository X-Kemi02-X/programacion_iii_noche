console.log("CICLOS O BUCLES");
console.log("WHILE");
let i = 1; 
while (i <= 3) {
    console.log("Contador:", i);
    i++;
}
console.log("-------------------------------------------------------------")
let valores=[3,4,-2,4,5];
let indice=0;
while (valores[indice]>0){
    console.log("valor valido:", valores[indice]);
        indice++;
}
console.log("-------------------------------------------------------------")

let n=1;
while (n<10){
    if(n%2!==0){
        console.log("Es impar", n);
    }
    n++;
}
console.log("-------------------------------------------------------------")

let x=5;
do{
    console.log("interacion", x);
    x++;
} while (x<5);

console.log("-------------------------------------------------------------")

let contador=1;
suma=0;
do {
    suma+=contador;
    contador++;
}while(contador<=5);
console.log("la suma es ", suma);


let reduccion=10;
do {
    console.log("reduccion ", reduccion);
    reduccion--;
} while (reduccion>=0)


let a = 9
let e = 1;
do {
    console.log(a, "x", e, "=", a * e);
    e++;
} while (e <= 10);


let numero=1;
do {
    console.log(`${numero}*6=${numero*6}`);
    numero++;
} while (numero<=10);