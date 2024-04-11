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

    // Switch case, usado para testar o caso em que a variavel corSelecionada se encontra
    switch (corSelecionada) {
 
        case "vm":
            fundoCorSelecionada.style.backgroundColor = cores[0]
            fundoCardCorSelecionada.style.backgroundColor = cores[0]
            fonteBtnCorSelecionada.style.color = cores[0]
            break;
       
        case "az":
            fundoCorSelecionada.style.backgroundColor = cores[1]
            fundoCardCorSelecionada.style.backgroundColor = cores[1]
            fonteBtnCorSelecionada.style.color = cores[1]
            break;
       
        case "cm":
            fundoCorSelecionada.style.backgroundColor = cores[2]
            fundoCardCorSelecionada.style.backgroundColor = cores[2]
            fonteBtnCorSelecionada.style.color = cores[2]
            break;
 
        case "cz":
            fundoCorSelecionada.style.backgroundColor = cores[3]
            fundoCardCorSelecionada.style.backgroundColor = cores[3]
            fonteBtnCorSelecionada.style.color = cores[3]
            break;
       
        case "lj":
            fundoCorSelecionada.style.backgroundColor = cores[4]
            fundoCardCorSelecionada.style.backgroundColor = cores[4]
            fonteBtnCorSelecionada.style.color = cores[4]
            break;
 
        case "pt":
            fundoCorSelecionada.style.backgroundColor = cores[5]
            fundoCardCorSelecionada.style.backgroundColor = cores[5]
            fonteBtnCorSelecionada.style.color = cores[5]
            break;
       
        case "rs":
            fundoCorSelecionada.style.backgroundColor = cores[6]
            fundoCardCorSelecionada.style.backgroundColor = cores[6]
            fonteBtnCorSelecionada.style.color = cores[6]
            break;
 
        case "vd":
            fundoCorSelecionada.style.backgroundColor = cores[7]
            fundoCardCorSelecionada.style.backgroundColor = cores[7]
            fonteBtnCorSelecionada.style.color = cores[7]
            break;
 
    }
}