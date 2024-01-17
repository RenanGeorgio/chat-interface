import { useEffect, createContext, useState, useContext } from "react";
import { io, Socket } from "socket.io-client";
import { AuthContext } from "./AuthContext";

interface ServerToClientEvents {
  status_azure: (msg: string) => void;
}

interface ClientToServerEvents {
  send_message: (msg: string) => void;
}

type SocketContextType = {
  socket: Socket<ServerToClientEvents, ClientToServerEvents>
}

export const SocketContext = createContext({} as SocketContextType);

export const SocketProvider = ({ children }: any) => {

  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | any>({});
  const {user} = useContext(AuthContext);

  useEffect((): any => {
    // @ts-ignore
    const newSocket: Socket<ServerToClientEvents, ClientToServerEvents> | any = io(process.env.REACT_APP_SERVER, {
      path: '/chat',
      transports: ['websocket', 'polling'],
      query: 'username=' + user
    });

    newSocket.on("connect", () => {
      console.log("connected");
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};