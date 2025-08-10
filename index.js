import express from "express";
const app = express();

let config = {
  primaryColor: "#2196F3",
  secondaryColor: "#4CAF50",
  appTitle: "Mon Application Dynamique",
  logoUrl: "https://monserveur.com/logo.png"
};

app.get("/config", (req, res) => {
  res.json(config);
});

app.use(express.json());
app.post("/config", (req, res) => {
  config = { ...config, ...req.body };
  res.json({ message: "Configuration mise à jour", config });
});

// PORT dynamique pour Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API démarrée sur le port ${PORT}`);
});
