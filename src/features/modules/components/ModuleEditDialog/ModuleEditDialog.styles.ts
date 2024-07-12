/**
 * ModuleEditDialog.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useModuleEditDialogStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: webLightTheme.spacingHorizontalM,

    "> * input, textarea": {
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
    },

    "> * input": {
      minWidth: "96px",
      minHeight: "32px"
    },

    "> * textarea": {
      minHeight: "150px",
      maxHeight: "300px",
      resize: "vertical"
    },

    "> div:last-child": {
      gridColumn: "span 2"
    }
  }
});