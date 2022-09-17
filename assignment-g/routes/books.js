const fs = require("fs");

const booksDBPath = path.join(__dirname, "db", "books.json");

const booksRoute = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    getAllBooks(req, res);
  } else if (url === "/createBook" && method === "POST") {
    addBook(req, res);
  } else if (url === "/deleteBook" && method === "DELETE") {
    console.log("Book deleted");
  } else if (url === "loanBook" && method === "POST") {
    console.log("Book loaned out");
  } else if (url === "returnBook" && method === "POST") {
    console.log("Book returned");
  } else if (url === "updateBooks" && method === "PUT") {
    console.log("Book update");
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

const getAllBooks = (req, res) => {
  fs.readFile(booksDBPath, "utf-8", (error, data) => {
    if (error) {
      console.log(error);
      res.writeHead(400);
      res.end("Resource not found");
    }

    res.end(data);
  });
};

const addBook = (req, res) => {
  const body = [];

  req.on("data", (chunk) => {
    body.push(chunk);
  });

  res.end("end", () => {
    console.log(body);
  });
};

module.exports = booksRoute;
