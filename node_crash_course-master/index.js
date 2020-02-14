// const everytihingFromPersonModule = require("./person"); //- common JS way to importing
// // import Person from './person'; - ES6 way of importing - won't work in a normal node project - needs a plugin like Babel to run such a command which converts code to ES6 JS
// const PersonClass = everytihingFromPersonModule.Person;
// console.log(everytihingFromPersonModule.DEFAULT_NAME);
// const person1 = new PersonClass("Farhat", 25);
// person1.greeting();

const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     console.log("home page requested");
  //     fs.readFile(
  //       path.join(__dirname, "public", "index.html"),
  //       (err, content) => {
  //         if (err) throw err;
  //         res.writeHead(200, { "Content-Type": "text/html" });
  //         res.end(content);
  //       }
  //     );
  //   }

  //   if (req.url === "/api/users") {
  //     console.log("users requested");
  //     const users = [
  //       { name: "Bob Smith", age: 40 },
  //       { name: "John Doe", age: 30 }
  //     ];
  //     res.writeHead(200, { "Content-Type": "application/json" });
  //     res.end(JSON.stringify(users));
  //   }

  //   Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // Extension of file
  let extname = path.extname(filePath);

  // Initial content type
  let contentType = "text/html";

  // Check ext and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  // Check if contentType is text/html but no .html file extension
  if (contentType == "text/html" && extname == "") filePath += ".html";

  // log the filePath
  console.log(filePath);

  // Read File
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        // Page not found
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        //  Some server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));