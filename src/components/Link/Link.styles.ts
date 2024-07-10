/**
 * Link.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles, mergeClasses } from "@griffel/react";
import { ILinkProps } from "./Link.types";

const useStyles = makeStyles({
  root: {
    fontSize: webLightTheme.fontSizeBase300,
    lineHeight: webLightTheme.lineHeightBase300,
    fontFamily: webLightTheme.fontFamilyBase,
    fontWeight: webLightTheme.fontWeightRegular,
    color: webLightTheme.colorBrandForegroundLink,
    textDecoration: "none",

    ":hover": {
      color: webLightTheme.colorBrandForegroundLinkHover,
      textDecoration: "underline"
    },

    ":active": {
      color: webLightTheme.colorBrandForegroundLinkPressed
    }
  },
  subtle: {
    color: webLightTheme.colorNeutralForeground2,

    ":hover": {
      color: webLightTheme.colorNeutralForeground2Hover
    },

    ":active": {
      color: webLightTheme.colorNeutralForeground2Pressed
    }
  },
  disabled: {
    color: webLightTheme.colorNeutralForegroundDisabled,
    cursor: "not-allowed",
    pointerEvents: "none"
  }
});

export const useLinkStyles = (props: Partial<ILinkProps>): string => {
  const styles = useStyles();

  return mergeClasses(
    styles.root,
    props.appearance === "subtle" && styles.subtle,
    props.disabled && styles.disabled,
    props.className
  );
};