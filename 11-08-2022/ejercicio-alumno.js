class Alumno{
    constructor(nombre,apellido,califFinal,inscrito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal= califFinal;
        this.inscrito = inscrito;
        this.nuevasMaterias=[];
    }
    ObtenerInicialesDeAlumno(){
        return `iniciales del alumno:${this.nombre[0]}-${this.apellido[0]}`; 
    }
    ObtenerNombreCompleto(){
        return `el nombre del alumno es: ${this.nombre} ${this.apellido}`
    }
    Aprobado(){
        return this.califFinal > 6 ? true : false;
    }
    AgregarCalificacion(materia,calificacion){
        this.materia=materia
        this.nuevasMaterias.push({"materia":this.materia, "calificacion":+calificacion});
        this.ObtenerNuevasCalificaciones()
    }
    ObtenerNuevasCalificaciones(){
        this.nuevasMaterias.forEach((index) => {
           console.log(`materia: ${index.materia}  calificacion: ${index.calificacion}`)
        })
    }
}

let evelyn = new Alumno("Evelyn", "Rochin", 9.4, true)
evelyn.ObtenerInicialesDeAlumno();
evelyn.ObtenerNombreCompleto();
evelyn.Aprobado();
evelyn.AgregarCalificacion('Ingles','6');
evelyn.AgregarCalificacion('español','9');
evelyn.AgregarCalificacion('matematicas','8');
evelyn.ObtenerNuevasCalificaciones();