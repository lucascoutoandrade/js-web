
function contar() {

    var txtInicio = window.document.getElementById("txtInicio").value
    var txtFim = window.document.getElementById("txtFim").value
    var txtPasso = window.document.querySelector("input#txtPasso").value
    var textResult = window.document.getElementById("result")
    textResult.innerHTML = "Contando: <br>"

    // window.alert(txtInicio)
    // window.alert(txtFim.toString().length)

    let ini = Number(txtInicio)
    let fim = Number(txtFim)
    let passo = Number(txtPasso)

    if (txtInicio.length == 0 || txtFim.length == 0 || txtPasso.length == 0 || txtPasso == "0") {

        textResult.innerHTML = `Impossível contar!`

    } else if (ini > fim) {
        window.alert("fim maior que inicio")
        textResult.innerHTML = `Valor campo fim não pode ser maior que valor campo inicio <br> Impossível contar!`

    } else {

        while (ini <= fim) {
            // window.alert(txtInicio)
            textResult.innerHTML += ` ${ini}` + String.fromCodePoint(0x1F449)
            ini += passo
            if (ini == fim) {
                textResult.innerHTML += ` ${ini} \u{1F5FD}`
                break
            }
        }

    }

}


function limpar() {

    var txtInicio = window.document.getElementById("txtInicio")
    var txtFim = window.document.getElementById("txtFim")
    var txtPasso = window.document.querySelector("input#txtPasso")
    var textResult = window.document.getElementById("result")

    txtInicio.value = ""
    txtFim.value = ""
    txtPasso.value = ""
    textResult.innerHTML =  "Preparando contagem..."


}
