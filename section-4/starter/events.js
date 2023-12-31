const EventEmitter = require('events');
const http = require('http');
class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();


myEmitter.on('newSale', () => {
    console.log('There is a new sale!!');
});

myEmitter.on('newSale', () => {
    console.log('Customer name: Aung Aung');
});

myEmitter.on('newCustomer', () => {
    console.log('Customer name: Aung Aung');
});

myEmitter.on('newSale', salesPerson => {
    console.log(`Salesperson : ${salesPerson}`);
});

myEmitter.emit("newSale", "Johnny");
///////////////////////////////////////////////////////////////////

const server = http.createServer();
server.on('request', (req, res) => {
    console.log('Request Received!!');
    res.end("Resquest Received!!");
});

server.on('request', (req, res) => {
    console.log('Another Request!!');
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('server listening to port 8000');
});
