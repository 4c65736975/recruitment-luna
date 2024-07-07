/**
 * Status.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles, mergeClasses } from "@griffel/react";
import { IStatusProps } from "./Status.types";

const useStyles = makeStyles({
  root: {
    width: "6px",
    height: "6px",
    background: webLightTheme.colorBrandBackground,
    borderRadius: webLightTheme.borderRadiusCircular
  },
  warningStatus: {
    background: webLightTheme.colorStatusWarningBackground3
  },
  dangerStatus: {
    background: webLightTheme.colorStatusDangerBackground3
  },
  animatedStatus: {
    animationDuration: "1s",
    animationFillMode: "both",
    animationIterationCount: "infinite",
    animationName: {
      "0%, 100%": {
        opacity: "100%"
      },
      "50%": {
        opacity: "50%"
      }
    }
  }
});

export const useStatusStyles = (props: IStatusProps): string => {
  const styles = useStyles();

  return mergeClasses(
    styles.root,
    props.appearance === "warning" && styles.warningStatus,
    props.appearance === "danger" && styles.dangerStatus,
    props.animated && styles.animatedStatus
  );
};