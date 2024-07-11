/**
 * ModulesList.styles.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { makeStyles, mergeClasses } from "@griffel/react";
import { IModulesListProps } from "./ModulesList.types";
import { webLightTheme } from "@fluentui/tokens";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    gap: webLightTheme.spacingVerticalL
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"
  }
});

export const useModulesListStyles = (props: IModulesListProps): string => {
  const styles = useStyles();

  return mergeClasses(
    styles.root,
    props.mode === "grid" && styles.grid
  );
};