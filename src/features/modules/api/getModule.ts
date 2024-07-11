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

export type TModuleParams = {
  id: string
};

const getModule = async (moduleId: string) => {
  const response = await api.get(`${MODULES_ENDPOINT}/${moduleId}`);

  return response.data;
};

export const useModuleTemperature = (module: Module) => {
  const [temperature, setTemperature] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (module.available) {
      const onModuleUpdate = (message: IModuleUpdateMessage[]) => {
        const update = message.find(msg => msg.id === module.id);

        if (update) {
          setTemperature(update.temperature);
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
  const [module, setModule] = React.useState<Module | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const data = await getModule(moduleId);

        setModule(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [moduleId]);

  return { module, loading };
};