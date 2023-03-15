function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    //window.alert(anoAtual)

    var anoInformado = window.document.querySelector(`input#txtano`).value

    if (anoInformado.length == 0 || anoInformado >= anoAtual) {

        window.alert(`[ERRO] favor verificar os dados informados no campo Ano de nascimento e tentar novamente`)

    } else {
        var rdbSex = window.document.getElementsByName("rdsex")
        var result = window.document.getElementById("res")
        var idadeUser = Number(anoAtual - anoInformado)
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        var sexEscolhido = ``
        if (rdbSex[0].checked) {
            sexEscolhido = `Homem`
            if (idadeUser > 0 && idadeUser < 10) {
                img.setAttribute('src','bebe_h.jpg')
     
            } else if (idadeUser < 21) {
                img.setAttribute('src','jovem_h.jpg')
            } else if (idadeUser < 50) {
                img.setAttribute('src','adulto_h.jfif')
            } else {
                img.setAttribute('src','idoso_h.jpg')
            }
        } else {
            sexEscolhido = `Mulher`
            if (idadeUser > 0 && idadeUser < 10) {
                img.setAttribute('src','bebe_m.jfif')
            } else if (idadeUser < 21) {
                img.setAttribute('src','jovem_m.jpg')
            } else if (idadeUser < 50) {
                img.setAttribute('src','adulto_m.jpg')
            } else {
                img.setAttribute('src','idoso_m.png')
            }
        }

      
        result.style.textAlign = `center`
        result.innerHTML = `Vc é ${sexEscolhido} e sua idade é ou será ${idadeUser} no ano de ${anoAtual}`
        result.appendChild(img)
    }


}
//  200x266
// crianca  0 ate 10
// joven > 10  e > 21
// adulto > 21 e < 50
// idoso