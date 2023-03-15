function tabuada() {

    let num = window.document.getElementById("txtNumber")
    let result = window.document.getElementById("resultTabuada")

    if (num.value.length == 0) {

        window.alert(`Favor digitar um numero`)

    } else {
        let numConvert = Number(num.value)
        result.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            let item = window.document.createElement(`option`)
            item.text = `${numConvert} X ${i} = ${numConvert * i}`
            item.value = `tab${i}`
            result.appendChild(item)
            // window.alert(`${numConvert} X ${i} = `+numConvert * i)
            // result.innerHTML+= (`${num} X ${i} = `+num * i)

        }

    }
}