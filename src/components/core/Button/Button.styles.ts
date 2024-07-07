/**
 * Button.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles, mergeClasses, shorthands } from "@griffel/react";
import { IButtonStylesProps } from "./Button.types";

const useStyles = makeStyles({
  root: {
    margin: 0,
    minWidth: "96px",
    padding: `5px ${webLightTheme.spacingHorizontalM}`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    gap: webLightTheme.spacingHorizontalSNudge,
    overflow: "hidden",
    outlineStyle: "none",
    background: webLightTheme.colorNeutralBackground1,
    border: `${webLightTheme.strokeWidthThin} solid ${webLightTheme.colorNeutralStroke1}`,
    borderRadius: webLightTheme.borderRadiusMedium,
    transitionDuration: webLightTheme.durationFaster,
    transitionProperty: "background, border, color",
    transitionTimingFunction: webLightTheme.curveEasyEase,
    color: webLightTheme.colorNeutralForeground1,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorNeutralBackground1Hover,
      ...shorthands.borderColor(webLightTheme.colorNeutralStroke1Hover),
      color: webLightTheme.colorNeutralForeground1Hover,
      cursor: "pointer"
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorNeutralBackground1Pressed,
      ...shorthands.borderColor(webLightTheme.colorNeutralStroke1Pressed),
      color: webLightTheme.colorNeutralForeground1Pressed
    },

    "&:disabled": {
      background: webLightTheme.colorNeutralBackgroundDisabled,
      ...shorthands.borderColor(webLightTheme.colorNeutralStrokeDisabled),
      color: webLightTheme.colorNeutralForegroundDisabled,

      "&:hover": {
        cursor: "not-allowed"
      }
    }
  },
  primaryButton: {
    background: webLightTheme.colorBrandBackground,
    ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
    color: webLightTheme.colorNeutralForegroundOnBrand,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorBrandBackgroundHover,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForegroundOnBrand
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorBrandBackgroundPressed,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForegroundOnBrand
    },

    "&:disabled": {
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke)
    }
  },
  outlineButton: {
    background: webLightTheme.colorTransparentBackground,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorTransparentBackgroundHover
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorTransparentBackgroundPressed
    }
  },
  subtleButton: {
    background: webLightTheme.colorSubtleBackground,
    ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
    color: webLightTheme.colorNeutralForeground2,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorSubtleBackgroundHover,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForeground2Hover
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorSubtleBackgroundPressed,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForeground2Pressed
    }
  },
  transparentButton: {
    background: webLightTheme.colorTransparentBackground,
    ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
    color: webLightTheme.colorNeutralForeground2,

    "&:hover:not(:disabled)": {
      background: webLightTheme.colorTransparentBackgroundHover,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForeground2BrandHover
    },

    "&:active:not(:disabled)": {
      background: webLightTheme.colorTransparentBackgroundPressed,
      ...shorthands.borderColor(webLightTheme.colorTransparentStroke),
      color: webLightTheme.colorNeutralForeground2BrandPressed
    }
  },
  iconButton: {
    minWidth: "32px",
    maxWidth: "32px",
    padding: "5px"
  },
  circularShapeButton: {
    borderRadius: webLightTheme.borderRadiusCircular
  },
  squareShapeButton: {
    borderRadius: webLightTheme.borderRadiusNone
  }
});

export const useButtonStyles = (props: IButtonStylesProps): string => {
  const styles = useStyles();

  return mergeClasses(
    styles.root,
    props.iconOnly && styles.iconButton,
    props.appearance === "outline" && styles.outlineButton,
    props.appearance === "primary" && styles.primaryButton,
    props.appearance === "subtle" && styles.subtleButton,
    props.appearance === "transparent" && styles.transparentButton,
    props.shape === "circular" && styles.circularShapeButton,
    props.shape === "square" && styles.squareShapeButton
  );
};