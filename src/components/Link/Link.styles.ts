/**
 * Link.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useLinkStyles = makeStyles({
  link: {
    fontSize: webLightTheme.fontSizeBase300,
    lineHeight: webLightTheme.lineHeightBase300,
    fontFamily: webLightTheme.fontFamilyBase,
    fontWeight: webLightTheme.fontWeightRegular,
    color: webLightTheme.colorBrandForegroundLink,
    textDecoration: "none",

    ":hover": {
      color: webLightTheme.colorBrandForegroundLinkHover,
      textDecoration: "underline"
    },

    ":active": {
      color: webLightTheme.colorBrandForegroundLinkPressed
    }
  },
  linkSubtle: {
    color: webLightTheme.colorNeutralForeground2,

    ":hover": {
      color: webLightTheme.colorNeutralForeground2Hover
    },

    ":active": {
      color: webLightTheme.colorNeutralForeground2Pressed
    }
  },
  linkDisabled: {
    color: webLightTheme.colorNeutralForegroundDisabled,
    cursor: "not-allowed",
    pointerEvents: "none"
  }
});