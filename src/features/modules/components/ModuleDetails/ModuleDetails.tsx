/**
 * ModuleDetails.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { Status } from "@/components/Status";
import { getIsCurrentTempInRange, toCelsius } from "@/helpers";
import { ModuleDetail } from "./ModuleDetail";
import { useModuleDetailsStyles } from "./ModuleDetails.styles";
import { IModuleDetailsProps } from "./ModuleDetails.types";
import { useModuleTemperature } from "../../api";

export const ModuleDetails: React.FC<IModuleDetailsProps> = (props) => {
  const { module } = props;

  const moduleTemperature = useModuleTemperature(module);

  const styles = useModuleDetailsStyles();

  // Wrap the root div in a wrapper to prevent table content from being hidden due to overflow: hidden on the root div.
  return (
    <div>
      <div className={styles.root}>
        <table className={styles.table}>
          <tbody>
            <tr>
              <ModuleDetail header="Nazwa">
                <Text>
                  {module.name}
                </Text>
              </ModuleDetail>

              <ModuleDetail header="Aktualna temperatura">
                <Text className={moduleTemperature
                    ? getIsCurrentTempInRange(moduleTemperature, module.targetTemperature) ? styles.correctTemp : styles.incorrectTemp
                    : undefined
                  }>

                  {moduleTemperature
                    ? toCelsius(moduleTemperature)
                    : "-"
                  }
                </Text>
              </ModuleDetail>

              <ModuleDetail header="Docelowa temperatura">
                <Text>
                  {toCelsius(module.targetTemperature)}
                </Text>
              </ModuleDetail>

              <ModuleDetail header="Dostępność">
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
              </ModuleDetail>
            </tr>

            <tr>
              <ModuleDetail
                header="Opis"
                colspan={[1, 7]}>

                <Text>
                  {module.description}
                </Text>
              </ModuleDetail>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};