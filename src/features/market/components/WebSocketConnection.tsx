import { useEffect } from "react";

const WebSocketConnection = () => {
  useEffect(() => {
    const socket = new WebSocket("wss://your-websocket-url");

    socket.onopen = () => {
      console.log("WebSocket connection established");

      const message = {
        action: "SUBSCRIBE",
        type: "index_cc_v1_latest_tick",
        groups: ["VALUE", "CURRENT_HOUR"],
        market: "cadli",
        instruments: ["BTC-USD"],
      };

      socket.send(JSON.stringify(message));
      console.log("Message sent:", message);
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("Message received:", data);
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return null;
};

export default WebSocketConnection;