/**
 * Navigation.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useNavigationStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: "320px",
    minWidth: "48px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRight: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    background: webLightTheme.colorNeutralBackground2,
    transition: `max-width ${webLightTheme.durationGentle} ${webLightTheme.curveEasyEaseMax}`,

    containerType: "inline-size",
    containerName: "navigation-bar-container",

    "[data-compact='true']": {
      maxWidth: "48px"
    }
  },
  footer: {
    marginTop: "auto",
    marginBottom: 0,
    borderTop: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`
  }
});