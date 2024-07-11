/**
 * getModules.ts
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
import { queryOptions, useQuery, useQueryClient } from "@tanstack/react-query";

const getModules = (): Promise<Module[]> => {
  return api.get(MODULES_ENDPOINT);
};

const getModulesQueryOptions = () => {
  return queryOptions({
    queryKey: ["modules"],
    queryFn: getModules
  });
};

export const useModules = () => {
  const queryClient = useQueryClient();

  React.useEffect(() => {
    const onModuleUpdate = (updateMessage: IModuleUpdateMessage[]) => {
      queryClient.setQueryData<Module[]>(["modules"], (prevData) => {
        if (!prevData) {
          return [];
        }

        return prevData.map(module => {
          if (!module.available) {
            return module;
          }

          const updated = updateMessage.find(msg => msg.id === module.id);

          if (updated) {
            return { ...module, currentTemperature: updated.temperature };
          }

          return module;
        });
      });
    };

    socket.on("moduleUpdate", onModuleUpdate);

    return () => {
      socket.off("moduleUpdate", onModuleUpdate);
    };
  }, [queryClient]);

  return useQuery({
    ...getModulesQueryOptions()
  });
};