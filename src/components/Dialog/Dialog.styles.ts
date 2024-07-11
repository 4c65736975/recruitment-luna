/**
 * Dialog.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useDialogStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1r",
    gridTemplateColumns: "1fr 1fr auto",
    gap: webLightTheme.spacingVerticalM,
    padding: `${webLightTheme.spacingVerticalXXL} ${webLightTheme.spacingHorizontalXXL}`,
    border: `${webLightTheme.strokeWidthThick} solid ${webLightTheme.colorTransparentStroke}`,
    borderRadius: webLightTheme.borderRadiusXLarge,
    background: webLightTheme.colorNeutralBackground1,
    boxShadow: webLightTheme.shadow64,

    "::backdrop": {
      background: webLightTheme.colorBackgroundOverlay
    }
  },
  title: {
    gridArea: "1 / 1 / 1 / 3"
  },
  content: {
    gridArea: "2 / 1 / 2 / 4",
    overflowY: "auto"
  },
  actions: {
    display: "flex",
    gap: webLightTheme.spacingHorizontalS,
    gridArea: "3 / 3"
  }
});