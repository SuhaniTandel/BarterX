import http from "http";
import fs from "fs";
import path from "path";
const server = http.createServer((req, res) => {
    const logMessage = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
    fs.appendFile("log.txt", logMessage, () => {});

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the BarterX");
    } else if (req.url === "/api/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        const products = [
            { id: 1, name: "Used Laptop", price: 300 },
            { id: 2, name: "Second-hand Bicycle", price: 50 },
        ];
        res.end(JSON.stringify(products));
    } else if (req.url === "/login") {
        const menu_info = "Login to the BarterX";
        res.write(menu_info);
        res.end();
    } else if (req.url === "/signup") {
        const contact_info = "Sign up to the BarterX";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/profile") {
        const contact_info = "Trader Profile";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/cart") {
        const contact_info = "Your Shopping Cart is here";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/checkout") {
        const contact_info = "Let's start shipping";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/orders") {
        const contact_info = "Your Orders are here";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/categories") {
        const contact_info = "Browse Categories";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/contact") {
        const contact_info = "Contact Us at";
        res.write(contact_info);
        res.end();
    }else if (req.url === "/chat") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Your Chat with fellow Traders");
    } else if (req.url === "/contact") {
        const contact_info = "Your Chat with fellow Traders";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/about") {
        const aboutPage = `
            <!DOCTYPE html>
            <html>
            <head><link rel="stylesheet" href="/styles.css"></head>
            <body>
                <h1>About BarterX</h1>
                <p>The modern approach to trading our commodities.</p>
                <img src="/logo.png" alt="BarterX Logo">
            </body>
            </html>`;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(aboutPage);
    } else if (req.url === "/logo.png") {
        fs.readFile(path.join("public", "logo.png"), (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end("Logo not found");
            } else {
                res.writeHead(200, { "Content-Type": "image/png" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                error: "Page not found",
                statusCode: 404,
            })
        );
    }
});
let PORT = 8050;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
