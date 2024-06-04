const database = 'libri-database';

const collection = 'libri-collection';
use(database);

db[collection].updateOne(
        {
            titulo : "As Cavernas de Aço"
        }, 
        {
            $set: {valor : 250}
        }
);