/**
 * SegmentedButton.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { ToggleButton } from "@/components/Button";
import { ISegmentedButtonProps } from "./SegmentedButton.types";
import { useSegmentedButtonStyles } from "./SegmentedButton.styles";
import { useSegmentedContext } from "../SegmentedContext";

export const SegmentedButton: React.FC<ISegmentedButtonProps> = (props) => {
  const { value, ...restProps } = props;

  const { onSelect, onRegister, onUnregister, selectedValue } = useSegmentedContext();

  const styles = useSegmentedButtonStyles();

  const isSelected = value === selectedValue;

  const onSegmentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onSelect(event, { value });
  };

  React.useEffect(() => {
    onRegister({ value });

    return () => {
      onUnregister({ value });
    };
  }, [onRegister, onUnregister, value]);

  return (
    <ToggleButton
      aria-selected={isSelected}
      className={styles.root}
      appearance="subtle"
      checked={isSelected}
      onClick={onSegmentClick}
      {...restProps}/>
  );
};