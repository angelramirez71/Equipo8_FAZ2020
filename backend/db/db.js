const mysql =require('mysql');
const mysqlConnection= mysql.createConnection({
host:'b6zhyg2epdpbpyk87ora-mysql.services.clever-cloud.com',
user:'usopfu9hssfi4psf',
password:'omlwlor0vFB6KaOP6kqW',
database:'b6zhyg2epdpbpyk87ora',
multipleStatements:true
});

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{
    console.log('base de datos conectada');
}
//ssssss
})
module.exports = mysqlConnection;