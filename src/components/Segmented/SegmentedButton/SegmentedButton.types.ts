/**
 * SegmentedButton.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IToggleButtonProps } from "@/components/Button/ToggleButton";

export type TSegmentValue = unknown;

export interface ISegmentedButtonProps extends Omit<IToggleButtonProps, "value" | "checked"> {
  value: TSegmentValue
}