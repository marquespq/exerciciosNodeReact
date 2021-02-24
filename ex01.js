

categoriaProdutos = [
    { nome: 'Notebook', id: 01, categoria: 'Eletrônico' },
    { nome: 'Bolacha', id: 02, categoria: 'Comida' },
    { nome: 'Pincel-Eletrônico', id: 03, categoria: 'Eletrônico' },
    { nome: 'Caderno', id: 04, categoria: 'Escola' },
    { nome: 'Paozinho', id: 05, categoria: 'Padaria' }
]

const percorre = categoriaProdutos.map(function (perco) {
    return perco.categoria;
});
const percorre2 = categoriaProdutos.filter(p => p.categoria === 'Eletrônico');

console.log("=== APENAS OS NOMES DAS CATEGORIAS ===")
console.log(percorre)
console.log()
console.log("=== APENAS OS ELETRÔNICOS ===")
console.log(percorre2)
console.log("=== TODOS OS PRODUTOS, CATEGORIAS E IDS. ===")
console.log(categoriaProdutos)
