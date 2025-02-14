const fs=require('fs');

//synchronous call or blocking request
fs.writeFileSync('./test.txt','Hey there');

//asynchronous call or non-blocking request and it contains callback function
// fs.writeFile('./test.txt','Hey there Async',(err)=>{});


//synchronous readfile returns a result
// const result = fs.readFileSync('./contacts.txt','utf-8');
// console.log(result);


//in asynchronous readfile we have to take a call back and check if their is error if not return then    result
fs.readFile('./contacts.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
});

fs.appendFileSync("./test.txt",`${Date.now()} Hi there\n`);

// fs.cpSync("./test.txt","./copy.txt");

fs.unlinkSync("./test.txt");
