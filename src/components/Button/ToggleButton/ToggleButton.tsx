/**
 * ToggleButton.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Button } from "../Button";
import { IToggleButtonProps } from "./ToggleButton.types";
import { useToggleButtonStyles } from "./ToggleButton.styles";
import { useControlledState } from "./useControlledState";

export const ToggleButton: React.FC<IToggleButtonProps> = (props) => {
  const { checked, children, ...restProps } = props;

  const [state, setState] = useControlledState(checked, false);

  const styles = useToggleButtonStyles({
    checked: state,
    ...restProps
  });

  const onButtonClick = () => {
    setState(!state);
  };

  return (
    <Button
      aria-pressed={state}
      className={styles}
      onClick={onButtonClick}
      {...restProps}>

      {children}
    </Button>
  );
};