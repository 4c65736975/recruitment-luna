/**
 * ModuleEditDialog.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Module } from "@/models/Module";

export interface IModuleEditDialogInput {
  name?: string
  description?: string
  targetTemperature?: number
}

export interface IModuleEditDialogProps {
  module: Module
  isOpen: boolean
  onSave: (e: React.FormEvent<HTMLFormElement>) => void
  onCancel: (e: React.MouseEvent<HTMLButtonElement>) => void
}