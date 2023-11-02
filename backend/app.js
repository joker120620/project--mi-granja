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
app.post('/verify-login', (req, res) => {
  let userBody= req.body.user
  let passwordBody= req.body.password
  
  connection.query(`SELECT usu_usu, pas_usu FROM tbl_users WHERE usu_usu = "${userBody}" AND pas_usu = "${passwordBody}"`, function(err, rows, fields) {
    if (err) throw err;
    if (rows.length > 0) {
      let pass_usu = rows[0].pas_usu
  if (userBody == rows[0].usu_usu && comparePassword(passwordBody , pass_usu )) {
    res.json({ auth: true, msj: "login-sucess"  })
  }

  }else{
    res.json({ auth:false, msj: "user invalid" })
  }

  
});
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



