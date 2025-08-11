import express from "express";
import serverless from "serverless-http";

const app = express();

let config = {
  primaryColor: "#2196F3",
  secondaryColor: "#4CAF50",
  appTitle: "Mon Application Dynamique",
  logoUrl: "https://monserveur.com/logo.png"
};

app.use(express.json());

// Ici on ne met PAS /api car Vercel le gère déjà
app.get("/config", (_, res) => {
  res.json(config);
});

app.post("/config", (req, res) => {
  config = { ...config, ...req.body };
  res.json({ message: "Configuration mise à jour", config });
});

export default serverless(app);
