// packages
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

// external file
const router = require("./routes")


// config server
const app = express();
const POST = 5000;
app.use(cors());

const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// router
app.use('/', router);

// start server
io.on("connection", (socket) => {
    // ...
    console.log("connection!!!");
});

httpServer.listen(POST, () => {
    console.log(`Listening at port ${POST}`);
});