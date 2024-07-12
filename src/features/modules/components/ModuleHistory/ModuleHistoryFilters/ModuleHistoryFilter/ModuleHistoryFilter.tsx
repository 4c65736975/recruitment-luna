/**
 * ModuleHistoryFilter.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { useModuleHistoryFilterStyles } from "./ModuleHistoryFilter.styles";
import { IModuleHistoryFilterProps } from "./ModuleHistoryFilter.types";

export const ModuleHistoryFilter: React.FC<IModuleHistoryFilterProps> = (props) => {
  const { id, label, children } = props;

  const styles = useModuleHistoryFilterStyles();

  return (
    <div className={styles.root}>
      <label htmlFor={id} className={styles.label}>
        <Text preset="Body1Strong">
          {label}
        </Text>
      </label>

      {children}
    </div>
  );
};