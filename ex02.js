categoriaProdutos = [
    { nome: 'Notebook', id: 01, status: 'Ativo', categoria: 'Eletrônico' },
    { nome: 'Bolacha', id: 02, status: 'Inativo', categoria: 'Comida' },
    { nome: 'Pincel-Eletrônico', id: 03, status: 'Inativo', categoria: 'Eletrônico' },
    { nome: 'Caderno', id: 04, status: 'Inativo', categoria: 'Escola' },
    { nome: 'Paozinho', id: 05, status: 'Ativo', categoria: 'Padaria' }
];
produtos = [
    { id: 06, nome: 'Mesa Computador', preco: 1099, categoria: 'Móveis' },
    { id: 07, nome: 'Pacote de Bala', preco: 08, categoria: 'Doces' },
    { id: 08, nome: 'PC - Gamer', preco: 2699, categoria: 'Computador' }
];
//Percorrer a lista e mostrar no console só o "nome dos produtos" da categoria "Eletrônicos".
const check = categoriaProdutos.filter(nomeprod => nomeprod.categoria == 'Eletrônico').map(nomeprod => (nomeprod.nome));
console.log("Percorrendo e mostrando o nome dos produtos da categoria eletrônicos: ")
console.log(check)
console.log()
//Percorrer a lista e mostrar no console só o "nome das categorias" com produtos com preço menor que 10.
const check2 = produtos.filter(nomeCateg => nomeCateg.preco < 10).map(nomeCateg => (nomeCateg.categoria));
console.log("Percorrendo e mostrando o nome das categorias dos produtos menor que 10")
console.log(check2)
console.log()
//Percorrer a lista e mostrar no console só os produtos das categorias desativadas.
const check3 = categoriaProdutos.filter(atividade => atividade.status == 'Inativo').map(atividade => (atividade.nome));
console.log("Percorrendo e mostrando os produtos das categorias desativadas")
console.log(check3)
console.log()
//Percorrer a lista e adicionar na categoria a quantidade de produtos de cada categoria.
const check4 = categoriaProdutos.filter(eletro => eletro.categoria == 'Eletrônico');
const check5 = categoriaProdutos.filter(comida => comida.categoria == 'Comida');
const check6 = categoriaProdutos.filter(escola => escola.categoria == 'Escola');
const check7 = categoriaProdutos.filter(padaria => padaria.categoria == 'Padaria');
const tam = check4.push(check4.length)
const tam2 = check5.push(check5.length)
const tam3 = check6.push(check6.length)
const tam4 = check7.push(check7.length)
console.log('A quantidade de produtos da categoria Eletrônicos é de: ',tam-1)
console.log('A quantidade de produtos da categoria Comida é de: ',tam2-1)
console.log('A quantidade de produtos da categoria Escola é de: ',tam3-1)
console.log('A quantidade de produtos da categoria Padaria é de: ',tam4-1)