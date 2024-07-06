/**
 * Page.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const usePageStyles = makeStyles({
  pageContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  pageTopContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: `${webLightTheme.spacingVerticalXXXL} ${webLightTheme.spacingHorizontalXXXL}`,
    borderBottom: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    background: webLightTheme.colorNeutralBackground2
  },
  pageHeaderContainer: {
    display: "flex",
    flexDirection: "column"
  },
  pageContentContainer: {
    padding: `${webLightTheme.spacingVerticalXXXL} ${webLightTheme.spacingHorizontalXXXL}`
  }
});