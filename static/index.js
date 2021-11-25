"use strict"
socket.emit("get_bmp", "./bmps/bit32.bmp")

socket.on("message", (message) => {
	console.log(message)
})
