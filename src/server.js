//import { createServer } from "node:http";

// criando o sevidor e dentro dela uma função como parametro
//const server = createServer((request, response) => {
//response.write("Hello World");

// return response.end();
//});

//devolve o metodo listen e informa a porta
//server.listen(3333);
import { fastify } from "fastify";
//import { DatabaseMemory } from "./database-memory.js";
import { DatabasePostgres } from "./models/database-postgres.js";

const server = fastify();
//const database = new DatabaseMemory();
const database = new DatabasePostgres();

// Rota para criar um vídeo
server.post("/videos", async (request, response) => {
  const { title, description, duration } = request.body;

  await database.create({ title, description, duration });

  return response.status(201).send({ message: "Video created successfully" });
});

// Rota para listar os vídeos
server.get("/videos", async (request, response) => {
  const search = request.query.search;
  const videos = await database.list(search);
  return response.send(videos);
});

// Rota para atualizar um vídeo
server.put("/videos/:id", async (request, response) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  try {
    await database.update(videoId, { title, description, duration });
    return response.status(200).send({ message: "Video updated successfully" });
  } catch (error) {
    return response.status(404).send({ message: error.message });
  }
});

// Rota para deletar um vídeo
server.delete("/videos/:id", async (request, response) => {
  const videoId = request.params.id;

  try {
    await database.delete(videoId);
    return response.status(204).send();
  } catch (error) {
    return response.status(404).send({ message: error.message });
  }
});

server.listen(
  { host: "0.0.0.0", port: process.env.PORT ?? 3333 },
  (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server running at ${address}`);
  }
);
