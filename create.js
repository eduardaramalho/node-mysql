con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  const sql = "CREATE TABLE tableName (cpf VARCHAR(11), name VARCHAR(55))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");  
  });
});