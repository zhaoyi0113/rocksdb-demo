const rocksdb = require('rocksdb-node');
db = rocksdb.open(
  {create_if_missing: true},
  './users-test.rocksdb');
db.put('node', 'rocks');
console.log(db.get('node'));
