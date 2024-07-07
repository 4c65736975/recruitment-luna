/**
 * SocketProvider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { SocketContext } from "../contexts/SocketContext";
import { io } from "socket.io-client";

interface ISocketProviderProps {
  children: React.ReactNode
}

export const SocketProvider: React.FC<ISocketProviderProps> = ({ children }) => {
  const socket = io("http://localhost:3001", {
    transports: ["websocket"]
  });

  React.useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};