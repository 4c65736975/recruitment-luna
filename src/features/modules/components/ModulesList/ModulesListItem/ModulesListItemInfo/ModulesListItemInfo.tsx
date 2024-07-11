/**
 * ModulesListItemInfo.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { IModulesListItemInfoProps } from "./ModulesListItemInfo.types";
import { useModulesListItemInfoStyles } from "./ModulesListItemInfo.styles";

export const ModulesListItemInfo: React.FC<IModulesListItemInfoProps> = (props) => {
  const { name, children } = props;

  const styles = useModulesListItemInfoStyles();

  return (
    <div className={styles.root}>
      <Text preset="Body1Strong">
        {name}
      </Text>

      {children}
    </div>
  );
};