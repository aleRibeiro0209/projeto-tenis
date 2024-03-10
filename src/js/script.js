// Declaração de constantes que recebem os elementos do html
const coresPaleta = document.querySelectorAll('.cores li')
const tenisCorSelecionada = document.querySelector('.img-tenis img')
const fundoCorSelecionada = document.querySelector('.rect')
const fundoCardCorSelecionada = document.querySelector('.card .info-tenis')
const fonteBtnCorSelecionada = document.querySelector('.card .info-tenis .valor-compra .btn-compra h4')

// Declaração de variáveis e arrays locais
let corSelecionada = 'vm'
let cores = ["#CC0627", "#8CBDDE", "#E2B479", "#7A7D82", "#E23F25", "#2E2E2E", "#CEB7A7", "#16543B"]

// Imprimindo no console os elementos recebidos pelas constantes
console.log(coresPaleta)
console.log(tenisCorSelecionada)
console.log(fundoCorSelecionada)
console.log(fundoCardCorSelecionada)

// Laço de repetição 'for' utilizado para percorrer cada class das tags <li>, alterar o valor variável local e chamar a função trocarCorTenisFundo
coresPaleta.forEach(li => 
    li.addEventListener('click', () => {
    
        console.log(li.classList[0])
        corSelecionada = li.classList[0]
        trocarCorTenisFundo()
    })
)

// Função utilizada para alterar a imagem e (após um teste lógico) alguns estilos especificos da página
function trocarCorTenisFundo() {

    tenisCorSelecionada.src = `./src/imagens/img-t-${corSelecionada}-jordan.png`

    // Futuramente alterar essa estrutura de decisão elif básica por um switch case
    if (corSelecionada == "vm") {

        fundoCorSelecionada.style.backgroundColor = cores[0]
        fundoCardCorSelecionada.style.backgroundColor = cores[0]
        fonteBtnCorSelecionada.style.color = cores[0]

    } else if (corSelecionada == "az") {

        fundoCorSelecionada.style.backgroundColor = cores[1]
        fundoCardCorSelecionada.style.backgroundColor = cores[1]
        fonteBtnCorSelecionada.style.color = cores[1]

    } else if (corSelecionada == "cm") {

        fundoCorSelecionada.style.backgroundColor = cores[2]
        fundoCardCorSelecionada.style.backgroundColor = cores[2]
        fonteBtnCorSelecionada.style.color = cores[2]

    } else if (corSelecionada == "cz") {

        fundoCorSelecionada.style.backgroundColor = cores[3]
        fundoCardCorSelecionada.style.backgroundColor = cores[3]
        fonteBtnCorSelecionada.style.color = cores[3]

    } else if (corSelecionada == "lj") {

        fundoCorSelecionada.style.backgroundColor = cores[4]
        fundoCardCorSelecionada.style.backgroundColor = cores[4]
        fonteBtnCorSelecionada.style.color = cores[4]

    } else if (corSelecionada == "pt") {

        fundoCorSelecionada.style.backgroundColor = cores[5]
        fundoCardCorSelecionada.style.backgroundColor = cores[5]
        fonteBtnCorSelecionada.style.color = cores[5]

    } else if (corSelecionada == "rs") {

        fundoCorSelecionada.style.backgroundColor = cores[6]
        fundoCardCorSelecionada.style.backgroundColor = cores[6]
        fonteBtnCorSelecionada.style.color = cores[6]

    } else if (corSelecionada == "vd") {

        fundoCorSelecionada.style.backgroundColor = cores[7]
        fundoCardCorSelecionada.style.backgroundColor = cores[7]
        fonteBtnCorSelecionada.style.color = cores[7]
    }
}