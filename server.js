const WebSocket = require("ws");

const port = 8080;
const wss = new WebSocket.Server({ port });

console.log(`[WebSocket Server] Running at ws://localhost:${port}`);

wss.on("connection", (ws) => {
    console.log("[WebSocket Server] Client connected successfully!");

    // Send an initial welcome message to Angular
    ws.send(
        JSON.stringify({
            status: "connected",
            message: "Hello from WebSocket Server on port 8080!",
            timestamp: new Date().toISOString(),
        }),
    );

    const interval = setInterval(() => {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(
                JSON.stringify({
                    type: "update",
                    data: `Server update at ${new Date().toLocaleTimeString()}`,
                }),
            );
        }
    }, 5000);

    // Handle incoming messages from Angular
    ws.on("message", (message) => {
        console.log(
            "[WebSocket Server] Received from Angular:",
            message.toString(),
        );
    });

    // Handle client disconnection
    ws.on("close", () => {
        console.log("[WebSocket Server] Client disconnected");
        clearInterval(interval);
    });

    ws.on("error", (err) => {
        console.error("[WebSocket Server] Error:", err);
        clearInterval(interval);
    });
});