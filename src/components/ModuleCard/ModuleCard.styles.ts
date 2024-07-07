/**
 * ModuleCard.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModuleCardStyles = makeStyles({
  cardContainer: {
    padding: webLightTheme.spacingVerticalL,
    display: "flex",
    border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`,
    borderRadius: webLightTheme.borderRadiusMedium,
    background: webLightTheme.colorNeutralBackground1,
    color: webLightTheme.colorNeutralForeground1,
    textDecoration: "none",

    "&:hover": {
      background: webLightTheme.colorNeutralBackground1Hover
    },

    "&:active": {
      background: webLightTheme.colorNeutralBackground1Pressed
    }
  },
  cardContent: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)"
  },
  correctTemperature: {
    color: webLightTheme.colorStatusSuccessForeground3
  },
  incorrectTemperature: {
    color: webLightTheme.colorStatusDangerForeground3
  },
  statusContainer: {
    display: "flex",
    alignItems: "center",
    gap: webLightTheme.spacingHorizontalSNudge
  }
});

export const useModuleCardInfoStyles = makeStyles({
  cardInfo: {
    display: "flex",
    flexDirection: "column",
    gap: webLightTheme.spacingVerticalSNudge
  }
});