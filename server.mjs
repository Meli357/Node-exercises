// Change the location in the response to "Mars". Run the server and make a request to it with curl using the --verbose flag.
// What is the value of the Content-Length response header?

import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

// output:
// StatusCode        : 200
// StatusDescription : OK
// Content           : {"location":"Ma
//                     rs"}
// RawContent        : HTTP/1.1 200 OK
//                     Connection:
//                     keep-alive
//                     Keep-Alive:
//                     timeout=5
//                     Content-Length:
//                      19
//                     Content-Type: a
//                     pplication/json
//                     Date: Tue, 10
//                     Jan 2023
//                     08:02:54 GMT

//                     {"location":"Ma
//                     rs"}
// Forms             : {}
// Headers           : {[Connection,
//                     keep-alive],
//                     [Keep-Alive,
//                     timeout=5], [Co
//                     ntent-Length,
//                     19],
//                     [Content-Type,
//                     application/jso
//                     n]...}
// Images            : {}
// InputFields       : {}
// Links             : {}
// ParsedHtml        : mshtml.HTMLDocu
//                     mentClass
// RawContentLength  : 19
