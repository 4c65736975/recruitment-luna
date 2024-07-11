/**
 * ModuleDetail.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { IModuleDetailProps } from "./ModuleDetail.types";

export const ModuleDetail: React.FC<IModuleDetailProps> = (props) => {
  const { header, children, colspan } = props;

  return (
    <>
      <th colSpan={colspan && colspan[0]}>
        <Text preset="Body1Strong">
          {header}
        </Text>
      </th>

      <td colSpan={colspan && colspan[1]}>
        {children}
      </td>
    </>
  );
};