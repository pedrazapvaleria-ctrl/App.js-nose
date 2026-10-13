let notas = [3.5 , 7.0 , 2.8 , 7.0]
let notas_menores = 0 
let notas_mayores = 0 

for (let nota of notas){
    if (nota >=4.0 ){
        notas_mayores = notas_mayores + 1
    }else{
        notas_menores = notas_menores + 1
    }
}

console.log("Notas mayores o igual a 4.0:", + notas_mayores);
console.log("Notas menores que 4.0 :", + notas_menores);