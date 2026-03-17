function adicionar() {
    const tinp = document.getElementById('inpContent').value

    if (tinp.trim() === "") { //sempre usar o trim ao pegar valores do input
        alert('Escreva um tarefa!')
        return
    }

    let li = document.createElement("li")
    li.innerHTML = tinp + '<span onclick="deletarTarefa(this)">❌</span>'

    document.getElementById('listc').appendChild(li)

    document.getElementById('inpContent').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove(li)
}