/**
 * ModuleHistory.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModuleHistoryStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: webLightTheme.spacingVerticalL
  },
  historyTable: {
    border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`,
    borderRadius: webLightTheme.borderRadiusLarge,
    overflow: "hidden",

    "> table": {
      width: "100%",
      tableLayout: "fixed",
      borderCollapse: "collapse",

      "> thead > tr": {
        borderTopLeftRadius: webLightTheme.borderRadiusLarge,
        borderBottom: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      },

      "> * tr:not(:last-child)": {
        borderTopLeftRadius: webLightTheme.borderRadiusLarge,
        borderBottom: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      },

      "> * th": {
        background: webLightTheme.colorNeutralBackground2
      },

      "> * th:not(:last-child), td:not(:last-child)": {
        borderRight: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke2}`
      },

      "> * th, td": {
        padding: `${webLightTheme.spacingVerticalL} ${webLightTheme.spacingHorizontalL}`,
        textAlign: "start"
      }
    }
  }
});