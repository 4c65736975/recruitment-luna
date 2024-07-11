/**
 * ModulesListItem.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { Status } from "@/components/Status";
import { getIsCurrentTempInRange, toCelsius } from "@/helpers";
import { Link as RouterLink } from "react-router-dom";
import { useModulesListItemStyles } from "./ModulesListItem.styles";
import { IModulesListItemProps } from "./ModulesListItem.types";
import { ModulesListItemInfo } from "./ModulesListItemInfo";

export const ModulesListItem: React.FC<IModulesListItemProps> = (props) => {
  const { module } = props;

  const styles = useModulesListItemStyles();

  return (
    <RouterLink
      to={module.id}
      className={styles.root}>

      <ModulesListItemInfo name="Nazwa">
        <Text>
          {module.name}
        </Text>
      </ModulesListItemInfo>

      <ModulesListItemInfo name="Aktualna temperatura">
        <Text className={module.currentTemperature
            ? getIsCurrentTempInRange(module.currentTemperature, module.targetTemperature) ? styles.correctTemp : styles.incorrectTemp
            : undefined
          }>

          {module.currentTemperature
            ? toCelsius(module.currentTemperature)
            : "-"
          }
        </Text>
      </ModulesListItemInfo>

      <ModulesListItemInfo name="Docelowa temperatura">
        <Text>
          {toCelsius(module.targetTemperature)}
        </Text>
      </ModulesListItemInfo>

      <ModulesListItemInfo name="Dostępność">
        <div className={styles.status}>
          {module.available
            ? <Status/>
            : <Status appearance="danger" animated/>
          }

          <Text>
            {module.available
              ? "Dostępny"
              : "Niedostępny"
            }
          </Text>
        </div>
      </ModulesListItemInfo>
    </RouterLink>
  );
};