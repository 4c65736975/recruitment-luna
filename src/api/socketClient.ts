/**
 * socketClient.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { io } from "socket.io-client";

export const socket = io(import.meta.env.VITE_SOCKET_URL);

socket.on("connect", () => {
  console.info("Socket connected");
});

socket.on("disconnect", () => {
  console.info("Socket disconnected");
});