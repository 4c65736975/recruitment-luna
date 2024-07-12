/**
 * date.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TModuleHistoryMode } from "@/models/Module";

export const formatToInputDate = (formatDate: string, mode: TModuleHistoryMode) => {
  const date = new Date(formatDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  let inputDate = `${year}-${month}-${day}`;

  if (mode === "hourly") {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    inputDate += `T${hours}:${minutes}`;
  }

  return inputDate;
};

export const getLastHourDate = () => {
  const startDate = new Date();
  const stopDate = new Date();

  startDate.setHours(startDate.getHours() - 1);

  return {
    start: startDate.toLocaleString(),
    stop: stopDate.toLocaleString()
  };
};