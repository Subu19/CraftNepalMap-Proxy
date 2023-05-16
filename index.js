require("dotenv").config();
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "http://play.craftnepal.net:8169/",
    changeOrigin: true,
  })
);
app.listen(process.env.PORT);
