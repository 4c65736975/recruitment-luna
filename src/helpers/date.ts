/**
 * date.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TModuleHistoryMode } from "@/models/Module";

export const getFormattedInputDate = (isStart: boolean = true, mode: TModuleHistoryMode = "hourly") => {
  const date = new Date();

  if (mode === "daily") {
    return date.toISOString().slice(0, 10);
  } else {
    if (isStart) {
      date.setHours(date.getHours() - 1);
    }

    return date.toISOString().slice(0, 16);
  }
};