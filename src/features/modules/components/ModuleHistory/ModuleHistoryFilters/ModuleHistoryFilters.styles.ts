/**
 * ModuleHistoryFilters.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModuleHistoryFiltersStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "end",
    gap: webLightTheme.spacingHorizontalM,

    "> * input, select": {
      margin: 0,
      minWidth: "96px",
      maxHeight: "32px",
      padding: `5px ${webLightTheme.spacingHorizontalM}`,
      outlineStyle: "none",
      background: webLightTheme.colorNeutralBackground1,
      border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
      borderRadius: webLightTheme.borderRadiusMedium,
      fontFamily: webLightTheme.fontFamilyBase,
      fontSize: webLightTheme.fontSizeBase300,
      lineHeight: webLightTheme.lineHeightBase300,
      fontWeight: webLightTheme.fontWeightRegular,
      color: webLightTheme.colorNeutralForeground1
    }
  }
});