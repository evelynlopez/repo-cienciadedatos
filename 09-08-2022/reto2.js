// elegir el pais con más caracteres
function longestCountry(...paises){
    let i= [];
    let ilength=0;
    paises.forEach((index) => {
        if(index.length == ilength){
            i.push(index);
        }else if(index.length > ilength) {
            i.length = 0;
            i.push(index);
            ilength=index.length;
        }
    })
    return `paises con mas caracteres: ${i}`
}
longestCountry('nicaragua','mexico','panama','chile','cuba','argentina','indonesia')