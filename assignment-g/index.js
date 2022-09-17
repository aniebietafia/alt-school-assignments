const http = require("http");
const fs = require("fs");
const path = require("path");
const usersRoute = require("./routes/users");
const booksRoute = require("./routes/books");

const requestHandler = (req, res) => {
  // usersRoute(req, res);
  booksRoute(req, res);
};

const PORT = 3000;
const HOST_NAME = "localhost";

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server started on http://${HOST_NAME}:${PORT}`);
});
