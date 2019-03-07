let db = require('../config/db');

let message = {
    index:
        function (data, fn) {
            var count = (data.page - 1) * 20;
            sql = db.format("SELECT * FROM messages ORDER BY `create_time` DESC  LIMIT ?, 20", [
                count
            ]);
            db.query(sql, function (err, results, fields) {
                fn(err, results)
            })
        },
    create:
    function (data, fn) {
        var CURRENT_TIMESTAMP = ~~Date.now();
        sql = db.format("INSERT INTO messages (`name`, `content`, `create_time`) VALUES(?, ?, ?) ", [
            data.name, data.content, CURRENT_TIMESTAMP
        ]);
        db.query(sql, function (err, results, fields) {
            fn(err, results)
        })
    }
};

module.exports = message;
