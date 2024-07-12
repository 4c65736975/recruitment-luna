/**
 * getModuleHistory.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { api } from "@/api/apiClient";
import { MODULES_ENDPOINT } from "@/api/endpoints";
import { ModuleHistory, TModuleHistoryMode } from "@/models/Module";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getModuleHistory = (moduleId: string, mode: TModuleHistoryMode, start: string, stop: string): Promise<ModuleHistory[]> => {
  return api.get(`${MODULES_ENDPOINT}/${moduleId}/history`, {
    params: { mode, start, stop }
  });
};

export const getModuleHistoryQueryOptions = (moduleId: string, mode: TModuleHistoryMode, start: string, stop: string) => {
  return queryOptions({
    queryKey: ["moduleHistory", moduleId],
    queryFn: () => getModuleHistory(moduleId, mode, start, stop)
  });
};

export const useModuleHistory = (moduleId: string, mode: TModuleHistoryMode, start: string, stop: string) => {
  const startDate = new Date(start).toISOString();
  const stopDate = new Date(stop).toISOString();

  return useQuery({
    ...getModuleHistoryQueryOptions(moduleId, mode, startDate, stopDate)
  });
};