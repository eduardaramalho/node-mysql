con.connect(function(err) {
    if (err) throw err;
   const sql = "INSERT INTO tableName (cpf, name) VALUES ('11122233312', 'Eduarda') ";
   con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
       });
});