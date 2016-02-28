/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies')
    .insertOne(doc, function(error, result) {
      callback(error);
    });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement
  // db.collection('movies').find({director: director}).toArray(callback);
  db.collection('movies')
    .aggregate([{ $match: {director: director}}])
    .sort({title: 1})
    .toArray(callback);
  // callback(null, []);
};