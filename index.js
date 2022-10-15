const express = require('express');
const app = express();

app.listen(8080, function () {
    console.log('listening on 8080')
})

app.get("/", (req, res) => {

//Hello World 데이터 반환
res.send("Hello World");
});

// mssql 연동
var sql = require('mssql');
var config = {
    user: 'pswel1',
    password: '1234',
    server: '221.154.8.88',
    database: 'Techon',
    stream: true,
    encrypt: false
}

sql.connect(config, function(err){
    if(err){
        return console.error('error : ', err);
    }else{
        console.log('MSSQL 연결 완료')
        var request = new sql.Request();
        request.stream = true;
        
        q = 'select * from equipment';
        request.query(q, (err, recordset) => {
            if(err){
                return console.log('query error :',err)
            }else{
                return console.log('recordset', recordset)
            }
        });
        
        var result = [];
        request.on('error', function(err){
            console.log(err); 
        })
        .on('row', (row) => {
            console.log('row',row.equipmentname)
            result.push(row)
        })
        .on
        ('done', () => { // 마지막에 실행되는 부분
            // console.log('result :', result)
            // res.render('list',{'posts' : result})
        });
        
        // console.log('result',result)
    }
    
    
})

// app.get('/list', (req, res) => {
   
// });
