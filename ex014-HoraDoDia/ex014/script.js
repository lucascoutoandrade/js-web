
var atualiza = window.setInterval(() => {carregar()},1000)


function carregar() {

    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var hora = new Date().getHours()
    var horaCompleta = new Date().toLocaleTimeString()
    // var hora = 02


    if (hora >= 5 && hora < 12) {
        img.src = `manha.jpg`
        window.document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Bom dia, Agora são: ${horaCompleta}`
    
    } else if (hora >=12 && hora < 18) {
        img.src = `tarde.jfif`
        window.document.body.style.background = '#b9846f'
        msg.innerHTML = `Boa tarde, Agora são: ${horaCompleta}`
    } else if (hora >=18 && hora <= 24) {
        img.src = `noite_.jpg`
        window.document.body.style.background = '#55154'
        msg.innerHTML = `Boa noite, Agora são: ${horaCompleta}`
      
    } else if(hora >=1 && hora <=4) {
        img.src = `noite_.jpg`
        window.document.body.style.background = '#55154'
        msg.innerHTML = `Boa madrugada, Va dormir porquê agora são: ${horaCompleta}`
    }else{
        img.src = `palhaco_hr.jpg`
        msg.innerHTML = `Hora ${hora} NÃO EXISTENTE, favor colocar a hora conforme Brasilian time zone`
    }

}

