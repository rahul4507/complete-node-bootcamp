const fs = require("fs");
const http = require("http");

////// ********************************************** ///////
// file = fs.readFileSync("./txt/input.txt", "utf8");

// const textOut = `these ${file} \nCreated on ${Date.now()}`;

// console.log(textOut);
// fs.writeFileSync("./txt/output.txt", textOut);

// console.log(fs.readFileSync("./txt/output.txt", "utf8"));
// lets test the async version now

// non-blocking, async version
// callback hell --> this must be handlled carefully
// fs.readFile("./txt/start.txt", "utf8", (err, data) => {
//   fs.readFile(`./txt/${data}.txt`, "utf8", (err, data2) => {
//     console.log(
//       "i am reading the read-this file text right now and it is: ",
//       data2
//     );
//     fs.readFile("./txt/append.txt", "utf8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf8", (err) => {
//         console.log("Your file has been written! 📝");
//       });
//     });
//   });
// });
// console.log("Reading file...");

// console.log("Will read file!");
// console.log("Reading file...");
// console.log("Reading file...");

// console.log("Will read file!");
// console.log("Reading file...");

// // lets test the async version now

/////////////////// ********************************************** //////////////////////
// SERVER
// gets excuted only once so no problem at all
data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);
// this excutes every time a request is made
const server = http.createServer((req, res) => {
  console.log(req.url);
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
    return;
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
    return;
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
    return;
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
    return;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server has been started");
});

// server.on((path = "/"), (req, res) => {
//   console.log("Request received");
//   res.end("Request received");
// });
