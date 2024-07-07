/**
 * SocketContext.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Socket } from "socket.io-client";

export const SocketContext = React.createContext<Socket | null>(null);