import express from "express";
import axios from "axios";

//JSON-SERVER START
import jsonServer from "json-server";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
//JSON-SERVER END

const app = express();

app.use(express.json());

app.get("/usuarios", async (req, res) => {
  const consulta = await axios
    .get("http://localhost:3001/usuarios/")
    .then((res) => {
      console.log("Consulta realizada");
      return (res = res.data);
    });

  return res.json(consulta);
});

server.listen(3001, () => console.log("server"));

app.listen(8800, () => console.log("app"));
