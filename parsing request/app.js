const http=require('http');
const userrequestHandler=require('./user')

const server=http.createServer(userrequestHandler);

const PORT=3001;
server.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});