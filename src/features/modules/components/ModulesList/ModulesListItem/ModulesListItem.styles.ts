/**
 * ModulesListItem.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModulesListItemStyles = makeStyles({
  root: {
    display: "grid",
    gap: webLightTheme.spacingHorizontalL,
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: `${webLightTheme.spacingVerticalL} ${webLightTheme.spacingHorizontalL}`,
    border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`,
    borderRadius: webLightTheme.borderRadiusMedium,
    background: webLightTheme.colorNeutralBackground1,
    textDecoration: "none",

    "&:hover": {
      background: webLightTheme.colorNeutralBackground1Hover
    },

    "&:active": {
      background: webLightTheme.colorNeutralBackground1Pressed
    }
  },
  correctTemp: {
    color: webLightTheme.colorStatusSuccessForeground3
  },
  incorrectTemp: {
    color: webLightTheme.colorStatusDangerForeground3
  },
  status: {
    display: "flex",
    alignItems: "center",
    gap: webLightTheme.spacingHorizontalSNudge
  }
});