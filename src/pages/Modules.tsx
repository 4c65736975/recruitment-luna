/**
 * Modules.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { PageLayout } from "@/layouts/Page";
import { ISegmentSelectData, Segmented, SegmentedButton, TSelectSegmentEvent } from "@/components/Segmented";
import { GridRegular, ListRegular } from "@fluentui/react-icons";
import { useLocalStorage } from "@/hooks";
import { ModulesList, TModulesListMode } from "@/features/modules/components";

export const ModulesPage: React.FC = () => {
  const storage = useLocalStorage();

  const [listMode, setListMode] = React.useState<TModulesListMode>(storage.get("listMode", "list"));

  const onSegmentSelect = (_event: TSelectSegmentEvent, data: ISegmentSelectData) => {
    const selected = data.value as TModulesListMode;

    setListMode(selected);

    storage.set("listMode", selected);
  };

  return (
    <PageLayout
      name="Moduły"
      extraContent={
        <Segmented
          defaultSelectedValue={listMode}
          onSegmentSelect={onSegmentSelect}>

          <SegmentedButton
            value="grid"
            icon={GridRegular}/>

          <SegmentedButton
            value="list"
            icon={ListRegular}/>
        </Segmented>
      }>

      <ModulesList mode={listMode}/>
    </PageLayout>
  );
};