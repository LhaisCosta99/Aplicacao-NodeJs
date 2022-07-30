import readline from "readline";

const propriedades = []

const leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function input (pergunta){
    return new Promise((resolve, reject) => {
        leitor.question(pergunta,(entrada)=>{
            resolve(entrada.toLowerCase())
        })
    })
} 

while (!propriedades.includes("sair")){
    const resposta = await input("Digite algo: ")
    propriedades.push(resposta)
}

leitor.close()
propriedades.pop()
propriedades.sort()
console.log(propriedades)
