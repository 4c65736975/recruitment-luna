/**
 * temperature.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const getIsCurrentTempInRange = (current: number, target: number): boolean => {
  const diff = Math.abs(target - current);

  return diff < 0.5;
};

export const toCelsius = (value: number): string => {
  return value.toFixed(1) + "°C";
};