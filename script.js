const itemInfo = {
  valor: 11.66,
};

const input = document.getElementById('quantidade-produto-01')
const sumButton = document.getElementById('btn-adicionar-produto-01')
const subtrairButton = document.getElementById('btn-subtrair-produto-01')


const quantidadeSubtotalText = document.getElementById("quantidade-subtotal");
const valorSubtotalText = document.getElementById("valor-subtotal");

function atualizarSubTotal(){
  const quantidade = input.value

  quantidadeSubtotalText.innerText = quantidade + " itens";
  valorSubtotalText.innerText = itemInfo.valor * quantidade
}

function adicionarItem() {
input.value = Number(input.value) + 1

 atualizarSubTotal()
}


function subtrairItem(){
  if(input.value > 1) {
  input.value = Number(input.value) - 1
}

  atualizarSubTotal()
}

sumButton.addEventListener('click', adicionarItem)

subtrairButton.addEventListener('click', subtrairItem)
