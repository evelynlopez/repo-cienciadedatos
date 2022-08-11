//cantidad de parametros enviados
function parametros(...param){
    return `el total de parametros mandados son: ${param.length}`
}
parametros('parametro1','parametro2','parametro3','parametro4','parametro5')