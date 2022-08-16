class Maestro{
    contructor(nombreMaestro,grupo,calificaciones){
        this.nombreMaestro=nombreMaestro;
        this.grupo=grupo;
        this.calificaciones=[];
    }
    getNombreMaestro(){
        return this.nombreMaestro;
    }
    getGrupo(){
        return this.grupo;
    }
    setCalificaciones(alumno,calificacion){
        this.alumno=alumno;
        this.calificacion=calificacion;
        this.calificaciones.push({"alumno":this.alumno, "calificacion":+this.calificacion});
    }
    getPromedio(){
        let suma=0;
        this.calificaciones.forEach((index) => {
            suma= Number(suma) + Number(index.calificacion);
        })
        return suma/this.calificaciones.length;
    }
}

class MaestroDeFisica extends Maestro{
    constructor(nombre,grupo,antiguedad){
        let s=super()
        s.nombre=nombre;
        s.grupo=grupo;
        this.antiguedad=antiguedad;
        s.calificaciones=[];       
    }
    getAntiguedad(){
        return this.antiguedad;
    }
}
class MaestroDeMusica extends Maestro{
    constructor(nombre,grupo,edad){
        let s=super()
        s.nombre=nombre;
        s.grupo=grupo;
        this.edad=edad;
        s.calificaciones=[];       
    }
    getEdad(){
        return this.edad;
    }
}
