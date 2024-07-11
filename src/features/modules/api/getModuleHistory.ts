/**
 * getModuleHistory.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { api } from "@/api/apiClient";
import { MODULES_ENDPOINT } from "@/api/endpoints";
import { ModuleHistory, TModuleHistoryMode } from "@/models/Module";

const getModuleHistoryTemp = async (moduleId: string, mode: TModuleHistoryMode, start: string, stop: string) => {
  const response = await api.get(`${MODULES_ENDPOINT}/${moduleId}/history`, {
    params: {
      mode: mode,
      start: start,
      stop: stop
    }
  });

  return response.data;
};

export const useModuleHistory = (moduleId: string, mode: TModuleHistoryMode, start: string, stop: string) => {
  const [history, setHistory] = React.useState<ModuleHistory[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getModuleHistoryTemp(moduleId, mode, start, stop);

        setHistory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (mode && start && stop) {
      getData();
    }
  }, [mode, moduleId, start, stop]);

  return { history, loading };
};