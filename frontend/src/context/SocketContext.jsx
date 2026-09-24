import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = () => useContext(SocketContext);

const rawBaseUrl = import.meta.env.VITE_API_URL || "https://student-gigs.onrender.com";
const SOCKET_URL = rawBaseUrl.replace(/\/api\/?$/, "").replace(/\/+$/, "");

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(SOCKET_URL, {
      withCredentials: true,
      autoConnect: true,
      reconnectionAttempts: 5,
    });

    setSocket(newSocket);

    newSocket.on("connect_error", (err) => {
      console.log("Socket connection error:", err.message);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};
