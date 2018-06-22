// console.log('hello word');
// setTimeout(() => {
//     console.log(123);
// }, 1000);
// var fs = require('fs');
//读取文件
// fs.readFile('01-node.html','utf-8',function (err,data){
//     if(!err){
//       console.log(data);
//     }
// })
//写文件
// fs.writeFile('01-node.html','我是新增内容',function(err,data){
//   console.log(err);
// })

//加载模块
var http = require('http');
var fs = require('fs');
//创建服务器
var server = http.createServer();
server.on('request',function(req,res){
  // res.end('hello word');
  fs.readFile('./01-node.html',function(err,data){
      if(!err){
        res.end(data.toString());
      }
  })

  
   
  
})
// server.watch('./01-node.html');
server.listen(3000,function(){
  console.log('发送请求');
})



