// objetos, arreglos, interfaces
// any Se utiliza para guardar cualquier tipo de dato
let mascotas = ['Perros', 'Gato', 100, true]

let temp: (boolean|number|string) [] = ['aaaa', 100]

let nombres:string[] = ['Juan', 'Pedro', 'Mario']

interface Persona{
    nombre:string
    grupo:string
    edad:number
    materias:string[]
    activo?:string
}

let vector:number[]= [1,4,3]
vector[2]= 8
vector.push(9)
for (let elemento of vector) {
    console.log(elemento)    
} 

let tem:(number|string)[]=[]
tem.push('mario')
tem.push(123)

const alumno:Persona = {
    nombre:'German',
    grupo:'IDGS',
    edad:21,
    materias: ['Español']
}

alumno.activo = 'inscrito'

console.log(alumno) // Imprime el dato en la consola
console.table(alumno)