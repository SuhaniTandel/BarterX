import http from "http"; 
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.write("Welcome to the BarterX");
        res.end();
    } else if (req.url === "/api/products") {
        res.writeHead(200, {"Content-Type": "application/json"});
        let payload = [
            { "id": 1, "name": "Used Laptop", "price": 300 },
            { "id": 2, "name": "Second-hand Bicycle", "price": 50 }
        ]
        res.write(JSON.stringify(payload));
        res.end();
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
    } else if (req.url === "/chat") {
        const contact_info = "Your Chat with fellow Traders";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/contact") {
        const contact_info = "Contact Us at";
        res.write(contact_info);
        res.end();
    } else if (req.url === "/chat") {
        const contact_info = "Your Chat with fellow Traders";
        res.write(contact_info);
        res.end();
    } else {
        res.writeHead(404, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            "error": "Page not found",
            "statusCode": 404
        }));
    }
});
let PORT = 8050;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});