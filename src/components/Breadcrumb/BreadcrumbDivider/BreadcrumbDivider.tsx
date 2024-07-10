/**
 * BreadcrumbDivider.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { useBreadcrumbDividerStyles } from "./BreadcrumbDivider.styles";
import { IBreadcrumbDividerProps } from "./BreadcrumbDivider.types";
import { ChevronRightRegular } from "@fluentui/react-icons";

export const BreadcrumbDivider: React.FC<IBreadcrumbDividerProps> = (props) => {
  const { type } = props;

  const styles = useBreadcrumbDividerStyles();

  return (
    <li className={styles.root}>
      {type === "slash"
        ? <Text>/</Text>
        : <ChevronRightRegular/>
      }
    </li>
  );
};