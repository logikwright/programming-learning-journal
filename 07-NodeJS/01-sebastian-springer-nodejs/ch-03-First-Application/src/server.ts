import { createServer } from "node:http";

const server = createServer((request, response) => {
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8'});

    const body = `<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Node.js Demo</title>
        </head>
        <body>
            <h1 style="color:green">Hello World</h1>
        </body>
    </html>`;

    response.end(body);
});

server.listen(8080, () => {
    const address = server.address();

    if (address && typeof address !== "string") {
        console.log(
            `Server is listening on http://localhost:${address.port}`
        );
    }
});
