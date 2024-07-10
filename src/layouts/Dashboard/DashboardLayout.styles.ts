/**
 * DashboardLayout.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useDashboardLayoutStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  titleBarContainer: {
    height: "48px",
    minHeight: "48px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: webLightTheme.colorBrandBackground,
    color: webLightTheme.colorNeutralForegroundOnBrand,

    "> *": {
      color: webLightTheme.colorNeutralForegroundOnBrand
    }
  },
  titleBarNavigationButton: {
    minWidth: "48px",
    maxWidth: "48px",
    height: "100%",
    borderRightColor: webLightTheme.colorCompoundBrandStrokePressed,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorCompoundBrandForeground1Hover,
      borderRightColor: webLightTheme.colorCompoundBrandStrokePressed,
      color: webLightTheme.colorNeutralForegroundOnBrand
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorCompoundBrandForeground1Pressed,
      borderRightColor: webLightTheme.colorCompoundBrandStrokePressed,
      color: webLightTheme.colorNeutralForegroundOnBrand
    }
  },
  contentContainer: {
    height: "calc(100vh - 48px)",
    display: "flex"
  }
});