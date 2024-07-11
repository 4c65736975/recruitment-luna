/**
 * Module.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface Module {
  id: string
  name: string
  description?: string
  currentTemperature?: number
  targetTemperature: number
  available: boolean
}

export interface IModuleUpdateMessage {
  id: string
  temperature: number
}