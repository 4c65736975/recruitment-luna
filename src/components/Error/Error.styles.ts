/**
 * Error.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useErrorStyles = makeStyles({
  errorContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  errorIcon: {
    fontSize: webLightTheme.fontSizeHero1000,
    color: webLightTheme.colorStatusDangerBackground3
  }
});