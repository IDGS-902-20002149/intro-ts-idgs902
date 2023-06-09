// Funciones

function sumar (a:number,b:number):number{
    return a+b
}

// Si el tipo no se declara se toma como tipo any, por lo puede recibir cualquier tipo de dato
//const result = sumar('German', 'Vargas')
const result = sumar(6, 8)

const sumarFlecha = (a:number, b:number): number => {
    return a+b
}

function multiplicar(num1:number, num2?:number, base:number=2):number{
    return num1*base
}

const result2 = multiplicar(5,10)

interface Personas {
    nombre:string
    edad:number
    grupos:()=> void
}

function UTL(alumno:Personas, cuatrimestre:number):void{
    alumno.edad = 21
    console.log(alumno)
}

const NuevoAlumno:Personas={
    nombre: 'German',
    edad: 26,
    grupos() {
        console.log('IDGS123', this.edad)
    }
}

UTL(NuevoAlumno, 9)

//funciona anonima
const funcSumar = function(n1:number, n2:number):number{
    return n1 + n2
}

console.log(funcSumar(3,4))

//Funcion con parametros opcionales
function calcular(n1:number, n2:number, n3?:number):number{
    if(n3){
        return n1 + n2 + n3
    }else {
        return n1 + n2
    }
}

console.log(calcular(3,2,5))
console.log(calcular(3,2))

//Parametros REST en funciones
function calcular2(...valores:number[]){
    let suma = 0;
    for(let x=0; x<valores.length; x++){
        suma += valores[x];
    }
    return suma;
}

console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))