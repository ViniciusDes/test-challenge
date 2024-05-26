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
  // console.log("req", req.query);
  // if (req.query) {
  //   return res.json(
  //     await axios
  //       .get("http://localhost:3001/usuarios/", {
  //         params: req.query,
  //       })
  //       .then((res) => {
  //         return (res = res.data);
  //       })
  //   );
  // }
  const consulta = await axios
    .get("http://localhost:3001/usuarios/")
    .then((res) => {
      return (res = res.data);
    });

  return res.json(consulta);
});

// app.post("/usuarios", async (req, res) => {
//   return await axios
//     .post("http://localhost:3001/usuarios/", req.body)
//     .then((res) => {
//       return (res = res.data);
//     });
// });

server.listen(3001, () => console.log("server"));

// app.listen(8800, () => console.log("app"));
