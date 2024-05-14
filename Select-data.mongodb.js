const database = "libri-database";

const collection = "libri-collection"

// use(database);

// db[collection].find();


//por categoria
// use(database);

// db[collection].find({"categoria": 'Fantasia Heroica'});


//===============================================

// use(database);

// db[collection].find({}, {"_id": 0 , "codigo" : 0, "imagem" : 0});

//=================================================



use(database);

db[collection].find({"titulo" : /robôs/i}, {"_id": 0 , "codigo" : 0, "imagem" : 0});
