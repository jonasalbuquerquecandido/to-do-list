function adicionar() {
    const tinp = document.getElementById('inpContent').value

    let li = document.createElement("li")
    li.innerHTML = tinp + '<span onclick="deletarTarefa(this)">❌</span>'

    document.getElementById('listc').appendChild(li)

    document.getElementById('inpContent').value = ""
}

function deletarTarefa(li) {
    li.parentElement.remove(li)

}