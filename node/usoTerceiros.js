const http = require('http')
http.createServer((req, resp) => {
    req.write('Bom dia')
    resp.end()
}).listen()