/**
 * getModule.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { api } from "@/api/apiClient";
import { socket } from "@/api/socketClient";
import { MODULES_ENDPOINT } from "@/api/endpoints";
import { IModuleUpdateMessage, Module } from "@/models/Module";
import { queryOptions, useQuery } from "@tanstack/react-query";

export type TModuleParams = {
  id: string
};

const getModule = (moduleId: string): Promise<Module> => {
  return api.get(`${MODULES_ENDPOINT}/${moduleId}`);
};

export const getModuleQueryOptions = (moduleId: string) => {
  return queryOptions({
    queryKey: ["module", moduleId],
    queryFn: () => getModule(moduleId)
  });
};

export const useModuleTemperature = (module: Module) => {
  const [temperature, setTemperature] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (module.available) {
      const onModuleUpdate = (updateMessage: IModuleUpdateMessage[]) => {
        const updated = updateMessage.find(msg => msg.id === module.id);

        if (updated) {
          setTemperature(updated.temperature);
        }
      };

      socket.on("moduleUpdate", onModuleUpdate);

      return () => {
        socket.off("moduleUpdate", onModuleUpdate);
      };
    }
  }, [module]);

  return temperature;
};

export const useModule = (moduleId: string) => {
  return useQuery({
    ...getModuleQueryOptions(moduleId)
  });
};