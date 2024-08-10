//ELEMENTO DE SELEÇÃO
var selectAno = document.getElementById('ano')

//ANO ATUAL
var currentAno = new Date().getFullYear()

//OPÇÃO DE ANOS NO CAMPO DE SELEÇÃO
for (var i = currentAno; i >= currentAno - 80; i--){
    var option = document.createElement('option')
    option.value = i
    option.textContent = i
    selectAno.appendChild(option)
}