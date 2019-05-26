const express = require("express");
const http = require("http");
const https = require("https");
const app = express();

app.get("*", (req, res) => {
	res.json({
		statusCode: 200,
		status: "OK"
	});
});

const server = http.createServer(app);

server.listen(8080, () => {
	const srv = server.address();
	console.log("Listening on: " + srv.address + ":" + srv.port);
});