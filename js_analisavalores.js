let num = window.document.getElementById("fnum")
let lista = window.document.getElementById("flista")
let res = window.document.getElementById("res")
let valores = []

function isNumero(n){ return (Number(n) >= 1 && Number(n) <= 100) }
function inLista(n, l){ return (l.indexOf(Number(n)) != -1) }

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    let tot = valores.length
    if(tot == 0){
        window.alert("Adicione valores antes de finalizar!")
    } else{
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            if(valores[pos] < menor) menor = valores[pos]
            if(valores[pos] > maior) maior = valores[pos]
            soma += valores[pos]
        }
        media = soma / tot
        res.innerHTML =  `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}