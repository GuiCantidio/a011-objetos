const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

pokemon1.ataques =[]

pokemon1.ataques.push({
    
    nome: 'Investida',
    dano: 40,
    tipo: 'Normal',
    precisao: 100
})
pokemon2.ataques = [{ ...pokemon1.ataques}]

pokemon1.ataques.push({
    nome: 'Folha navalha',
    dano: 45,
    tipo:'Grama',
    precisao : 100

})

pokemon2.ataques.push({
    nome: 'JatoDeÁgua',
    dano: 40,
    tipo: 'Água',
    precisao: 100
})

console.log(pokemon1,)
console.log(pokemon2)
console.log(pokemon1.ataques)
console.log(pokemon2.ataques)