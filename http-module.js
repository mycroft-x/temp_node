const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Welcome to our home page.')
    }
    if (req.url === '/about') {
        res.end('Here is our short history.')
    }
    res.end(`<h1> Oops! </h1>
    <h3>We noget wetin you dey find <a href='/'>Go home</a></h3>
    `)
})

server.listen(5000)
