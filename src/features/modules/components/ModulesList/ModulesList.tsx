/**
 * ModulesList.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useModules } from "../../api";
import { useModulesListStyles } from "./ModulesList.styles";
import { IModulesListProps } from "./ModulesList.types";
import { ModulesListItem } from "./ModulesListItem";

export const ModulesList:React.FC<IModulesListProps> = (props) => {
  const { modules } = useModules();

  const styles = useModulesListStyles(props);

  return (
    <div className={styles}>
      {modules.map(module => (
        <ModulesListItem key={module.id} module={module}/>
      ))}
    </div>
  );
};