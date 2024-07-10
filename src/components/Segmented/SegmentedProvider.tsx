/**
 * SegmentedProvider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { ISegmentedContextProviderProps, ISegmentedContextValue, ISegmentRegisterData, ISegmentSelectData, TSelectSegmentEvent } from "./Segmented.types";
import { SegmentedContext } from "./SegmentedContext";

export const SegmentedProvider: React.FC<ISegmentedContextProviderProps> = (props) => {
  const { children, defaultSelectedValue, onSegmentSelect } = props;

  const [selectedValue, setSelectedValue] = React.useState(defaultSelectedValue);

  const onSelect = React.useCallback((event: TSelectSegmentEvent, data: ISegmentSelectData) => {
    setSelectedValue(data.value);
    onSegmentSelect?.(event, data);
  }, [onSegmentSelect]);

  const registeredSegments = React.useRef<Record<string, ISegmentRegisterData>>({});

  const onRegister = React.useCallback((data: ISegmentRegisterData) => {
    registeredSegments.current[JSON.stringify(data.value)] = data;
  }, []);

  const onUnregister = React.useCallback((data: ISegmentRegisterData) => {
    delete registeredSegments.current[JSON.stringify(data.value)];
  }, []);

  const context: ISegmentedContextValue = {
    onSelect: onSelect,
    onRegister: onRegister,
    onUnregister: onUnregister,
    selectedValue: selectedValue
  };

  return (
    <SegmentedContext.Provider value={context}>
      {children}
    </SegmentedContext.Provider>
  );
};