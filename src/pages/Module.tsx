/**
 * Module.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { TModuleParams, useModule } from "@/features/modules/api";
import { ModuleDetails, ModuleEditDialog, ModuleHistory } from "@/features/modules/components";
import { PageLayout } from "@/layouts/Page";
import { EditRegular } from "@fluentui/react-icons";
import { useParams } from "@/hooks";

export const ModulePage: React.FC = () => {
  const { id } = useParams<TModuleParams>();
  const { data } = useModule(id);

  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);

  if (!data) {
    return null;
  }

  const onEditDialogButtonClick = () => {
    setIsEditDialogOpen(!isEditDialogOpen);
  };

  return (
    <PageLayout
      name={data.name}
      breadcrumbList={[
        { name: "Moduły", path: "/modules" },
        { name: "", path: "" }
      ]}
      extraContent={
        <Button
          icon={EditRegular}
          appearance="primary"
          disabled={!data.available}
          onClick={onEditDialogButtonClick}>

          Edytuj
        </Button>
      }>

      <ModuleEditDialog
        module={data}
        isOpen={isEditDialogOpen}
        onSave={onEditDialogButtonClick}
        onCancel={onEditDialogButtonClick}/>

      <ModuleDetails module={data}/>

      <Text preset="Title3">
        Historia temperatur
      </Text>

      <ModuleHistory moduleId={data.id}/>
    </PageLayout>
  );
};