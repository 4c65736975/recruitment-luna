/**
 * ModuleDetails.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModuleDetailsStyles = makeStyles({
  root: {
    border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`,
    borderRadius: webLightTheme.borderRadiusLarge,
    overflow: "hidden"
  },
  table: {
    width: "100%",
    tableLayout: "fixed",
    borderCollapse: "collapse",

    "> * tr:not(:last-child)": {
      borderTopLeftRadius: webLightTheme.borderRadiusLarge,
      borderBottom: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
    },

    "> * th": {
      background: webLightTheme.colorNeutralBackground2
    },

    "> * th, td:not(:last-child)": {
      borderRight: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
    },

    "> * th, td": {
      padding: `${webLightTheme.spacingVerticalL} ${webLightTheme.spacingHorizontalL}`,
      textAlign: "start"
    },

    "@container page-layout-content-container (width < 850px)": {
      "> * tr": {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)"
      },

      "> * tr > th:nth-child(n+2)": {
        borderTop: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      },

      "> * tr > td:nth-child(n+4)": {
        borderTop: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      },

      "> * td:not(:last-child)": {
        borderRight: "none"
      }
    },

    "@container page-layout-content-container (width < 480px)": {
      "> * tr": {
        display: "flex",
        flexDirection: "column"
      },

      "> * th, td": {
        borderRight: "none"
      },

      "> * td": {
        borderTop: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      }
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