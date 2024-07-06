/**
 * App.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStaticStyles } from "@griffel/react";

export const useAppStyles = makeStaticStyles({
  "*": {
    fontFamily: webLightTheme.fontFamilyBase,
    boxSizing: "border-box"
  },
  body: {
    margin: 0,
    padding: 0,
    overflow: "hidden",
    background: webLightTheme.colorNeutralBackground1
  },
  "#root": {
    height: "100vh"
  }
});