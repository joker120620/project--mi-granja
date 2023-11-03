const express = require('express')
const cors = require('cors')
const bcrypt = require("bcryptjs");
const mysql = require('mysql');
const app = express()
app.use(cors())
app.use(express.json());
const port = 5000
let connection = mysql.createConnection({
  host     : 'localhost',
  database : 'mi-granja',
  user     : 'root',
  password : ''
});
connection.connect();

//encript password
async function encriptPassword(text) {
  let passwordEncript  = await bcrypt.hash(text, 10);
  return passwordEncript
}
//compare password 
async function comparePassword(text, passwordEncripted) {
  let passwordEncript =  await bcrypt.compare(text, passwordEncripted);
  return passwordEncript
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//se obtiene la key del array que viene de la bd para poder mandejarlo
//insert into tbl_users values ('11','jhon',aes_encrypt('12345678','jhon'));
//select cast(aes_decrypt(pas_usu, '${userBody}') as char) from tbl_users WHERE usu_usu = '${userbody}';
app.post('/verify-login', (req, res) => {
  let userBody= req.body.user
  let passwordBody= req.body.password
  
  connection.query(`select cast(aes_decrypt(pas_usu, '${userBody}') as char) from tbl_users WHERE usu_usu = '${userBody}'`, function(err, rows, fields) {
    if (err) throw err;
    if (rows.length > 0 && !null ) {
      let key = Object.keys(rows[0])[0]
      console.log(rows[0][key] , ' ', passwordBody)
  if (passwordBody == rows[0][key]) {
    res.json({ auth: true, msj: "login-sucess"  })
  }else{
    res.json({ auth:false, msj: "user invalid" })
  }

  }else{
    res.json({ auth:false, msj: "user inexist" })
  }

  
});
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



