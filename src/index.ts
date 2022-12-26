import express from "express";
import http from "http";

async function initApp() {
  const app = express();
  app.use(express.json());
  app.get("/", (req, res) => {
    res.send("hello world - aws-server-eg");
  });
  return app;
}

async function startup() {
  const app = await initApp();
  const server = http.createServer(app);
  server.listen("3000", () =>
    console.log(`Server listening on port 3000`),
  );
}

startup();
