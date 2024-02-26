import express from "express";
import users from './routes/users.routes'
import swaggerDocs from "./utils/swagger";
import agents from "./routes/agents.routes";
import communes from "./routes/communes.routes";
import ong from "./routes/ong.routes";
import personnes from "./routes/personnes.routes";
import quartiers from "./routes/quartiers.routes";
import residence from "./routes/residence.routes";
import role from "./routes/role.routes";
import vulnerabilite from "./routes/vulnerabilite.routes";
import avoir from "./routes/avoir.routes";

const { sequelize, connect } = require("./utils/connect");
let cors = require("cors");
const port = 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
  })
);
connect();
agents(app);
avoir(app);
communes(app);
 ong(app);
personnes(app);
quartiers(app); 
residence(app);
 role(app);
vulnerabilite(app);
 users(app);

swaggerDocs(app);


    app.use("/", (req, res) => {
        res.send(`api ${port} et la documentation se trouve <a href="/docs">ici</a>`);
      });
      app.use(({ res }) => {
          res?.status(404).json({
            message: "impossible de trouver la ressousrce demandé",
          });
        });
      
      console.log(`Server is running at ${port}`);
      
      app.listen(port, () => console.log(`Server running on port ${port}`));








