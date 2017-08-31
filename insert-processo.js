db.processo.insertMany ([
{
    "Numero": "87652",
    "Inicio": new Date("2015-08-15"),
    "Vara": "Vara do Trabalho",
    "Advogados": [
        {
            "Nome": "João Guilherme",
            "OAB": "90792"
        },
        {
            "Nome": "Aline Sousa",
            "OAB": "663473"
        }
    ]
},
{
    "Numero": "534253",
    "Inicio": new Date("2015-08-15"),
    "Termino": new Date("2016-01-30"),
    "Vara": "Vara Federal",
    "Advogados": [
        {
            "Nome": "João Guilherme",
            "OAB": "90792"
        }
    ]
},
{
    "Numero": "623142",
    "Inicio": new Date("1999-05-10"),
    "Pendencias": "Documentação",
    "Vara": "Vara Mista",
    "Advogados": [
        {
            "Nome": "João Guilherme",
            "OAB": "90792"
        }
    ]
},
{
    "Numero": "374623",
    "Inicio": new Date("1980-04-07"),
    "Vara": "Vara Mista",
    "Advogados": [
        {
            "Nome": "João Guilherme",
            "OAB": "90792"
        }
    ]
},
{
    "Numero": "63452",
    "Inicio": new Date("2000-07-11"),
    "Vara": "Vara Mista",
    "Advogados": [
        {
            "Nome": "Fernado Ribeiro",
            "OAB": "634326"
        },
        {
            "Nome": "Augusto Fontes",
            "OAB": "36434"
        }
    ]
},
{
    "Numero": "932489",
    "Inicio": new Date("2001-09-10"),
    "Vara": "Vara Mista",
    "Advogados": [
        {
            "Nome": "Fernado Ribeiro",
            "OAB": "634326"
        }
    ]
},
{
    "Numero": "6523651",
    "Inicio": new Date("2001-09-10"),
    "Termino": new Date("2002-10-23"),
    "Vara": "Vara Regional",
    "Advogados": [
        {
            "Nome": "Aline Sousa",
            "OAB": "663473"
        }
    ]
},
{
    "Numero": "63452",
    "Inicio": new Date("2000-07-11"),
    "Termino": new Date("2002-09-12"),
    "Vara": "Vara Regional",
    "Advogados": [
        {
            "Nome": "Aline Sousa",
            "OAB": "663473"
        }
    ]
}
])



db.processo.createIndex( { "Numero": 1 } )