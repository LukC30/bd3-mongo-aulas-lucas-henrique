const database = 'libri-database';

const collection = 'libri-collection';

use(database);


db[collection].find({},{"_id" : 0})

