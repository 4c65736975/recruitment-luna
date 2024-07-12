/**
 * updateModule.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { api } from "@/api/apiClient";
import { MODULES_ENDPOINT } from "@/api/endpoints";
import { IModuleEditDialogInput } from "../components/ModuleEditDialog";
import { Module } from "@/models/Module";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getModuleQueryOptions } from "./getModule";
import { getModulesQueryOptions } from "./getModules";

interface IUpdateModuleProps {
  moduleId: string
  data: IModuleEditDialogInput
}

const updateModule = async (props: IUpdateModuleProps): Promise<Module> => {
  const { moduleId, data } = props;

  return api.patch(`${MODULES_ENDPOINT}/${moduleId}`, data);
};

export const useUpdateModule = () => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async (module) => {
      const queryKey = getModuleQueryOptions(module.moduleId).queryKey;

      await queryClient.cancelQueries({ queryKey });

      const prevModule = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (oldModule) => {
        if (oldModule) {
          return { ...oldModule, ...module.data };
        }

        return oldModule;
      });

      return prevModule;
    },
    onError: (_error, updateModule, context) => {
      queryClient.setQueryData(getModuleQueryOptions(updateModule.moduleId).queryKey, context);
    },
    onSettled: (data, _error, variables) => {
      if (data) {
        queryClient.invalidateQueries({
          queryKey: getModuleQueryOptions(data.id).queryKey
        });

        queryClient.invalidateQueries({
          queryKey: getModulesQueryOptions().queryKey
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: getModuleQueryOptions(variables.moduleId).queryKey
        });
      }
    },
    mutationFn: updateModule
  });
};