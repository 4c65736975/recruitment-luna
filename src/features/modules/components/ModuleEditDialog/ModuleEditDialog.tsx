/**
 * ModuleEditDialog.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Dialog } from "@/components/Dialog";
import { Button } from "@/components/Button";
import { useUpdateModule } from "../../api";
import { IModuleEditDialogInput, IModuleEditDialogProps } from "./ModuleEditDialog.types";
import { useModuleEditDialogStyles } from "./ModuleEditDialog.styles";
import { ModuleHistoryFilter } from "../ModuleHistory/ModuleHistoryFilters/ModuleHistoryFilter";

export const ModuleEditDialog: React.FC<IModuleEditDialogProps> = (props) => {
  const { module, isOpen, onSave, onCancel } = props;

  const styles = useModuleEditDialogStyles();

  const updateModule = useUpdateModule();

  const [formValues, setFormValues] = React.useState<IModuleEditDialogInput>({});

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(formValues).length > 0) {
      updateModule.mutate({
        moduleId: module.id,
        data: getUpdatedValues()
      });
    }

    setFormValues({});
    onSave(e);
  };

  const getUpdatedValues = () => {
    let updated: IModuleEditDialogInput = {};

    (Object.keys(formValues) as (keyof IModuleEditDialogInput)[]).forEach(key => {
      if (formValues[key] !== module[key] && formValues[key] !== undefined) {
        updated = { ...updated, [key]: formValues[key] };
      }
    });

    return updated;
  };

  const onNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, name: e.target.value });
  };

  const onDescriptionInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.trim() === "") {
      e.target.value = "";
    }

    setFormValues({ ...formValues, description: e.target.value });
  };

  const onTargetTempInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, targetTemperature: Number(e.target.value) });
  };

  // Note: <input>, <form> and other elements should be separate custom reusable components for better maintainability and reusability.
  return (
    <Dialog
      title={`Parametry (${module.name})`}
      isOpen={isOpen}
      actions={
        <>
          <Button onClick={onCancel}>
            Anuluj
          </Button>

          <Button
            type="submit"
            form="moduleEditForm"
            appearance="primary">

            Zapisz
          </Button>
        </>
      }>

      <form
        id="moduleEditForm"
        onSubmit={onFormSubmit}
        className={styles.root}>

        <ModuleHistoryFilter
          id="name"
          label="Nazwa">

          <input
            id="name"
            type="text"
            defaultValue={module.name}
            required
            pattern="\S.*"
            title="Nazwa nie może być pusta, ani składać się z samych spacji!"
            onChange={onNameInputChange}/>
        </ModuleHistoryFilter>

        <ModuleHistoryFilter
          id="temp"
          label="Docelowa temperatura">

          <input
            id="temp"
            type="number"
            min={0}
            max={40}
            step={0.1}
            required
            defaultValue={module.targetTemperature}
            onChange={onTargetTempInputChange}/>
        </ModuleHistoryFilter>

        <ModuleHistoryFilter
          id="description"
          label="Opis">

          <textarea
            id="description"
            form="moduleEditForm"
            defaultValue={module.description}
            required
            title="Opis nie może być pusty, ani składać się z samych spacji!"
            onChange={onDescriptionInputChange}/>
        </ModuleHistoryFilter>
      </form>
    </Dialog>
  );
};