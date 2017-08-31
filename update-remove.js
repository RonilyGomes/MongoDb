//  Atualiza a Vara do processo filtrado
db.processo.updateOne(
   { "Numero": "534253" },
   { $set: { "Vara": "Vara Atualizada" } }
)
   
//  Adiciona o campo Termino ao processo filtrado
db.processo.updateOne(
   { "Numero": "87652" },
   { $set: { "Termino": new Date() } }
)
   
// Remove o processo que teve sua vara atualizada   
db.processo.deleteOne( 
   { Vara: "Vara Atualizada" } 
)