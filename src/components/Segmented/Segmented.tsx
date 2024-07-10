/**
 * Segmented.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { ISegmentedProps } from "./Segmented.types";
import { useSegmentedStyles } from "./Segmented.styles";
import { SegmentedProvider } from "./SegmentedProvider";

export const Segmented: React.FC<ISegmentedProps> = (props) => {
  const { children, onSegmentSelect, defaultSelectedValue } = props;

  const styles = useSegmentedStyles();

  return (
    <div className={styles.root}>
      <SegmentedProvider
        defaultSelectedValue={defaultSelectedValue}
        onSegmentSelect={onSegmentSelect}>

        {children}
      </SegmentedProvider>
    </div>
  );
};