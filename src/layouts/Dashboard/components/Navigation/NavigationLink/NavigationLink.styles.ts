/**
 * NavigationLink.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles, mergeClasses } from "@griffel/react";
import { INavigationLinkProps } from "./NavigationLink.types";

const useStyles = makeStyles({
  root: {
    position: "relative",
    width: "100%",
    height: "48px",
    paddingLeft: "14px",
    display: "flex",
    alignItems: "center",
    gap: webLightTheme.spacingHorizontalMNudge,
    color: webLightTheme.colorNeutralForeground2Link,
    textDecoration: "none",

    ":hover": {
      background: webLightTheme.colorNeutralBackground2Hover
    },

    ":active": {
      background: webLightTheme.colorNeutralBackground2Pressed
    },

    "&.active": {
      background: webLightTheme.colorNeutralBackground2Selected,
      color: webLightTheme.colorNeutralForeground2LinkSelected,

      ":after": {
        content: "''",
        position: "absolute",
        left: webLightTheme.spacingHorizontalXS,
        width: "4px",
        height: "40%",
        borderRadius: webLightTheme.borderRadiusSmall,
        background: webLightTheme.colorBrandBackground
      }
    },

    "@container navigation-bar-container (width < 160px)": {
      "> span": {
        display: "none"
      }
    }
  },
  disabled: {
    color: webLightTheme.colorNeutralForegroundDisabled,
    pointerEvents: "none",

    "> *": {
      color: webLightTheme.colorNeutralForegroundDisabled
    }
  }
});

export const useNavigationLinkStyles = (props: Partial<INavigationLinkProps>) => {
  const styles = useStyles();

  return mergeClasses(
    styles.root,
    props.disabled && styles.disabled
  );
};