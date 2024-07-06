/**
 * RootLayout.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useRootLayoutStyles = makeStyles({
  rootContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  topBarContainer: {
    height: "48px",
    display: "flex",
    alignItems: "center",
    background: webLightTheme.colorBrandBackground,
    color: webLightTheme.colorNeutralForegroundOnBrand,
    "> *": {
      color: webLightTheme.colorNeutralForegroundOnBrand
    }
  },
  contentContainer: {
    height: "100%",
    display: "flex"
  },
  navigationContainer: {
    width: "100%",
    maxWidth: "320px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRight: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    background: webLightTheme.colorNeutralBackground2,
    transition: `max-width ${webLightTheme.durationGentle} ${webLightTheme.curveEasyEaseMax}` ,

    containerType: "inline-size",
    containerName: "navigation-container",

    "[data-compact='true']": {
      maxWidth: "48px"
    }
  },
  navigationBottomContainer: {
    borderTop: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    marginTop: "auto",
    marginBottom: 0
  }
});