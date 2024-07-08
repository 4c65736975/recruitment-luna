/**
 * ModuleCard.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Text from "../core/Text/Text";
import Status from "../core/Status/Status";
import { Link as RouterLink } from "react-router-dom";
import { useModuleCardInfoStyles, useModuleCardStyles } from "./ModuleCard.styles";
import { IModuleCardInfoProps, IModuleCardProps } from "./ModuleCard.types";
import { getIsCurrentTempInRange, toCelsius } from "../../helpers/temperature";

const ModuleCardInfo: React.FC<IModuleCardInfoProps> = (props) => {
  const { header, children } = props;
  const styles = useModuleCardInfoStyles();

  return (
    <div className={styles.cardInfo}>
      <Text preset="Body1Strong">
        {header}
      </Text>

      {children}
    </div>
  );
};

const ModuleCard: React.FC<IModuleCardProps> = (props) => {
  const { module } = props;

  const styles = useModuleCardStyles();

  const getTemperatureClass = (currentTemp: number, targetTemp: number) =>
    getIsCurrentTempInRange(currentTemp, targetTemp) ? styles.correctTemperature : styles.incorrectTemperature;

  return (
    <RouterLink to={module.id} className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <ModuleCardInfo header="Nazwa">
          <Text>{module.name}</Text>
        </ModuleCardInfo>

        <ModuleCardInfo header="Aktualna temperatura">
          <Text className={module.currentTemperature ? getTemperatureClass(module.currentTemperature, module.targetTemperature) : undefined}>
            {module.currentTemperature ? toCelsius(module.currentTemperature) : "-"}
          </Text>
        </ModuleCardInfo>

        <ModuleCardInfo header="Docelowa temperatura">
          <Text>{toCelsius(module.targetTemperature)}</Text>
        </ModuleCardInfo>

        <ModuleCardInfo header="Dostępność">
          <div className={styles.statusContainer}>
            {module.available ? <Status/> : <Status appearance="danger" animated/>}
            <Text>{module.available ? "Dostępny": "Niedostępny"}</Text>
          </div>
        </ModuleCardInfo>
      </div>
    </RouterLink>
  );
};

export default ModuleCard;