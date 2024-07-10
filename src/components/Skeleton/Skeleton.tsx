/**
 * Skeleton.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useSkeletonStyles } from "./Skeleton.styles";
import { ISkeletonProps } from "./Skeleton.types";

export const Skeleton: React.FC<ISkeletonProps> = (props) => {
  const { width, height } = props;

  const styles = useSkeletonStyles();

  return (
    <div style={{ width: `${width}px`, height: `${height}px` }} className={styles.root}/>
  );
};