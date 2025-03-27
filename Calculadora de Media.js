const {prompt} = require('vscode-websocket-alerts')
let nota1 = prompt("Digite a primeira nota: ")*1
let nota2 = prompt("Digite a segunda nota: ")*1
let media = (nota1 + nota2)/2

if(media>=6){
    console.log(`Sua média é ${media}, você foi aprovado(a)!`)
}else{
    console.log(`Sua média é ${media}, você foi reprovado(a)...`)
}