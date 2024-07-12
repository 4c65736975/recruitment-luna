/**
 * ModuleHistory.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text } from "@/components/Text";
import { useModuleHistory } from "../../api";
import { useSearchParams } from "react-router-dom";
import { TModuleHistoryMode } from "@/models/Module";
import { IModuleHistoryProps } from "./ModuleHistory.types";
import { ModuleHistoryFilters } from "./ModuleHistoryFilters";
import { useModuleHistoryStyles } from "./ModuleHistory.styles";
import { getLastHourDate, toCelsius } from "@/helpers";

export const ModuleHistory: React.FC<IModuleHistoryProps> = (props) => {
  const { moduleId } = props;

  const styles = useModuleHistoryStyles();

  const lastHour = getLastHourDate();

  const [searchParams] = useSearchParams();

  const mode = searchParams.get("mode") as TModuleHistoryMode || "hourly";
  const start = searchParams.get("start") || lastHour.start;
  const stop = searchParams.get("stop") || lastHour.stop;

  const { data, refetch } = useModuleHistory(moduleId, mode, start, stop);

  React.useEffect(() => {
    if (searchParams.size > 0) {
      refetch();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Note: <table> should be separate custom reusable component for better maintainability and reusability.
  return (
    <div className={styles.root}>
      <ModuleHistoryFilters mode={mode} start={start} stop={stop}/>

      <div className={styles.historyTable}>
        <table>
          <thead>
            <tr>
              <th>
                <Text preset="Body1Strong">
                  Data
                </Text>
              </th>

              <th>
                <Text preset="Body1Strong">
                  Godzina
                </Text>
              </th>

              <th>
                <Text preset="Body1Strong">
                  Temperatura
                </Text>
              </th>
            </tr>
          </thead>

          <tbody>
            {data?.length === 0 &&
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  <Text preset="Body1Stronger">
                    Brak danych
                  </Text>
                </td>
              </tr>
            }

            {data?.map(temp => {
              const date = new Date(temp.timestamp);

              return (
                <tr key={temp.timestamp}>
                  <td>
                    <Text>
                      {date.toLocaleDateString()}
                    </Text>
                  </td>

                  <td>
                    <Text>
                      {date.toLocaleTimeString()}
                    </Text>
                  </td>

                  <td>
                    <Text>
                      {toCelsius(temp.temperature)}
                    </Text>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};