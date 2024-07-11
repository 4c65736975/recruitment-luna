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

const getModules = async () => {
  const response = await api.get(MODULES_ENDPOINT);

  return response.data;
};

interface IUseModulesResponse {
  modules: Module[]
  loading: boolean
}

export const useModules = (): IUseModulesResponse => {
  const [modules, setModules] = React.useState<Module[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getModules();

        setModules(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  React.useEffect(() => {
    if (!loading && modules.length > 0) {
      const onModuleUpdate = (message: IModuleUpdateMessage[]) => {
        setModules(prevModules => prevModules.map(module => {
          if (module.available) {
            const update = message.find(msg => msg.id === module.id);

            return update ? { ...module, currentTemperature: update.temperature } : module;
          }

          return module;
        }));
      };

      socket.on("moduleUpdate", onModuleUpdate);

      return () => {
        socket.off("moduleUpdate", onModuleUpdate);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return { modules, loading };
};