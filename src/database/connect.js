const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect("mongodb+srv://admin:<password>@nodejsplayground.pbajido.mongodb.net/?retryWrites=true&w=majority", 
    (error) => {
        if (error) {
            return console.log('Ocorreu um erro ao se conectar com o banco de dados: ', error);
        }

        console.log('Conexão com o banco de dados realizada com sucesso!');
    })
}

module.exports = connectToDatabase;