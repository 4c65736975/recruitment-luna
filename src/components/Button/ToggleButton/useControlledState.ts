/**
 * useControlledState.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

export const useControlledState = (controlledValue: boolean | undefined, defaultValue: boolean) => {
  const [state, setState] = React.useState(defaultValue);

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : state;

  const setValue = (newValue: boolean) => {
    if (!isControlled) {
      setState(newValue);
    }
  };

  return [value, setValue] as const;
};