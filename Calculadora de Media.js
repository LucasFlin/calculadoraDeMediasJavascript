const {prompt} = require('vscode-websocket-alerts')
let nota1 = prompt("Digite a primeira nota: ")*1
let nota2 = prompt("Digite a segunda nota: ")*1
let media = (nota1 + nota2)/2

console.log(`media: ${media}`)