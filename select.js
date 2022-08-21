con.connect(function(err) {
    if (err) throw err;
        con.query("SELECT * FROM tableName", function (err, result, fields) {
             if (err) throw err;
            console.log(result);
        });
  });