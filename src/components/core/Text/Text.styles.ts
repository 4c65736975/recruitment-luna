/**
 * Text.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles, mergeClasses } from "@griffel/react";
import { ITextPreset, TTextPreset, TTextProps } from "./Text.types";

const useStyles = makeStyles({
  root: {
    display: "inline",
    whiteSpace: "normal",
    overflow: "visible",
    textOverflow: "clip",
    color: webLightTheme.colorNeutralForeground1
  },
  base100: {
    fontSize: webLightTheme.fontSizeBase100,
    lineHeight: webLightTheme.lineHeightBase100
  },
  base200: {
    fontSize: webLightTheme.fontSizeBase200,
    lineHeight: webLightTheme.lineHeightBase200
  },
  base300: {
    fontSize: webLightTheme.fontSizeBase300,
    lineHeight: webLightTheme.lineHeightBase300
  },
  base400: {
    fontSize: webLightTheme.fontSizeBase400,
    lineHeight: webLightTheme.lineHeightBase400
  },
  base500: {
    fontSize: webLightTheme.fontSizeBase500,
    lineHeight: webLightTheme.lineHeightBase500
  },
  base600: {
    fontSize: webLightTheme.fontSizeBase600,
    lineHeight: webLightTheme.lineHeightBase600
  },
  hero700: {
    fontSize: webLightTheme.fontSizeHero700,
    lineHeight: webLightTheme.lineHeightHero700
  },
  hero800: {
    fontSize: webLightTheme.fontSizeHero800,
    lineHeight: webLightTheme.lineHeightHero800
  },
  hero900: {
    fontSize: webLightTheme.fontSizeHero900,
    lineHeight: webLightTheme.lineHeightHero900
  },
  hero1000: {
    fontSize: webLightTheme.fontSizeHero1000,
    lineHeight: webLightTheme.lineHeightHero1000
  },
  base: {
    fontFamily: webLightTheme.fontFamilyBase
  },
  numeric: {
    fontFamily: webLightTheme.fontFamilyNumeric
  },
  monospace: {
    fontFamily: webLightTheme.fontFamilyMonospace
  },
  weightRegular: {
    fontWeight: webLightTheme.fontWeightRegular
  },
  weightMedium: {
    fontWeight: webLightTheme.fontWeightMedium
  },
  weightSemibold: {
    fontWeight: webLightTheme.fontWeightSemibold
  },
  weightBold: {
    fontWeight: webLightTheme.fontWeightBold
  },
  alignStart: {
    textAlign: "start"
  },
  alignCenter: {
    textAlign: "center"
  },
  alignEnd: {
    textAlign: "end"
  }
});

const getPreset = (preset: TTextPreset): ITextPreset => {
  const presetToStyles: { [key in TTextPreset]: ITextPreset } = {
    "Caption2": {
      size: 100,
      weight: "regular",
      font: "base"
    },
    "Caption2Strong": {
      size: 100,
      weight: "semibold",
      font: "base"
    },
    "Caption1": {
      size: 200,
      weight: "regular",
      font: "base"
    },
    "Caption1Strong": {
      size: 200,
      weight: "semibold",
      font: "base"
    },
    "Caption1Stronger": {
      size: 200,
      weight: "bold",
      font: "base"
    },
    "Body1": {
      size: 300,
      weight: "regular",
      font: "base"
    },
    "Body1Strong": {
      size: 300,
      weight: "semibold",
      font: "base"
    },
    "Body1Stronger": {
      size: 300,
      weight: "bold",
      font: "base"
    },
    "Body2": {
      size: 400,
      weight: "regular",
      font: "base"
    },
    "Subtitle2": {
      size: 400,
      weight: "semibold",
      font: "base"
    },
    "Subtitle2stronger": {
      size: 400,
      weight: "bold",
      font: "base"
    },
    "Subtitle1": {
      size: 500,
      weight: "semibold",
      font: "base"
    },
    "Title3": {
      size: 600,
      weight: "semibold",
      font: "base"
    },
    "Title2": {
      size: 700,
      weight: "semibold",
      font: "base"
    },
    "Title1": {
      size: 800,
      weight: "semibold",
      font: "base"
    },
    "LargeTitle": {
      size: 900,
      weight: "semibold",
      font: "base"
    },
    "Display": {
      size: 1000,
      weight: "semibold",
      font: "base"
    }
  };

  return presetToStyles[preset];
};

export const useTextStyles = (props: TTextProps): string => {
  const styles = useStyles();

  let textSize = props.size || 300;
  let textFont = props.font || "base";
  let textWeight = props.weight || "regular";

  if (props.preset) {
    const { size, weight, font } = getPreset(props.preset);

    textSize = size;
    textFont = font;
    textWeight = weight;
  }

  return mergeClasses(
    styles.root,
    textSize === 100 && styles.base100,
    textSize === 200 && styles.base200,
    textSize === 300 && styles.base300,
    textSize === 400 && styles.base400,
    textSize === 500 && styles.base500,
    textSize === 600 && styles.base600,
    textSize === 700 && styles.hero700,
    textSize === 800 && styles.hero800,
    textSize === 900 && styles.hero900,
    textSize === 1000 && styles.hero1000,
    textWeight === "regular" && styles.weightRegular,
    textWeight === "medium" && styles.weightMedium,
    textWeight === "semibold" && styles.weightSemibold,
    textWeight === "bold" && styles.weightBold,
    textFont === "base" && styles.base,
    textFont === "numeric" && styles.numeric,
    textFont === "monospace" && styles.monospace,
    props.alignment === "start" && styles.alignStart,
    props.alignment === "center" && styles.alignCenter,
    props.alignment === "end" && styles.alignEnd
  );
};