const express = require("express");

const server = express();

server.get("/", (req, res) => res.send("Server is up"));

server.get("/helloworld", (req, res) => res.send("Hello, World"));

server.get("/time", (req, res) => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  const time = {
    year,
    month,
    day,
    hour,
    minute,
    second,
  };

  const json = JSON.stringify(time);

  res.setHeader("Content-Type", "application/json");
  res.send(json);
});

server.get("/salutation", (req, res) => {
  const name = req.query.name;

  res.send("Hello, " + name + "!");
});

const formBodyParser = express.urlencoded({ extended: true });

server.post("/authenticate", formBodyParser, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "mickeymouse" && password === "123123123") {
    res.send("OK :)");

    return;
  }

  res.send("KO :(");
});

server.get("/authenticate", (req, res) => {
  res.send(`<!DOCTYPE html>
        <html>
            <head>
                <title>Authenticate</title>
            </head>
            <body>
                <h1>Authenticate</h1>

                <form method="POST" action="/authenticate">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username">

                    <label for="password">Password</label>
                    <input type="password" id="password" name="password">
                    
                    <button type="submit">Go</button>
                </form>
        </html>`);
});

server.listen(8080, () => console.log("server up"));

