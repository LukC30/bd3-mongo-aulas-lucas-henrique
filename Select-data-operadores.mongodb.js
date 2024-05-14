const database = "libri-database";

const collection = "libri-collection"

use(database)

//===============================================

//db[collection].find({valor: {$gt:100}})

//db[collection].find({valor: {$gte:100}})

//===============================================


//db[collection].find({valor: {$lt:100}})

// db[collection].find({valor: {$lte:100}})


//===============================================


// db[collection].find({valor: {$gte:100, $lte:150}})


//===============================================

db[collection].find({valor:{$gte:100}}).sort({valor: -1})