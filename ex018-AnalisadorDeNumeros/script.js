let arrNum = []
let num = window.document.getElementById("textNum")
let resultAdd = window.document.getElementById("resultAdd")
let resultCalculo


function adicionar() {

    // let num = window.document.getElementById("textNum")
    // let resultAdd = window.document.getElementById("resultAdd")


    if (num.value.length == 0) {
        window.alert(`[ATENÇÃO] Favor inserir um numero`)

    }

    else {

        let numParseado = num.value

        if (arrNum.includes(numParseado)) {

            window.alert(`[ATENÇÃO] Numero ja inserido na lista, informe outro número`)
          

        } else {

            arrNum.push(numParseado)
            // arrNum.sort(Number)
            // let pos = arrNum.indexOf(numParseado)

            if (numParseado < 1 || numParseado > 100) {
                window.alert(`[ATENÇÃO] Favor inserir um número entre 1 e 100`)
                arrNum.pop()
           

            } else {

                let item = window.document.createElement(`option`)
                item.text = `Valor ${numParseado} adicionado`
                resultAdd.appendChild(item)
            
            }

            
        }

    
    }
    num.value = ''
    num.focus()


}

function finalizar() {

    arrNum.sort(function (a, b) { return a - b })

    if (arrNum.length == 0) {

        window.alert(`[ERRO] Não foi possível finalizar, pois array esta vazio`)

    } else {

   
        resultCalculo = window.document.getElementById("resultCalculos")
        resultCalculo.innerHTML = `Ao todo temos ${arrNum.length} números cadastrados <br> 
                                    O maior valor informado foi ${arrNum[arrNum.length - 1]} <br>
                                    O menor valor informado foi ${arrNum[0]} <br>
                                    Somando todos os valores temos ${somarArray(arrNum)} <br>
                                    A média dos valores digitados é ${mediaArray(somarArray(arrNum),arrNum)}`
    }


    function somarArray(arrayParametro) {

        let valor = 0

        for (let i = 0; i < arrayParametro.length; i++) {

            valor += Number(arrayParametro[i])

        }

        return valor

    }

    function mediaArray(valorSomaArray,arrayParametro){

        let valorMedia = Number(valorSomaArray/arrayParametro.length)

        return valorMedia


    }

}

function limpar(){

    num.value = ''
    resultAdd.innerHTML = ''
    resultCalculo.innerHTML = ''
    arrNum.length = 0
}