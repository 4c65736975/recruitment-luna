/**
 * apiClient.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Axios from "axios";

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

api.interceptors.response.use(
  (response) => response.data
);