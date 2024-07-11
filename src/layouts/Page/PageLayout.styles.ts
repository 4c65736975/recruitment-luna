/**
 * PageLayout.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const usePageLayoutStyles = makeStyles({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column"
  },
  headerContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: webLightTheme.spacingHorizontalL,
    padding: `${webLightTheme.spacingVerticalXXXL} ${webLightTheme.spacingHorizontalXXXL}`,
    borderBottom: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    background: webLightTheme.colorNeutralBackground2
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
    gap: webLightTheme.spacingVerticalXS
  },
  headerExtraContentContainer: {
    display: "flex",
    gap: webLightTheme.spacingHorizontalS
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: webLightTheme.spacingVerticalXXXL,
    padding: `${webLightTheme.spacingVerticalXXXL} ${webLightTheme.spacingHorizontalXXXL}`,
    overflowX: "hidden",
    overflowY: "auto",

    containerType: "inline-size",
    containerName: "page-layout-content-container"
  }
});