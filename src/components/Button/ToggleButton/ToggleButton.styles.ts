/**
 * ToggleButton.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import { IToggleButtonProps } from "./ToggleButton.types";
import { webLightTheme } from "@fluentui/tokens";

const useStyles = makeStyles({
  root: {
    background: webLightTheme.colorNeutralBackground1Selected
  },
  primary: {
    background: webLightTheme.colorBrandBackgroundSelected
  },
  outline: {
    ...shorthands.borderWidth(webLightTheme.strokeWidthThicker),
    background: webLightTheme.colorTransparentBackgroundPressed
  },
  subtle: {
    background: webLightTheme.colorSubtleBackgroundPressed
  },
  transparent: {
    background: webLightTheme.colorTransparentBackgroundPressed,
    color: webLightTheme.colorNeutralForeground2BrandSelected
  }
});

export const useToggleButtonStyles = (props: Partial<IToggleButtonProps>): string => {
  const styles = useStyles();

  return mergeClasses(
    props.checked && styles.root,
    props.checked && props.appearance === "primary" && styles.primary,
    props.checked && props.appearance === "outline" && styles.outline,
    props.checked && props.appearance === "subtle" && styles.subtle,
    props.checked && props.appearance === "transparent" && styles.transparent
  );
};