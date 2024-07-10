/**
 * Segmented.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TSegmentValue } from "./SegmentedButton";

export interface ISegmentRegisterData {
  value: TSegmentValue
}

export type TRegisterSegmentHandler = (data: ISegmentRegisterData) => void;

export interface ISegmentSelectData {
  value: TSegmentValue
}

export type TSelectSegmentEvent<E = HTMLButtonElement> = React.MouseEvent<E>;

export type TSelectSegmentEventHandler = (event: TSelectSegmentEvent, data: ISegmentSelectData) => void;

export interface ISegmentedContextValue {
  onSelect: TSelectSegmentEventHandler
  onRegister: TRegisterSegmentHandler
  onUnregister: TRegisterSegmentHandler
  selectedValue: TSegmentValue
}

export interface ISegmentedContextProviderProps extends ISegmentedProps {}

export interface ISegmentedProps {
  children: React.ReactNode
  defaultSelectedValue: TSegmentValue
  onSegmentSelect?: TSelectSegmentEventHandler
}