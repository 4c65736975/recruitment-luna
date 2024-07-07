/**
 * Skeleton.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { webLightTheme } from "@fluentui/tokens";
import { makeStyles } from "@griffel/react";

export const useSkeletonStyles = makeStyles({
  skeleton: {
    width: "100%",
    height: "25px",
    borderRadius: webLightTheme.borderRadiusMedium,
    backgroundAttachment: "fixed",
    backgroundSize: "300% 100%",
    backgroundPosition: "50% 50%",
    backgroundImage: `linear-gradient(to right, ${webLightTheme.colorNeutralStencil1} 0%, ${webLightTheme.colorNeutralStencil2} 50%, ${webLightTheme.colorNeutralStencil1} 100%)`,
    animationTimingFunction: "linear",
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationName: {
      from: {
        backgroundPositionX: "300%"
      },
      to: {
        backgroundPositionX: "0%"
      }
    }
  }
});