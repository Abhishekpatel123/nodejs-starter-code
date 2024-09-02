import express, { Application } from "express";
import cors from "cors";

const expressApp = (app: Application) => {
  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  // Routes

  // - Listening
};

export default expressApp;
