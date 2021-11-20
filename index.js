"use strict"
const fs = require("fs")
const bmp = require("bmp-js")

;(() => {
	if (process.argv.length != 3 || !process.argv[2].endsWith(".bmp"))
		return process.stderr.write(
			"You must specify a .bmp file as a path in arguments\n"
		)
	try {
		const buffer = fs.readFileSync(process.argv[2])
		const data = bmp.decode(buffer)
		process.stdout.write(`BMP resolution is ${data.width}x${data.height}\n`)
		for (let i = 0; i < 40; i += 4) {
			let r, g, b
			b = data.data.readUInt8(i + 1)
			g = data.data.readUInt8(i + 2)
			r = data.data.readUInt8(i + 3)
			process.stdout.write(`Pixel ${i / 4} RGB: ${r}, ${g}, ${b}\n`)
		}
	} catch (e) {
		process.stderr.write(`${e.message}\n`)
	}
})()
