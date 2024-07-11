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

interface IUseModuleResponse {
  module: Module | null
  loading: boolean
}

const getModule = async (moduleId: string) => {
  const response = await api.get(`${MODULES_ENDPOINT}/${moduleId}`);

  return response.data;
};

export const useModule = (moduleId: string): IUseModuleResponse => {
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

  React.useEffect(() => {
    if (!loading && module && module.available) {
      const onModuleUpdate = (message: IModuleUpdateMessage[]) => {
        const update = message.find(msg => msg.id === module.id);

        if (update) {
          setModule({...module, currentTemperature: update.temperature});
        }
      };

      socket.on("moduleUpdate", onModuleUpdate);

      return () => {
        socket.off("moduleUpdate", onModuleUpdate);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return { module, loading };
};