/**
 * BreadcrumbItem.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useBreadcrumbItemStyles = makeStyles({
  root: {
    display: "flex",

    "&:last-child > *": {
      fontWeight: webLightTheme.fontWeightSemibold,
      color: webLightTheme.colorNeutralForeground2
    }
  }
});