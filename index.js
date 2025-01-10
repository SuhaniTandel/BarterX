import http from 'http';
import fs from 'fs';

// Starting port
let port = 8050;

const server = http.createServer((req, res) => {
    // Log request details to a file
    fs.appendFileSync(
        './log.txt',
        `GET Request from ${req.url} by ${req.method} Method at ${new Date().toISOString()}\n`
    );

    let uri = req.url;
    switch (uri) {
        case '/':
            res.write("Welcome to the BarterX");
            break;
        case '/products':
            res.write("Here are the products up for Sale in BarterX");
            break;
        case '/login':
            res.write("Login to the BarterX");
            break;
        case '/signup':
            res.write("Sign up to the BarterX");
            break;
        case '/profile':
            res.write("Trader Profile");
            break;
        case '/cart':
            res.write("Your Shopping Cart is here");
            break;
        case '/checkout':
            res.write("Let's start shipping");
            break;
        case '/orders':
            res.write("Your Orders are here");
            break;
        case '/categories':
            res.write("Browse Categories");
            break;
        case '/chat':
            res.write("Your Chat with fellow Traders");
            break;
        case '/contact':
            res.write("Contact Us at");
            break;
        case '/about':
            res.write("The modern approach to trading our commodities");
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ error: "Page not found", statusCode: 404 }));
            break;
    }

    res.end();
});

const startServer = () => {
    server.listen(port, () => {
        console.log(`Server initiated on port ${port}...`);
        console.log(`http://localhost:${port}/`);
    });
};

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${port} is in use. Trying another port...`);
        port++;
        startServer();
    } else {
        console.error(err);
    }
});

startServer();
