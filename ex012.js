
var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são => ${hora} horas`)

if(hora >= 6 && hora < 12){
    console.log(`bom dia`)
}else if(hora > 12 && hora <= 18){
    console.log(`boa tarde`)
}else if(hora > 18 && hora <= 24){
    console.log(`boa noite`)
}else{

    console.log(`boa madrugada`)
}