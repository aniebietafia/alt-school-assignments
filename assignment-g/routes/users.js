const usersRoute = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/createUser" && method === "POST") {
    console.log("User added to database!!!");
  } else if (url === "/authenticateUser" && method === "POST") {
    console.log("User authenticated!!!");
  } else if (url === "getUsers" && method === "GET") {
    console.log("List of Users!");
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Resource not found" }));
  }
};

module.exports = usersRoute;
