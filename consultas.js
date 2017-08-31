// Listagem dos dados referentes a cada processo cadastrados no sistema
db.processo.find()


// Quantidade de processos cadastrados no sistema
db.processo.count()


// Listagem de todos os processos da vara do trabalho 
db.processo.find( { "Vara": "Vara do Trabalho" } )

// Listagem de todos os advogados que estão com o processo numero 87652
db.advogado.find( { "Processos.Numero": "87652" } )

// Listagem de todos os advogados que possuem o nomero iniciado com 'Aline'
db.advogado.find( { "Nome": /^Aline/ } )


// Listagem de todos os processos da vara do trabalho,
// mostrando apenas o numero, a data de inicios e seus respectivos advogados
db.processo.find( 
    { "Vara": "Vara do Trabalho" },
    { "Numero": 1, "Inicio": 1, "Advogados": 1, _id: 0 }
)

// Listagem de todos os advogados que estão com o processo numero 87652,
// mostrando apenas o nome e seus respectivos processos
db.advogado.find( 
    { "Processos.Numero": "87652" },
    { "Nome": 1, "Processos": 1, _id: 0 }
)

// Listagem de todos os advogados que possuem o nomero iniciado com 'Aline',
// mostrando apenas o nome, CPF e OAB
db.advogado.find( 
    { "Nome": /^Aline/ },
    { "Nome": 1, "CPF": 1, "OAB": 1, _id:0 }
)


// Filtra os processos que comecaram dia 15/08/2015 e com os Advogados cujo nome inicia com 'Aline',
// mostrando seu numero e demais advogados relacionados
db.processo.find(
    { "Inicio": new Date("2015-08-15"), "Advogados.Nome": /^Aline/ },
    { "Numero": 1, "Advogados.Nome": 1, _id: 0 }
)

// Filtra todos os advogados que estão com os processos '87652' ou '534253',
// mostrando seu nome e OAB
db.advogado.find( 
    { "Processos.Numero": { $in: [ "87652", "534253" ] } },
    { "Nome": 1, "OAB": 1, _id: 0}
)


// Filtra todos os advogados que moram no bairro de 'Paratibe' ou 'Castelo Branco',
// mostrando seu endereço completo e nome
db.advogado.find( 
    { "Endereco.Bairro": { $in: [ "Paratibe", "Castelo Branco" ] } },
    { "Endereco": 1, "Nome": 1, _id: 0 }
)    


// Lista a comissão media dos advogados por bairro
db.advogado.aggregate(
   [
     {
       $group:
         {
           _id: "$Endereco.Bairro",

           "Comissão média" : { $avg: "$Comissão" }
         }
     }
   ]
)
     
// Lista 2 dois primeiros processos cadastrados no sistema
db.processo.find().limit(2)


// Lista todos os advogados, mostrando seus respectivos nomes e a quantidade de processos
db.advogado.aggregate(
   [
      { 
        $project: { 
          _id: 0, 
          "Nome": 1, 
          Processos: { 
            $size: "$Processos" 
          } 
        } 
      }
   ]
)