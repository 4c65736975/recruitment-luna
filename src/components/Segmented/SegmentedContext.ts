/**
 * SegmentedContext.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { ISegmentedContextValue } from "./Segmented.types";

const SegmentedContextDefaultValue: ISegmentedContextValue = {
  onSelect: () => {},
  onRegister: () => {},
  onUnregister: () => {},
  selectedValue: undefined
};

export const SegmentedContext = React.createContext<ISegmentedContextValue>(SegmentedContextDefaultValue);

export const useSegmentedContext = () => React.useContext(SegmentedContext);