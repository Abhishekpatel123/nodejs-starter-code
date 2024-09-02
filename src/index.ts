import express from "express";
import expressApp from "./express-app";
import "./databases/postgres/connection";
import config from "./configs";

const app = express();

const PORT = config.env.PORT;

expressApp(app);

// - Listening
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
