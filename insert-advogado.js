db.advogado.insertMany ([
{
    "OAB": "90792",
    "CPF": "98745665432",
    "Nascimento": new Date("1955-04-07"),
    "Nome": "João Guilherme",
    "Comissão": 25,
    "Telefone": [
        "99834-4323",
        "99923-6621"
    ],
    "Endereco": {
        "Rua": "Eduardo Medeiros",
        "Numero": "23",
        "Bairro": "Castelo Branco",
        "Cidade": "João Pessoa",
        "CEP": "58050-080"
    },
    "Processos": [
        { "Numero": "87652" },
        { "Numero": "534253" },
        { "Numero": "623142" },
        { "Numero": "374623" }
    ]
},
{
    "OAB": "634326",
    "CPF": "54632465787",
    "Nascimento": new Date("1952-01-01"),
    "Nome": "Fernado Ribeiro",
    "Comissão": 20,
    "Telefone": [
        "99623-4212",
        "99823-9856"
    ],
    "Endereco": {
        "Rua": "Anita Garibaldi",
        "Numero": "456",
        "Bairro": "Paratibe",
        "Cidade": "João Pessoa",
        "CEP": "58062-012"
    },
    "Processos": [
        { "Numero": "63452" },
        { "Numero": "932489" }
    ]
},
{
    "OAB": "663473",
    "CPF": "87623456498",
    "Nascimento": new Date("1961-03-17"),
    "Nome": "Aline Sousa",
    "Comissão": 30,
    "Telefone": [
        "99834-8826",
        "99642-3465"
    ],
    "Endereco": {
        "Rua": "Aluísio França",
        "Numero": "345",
        "Bairro": "Manaira",
        "Cidade": "João Pessoa",
        "CEP": "58038-060"
    },
    "Processos": [
        { "Numero": "63452" },
        { "Numero": "6523651" },
        { "Numero": "87652" }
    ]
},
{
    "OAB": "36434",
    "CPF": "54367886492",
    "Nascimento": new Date("1960-02-11"),
    "Nome": "Aline Fontes",
    "Comissão": 10,
    "Telefone": [
        "98745-4577",
        "99356-3476"
    ],
    "Endereco": {
        "Rua": "Aluísio França",
        "Numero": "983",
        "Bairro": "Manaira",
        "Cidade": "João Pessoa",
        "CEP": "58038-060"
    },
    "Processos": [
        { "Numero": "63452" }
    ]
}
])

db.advogado.createIndex( { "OAB": 1 } )