/**
 * Button.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Text from "../Text/Text";
import { mergeClasses } from "@griffel/react";
import { useButtonStyles } from "./Button.styles";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = (props) => {
  const { children, icon, iconPosition, appearance, shape, className, ...restProps } = props;

  const styles = useButtonStyles({
    appearance: appearance,
    shape: shape,
    iconOnly: children === undefined
  });

  return (
    <button className={mergeClasses(styles, className)} {...restProps}>
      {icon && iconPosition !== "after" && React.createElement(icon, { fontSize: 20 })}
      {children && <Text weight="semibold">{children}</Text>}
      {icon && iconPosition === "after" && React.createElement(icon, { fontSize: 20 })}
    </button>
  );
};

export default Button;