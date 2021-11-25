"use strict"
const getBmp = require("./getBmp")
const express = require("express")
const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)

app.use(express.static("./static/"))

io.on("connection", (socket) => {
	socket.send("Hello from socket")
	socket.on("get_bmp", (message) => {
		getBmp(message)
	})
})

server.listen(3000, () => {
	console.log("App listening on port 3000")
})
