const path = require('path');

// Apenas o nome do arquivo atual
console.log("Arquivo: ", path.basename(__filename));

// Nome do diretorio atual
console.log("Diretorio: ", path.dirname(__filename));

// Extensão do arquivo
console.log("Extensão: ", path.extname(__filename));

// Criar objeto Path
console.log("Extensão: ", path.parse(__filename));

// Juntar caminhos de arquivos
console.log("Extensão: ", path.join(__dirname, "test", "test.html"));