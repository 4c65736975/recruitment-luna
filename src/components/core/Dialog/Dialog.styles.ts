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
  dialog: {
    display: "grid",
    gridTemplateRows: "auto 1r",
    gridTemplateColumns: "1fr 1fr auto",
    gap: webLightTheme.spacingVerticalM,
    padding: `${webLightTheme.spacingVerticalXXL} ${webLightTheme.spacingHorizontalXXL}`,
    border: `${webLightTheme.strokeWidthThick} solid ${webLightTheme.colorTransparentStroke}`,
    borderRadius: webLightTheme.borderRadiusXLarge,
    background: webLightTheme.colorNeutralBackground1,

    "::backdrop": {
      background: webLightTheme.colorBackgroundOverlay
    }
  },
  dialogTitle: {
    gridArea: "1 / 1 / 1 / 3"
  },
  dialogContent: {
    gridArea: "2 / 1 / 2 / 4",
    overflowY: "auto"
  },
  dialogActions: {
    display: "flex",
    gap: webLightTheme.spacingHorizontalS,
    gridArea: "3 / 3"
  }
});