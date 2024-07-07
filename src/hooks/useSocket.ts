/**
 * useSocket.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { SocketContext } from "../contexts/SocketContext";
import { Socket } from "socket.io-client";

export const useSocket = (): Socket => {
  const context = React.useContext(SocketContext);

  if (!context) {
    throw new Error("useSocket must be used within a SocketProvider");
  }

  return context;
};