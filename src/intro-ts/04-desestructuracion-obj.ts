//Desestructuración de objetos y arreglos
interface Alumno1{
    matricula:number
    nombre: string
    edad: number
    correo:string
    grupo: Grupo
}

interface Grupo{
    grupo:string
    year:number
}

const alumno2:Alumno1={
    matricula:123456,
    nombre: 'Mario',
    edad: 23,
    correo: 'mario@gmail.com',
    grupo: {
        grupo:'idgs',
        year: 2023,
    }
}

console.log(`La matricula es: ${alumno2.matricula}`)
console.log(`El anio del grupo es: ${alumno2.matricula}`)

const{matricula, grupo:xx} = alumno2
const{grupo}=xx 

console.log(`La matricula es: ${matricula}`)
console.log(`El nombre es: ${alumno2.nombre}`)
console.log(`El grupo es: ${alumno2.grupo.grupo}`)
console.log(`El anio del grupo es: ${alumno2.grupo.year}`)

const gps:string[]=['IDGS', 'IEVN', 'REDES']
console.log(`Grupo 1: ${gps[0]}`)
console.log(`Grupo 2: ${gps[1]}`)
console.log(`Grupo 3: ${gps[2]}`)

const[a,,b]= gps
console.log(`Grupo 1: ${a}`)