/**
 * ModuleHistoryFilters.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Button } from "@/components/Button";
import { TModuleHistoryMode } from "@/models/Module";
import { useNavigate } from "react-router-dom";
import { IModuleHistoryFiltersProps } from "./ModuleHistoryFilters.types";
import { useModuleHistoryFiltersStyles } from "./ModuleHistoryFilters.styles";
import { ModuleHistoryFilter } from "./ModuleHistoryFilter";
import { formatToInputDate, getLastHourDate } from "@/helpers";

export const ModuleHistoryFilters: React.FC<IModuleHistoryFiltersProps> = (props) => {
  const { mode: defaultMode, start: defaultStart, stop: defaultStop } = props;

  const styles = useModuleHistoryFiltersStyles();

  const [mode, setMode] = React.useState<TModuleHistoryMode>(defaultMode);
  const [range, setRange] = React.useState({
    start: formatToInputDate(defaultStart, mode),
    stop: formatToInputDate(defaultStop, mode)
  });

  const query = new URLSearchParams();
  const navigate = useNavigate();

  const onModeSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMode = e.target.value as TModuleHistoryMode;

    let newRange = { ...range };

    if (newMode === "hourly") {
      const lastHour = getLastHourDate();

      newRange = {
        start: lastHour.start,
        stop: lastHour.stop
      };
    }

    setRange({
      start: formatToInputDate(newRange.start, newMode),
      stop: formatToInputDate(newRange.stop, newMode)
    });

    setMode(newMode);
  };

  const onStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange({ ...range, start: e.target.value });
  };

  const onStopInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRange({ ...range, stop: e.target.value });
  };

  const onFilterButtonClick = () => {
    query.set("mode", mode);
    query.set("start", new Date(range.start).toISOString());
    query.set("stop", new Date(range.stop).toISOString());

    navigate({ search: query.toString() });
  };

  // Note: <input> and <select> elements should be separate custom reusable components for better maintainability and reusability.
  return (
    <div className={styles.root}>
      <ModuleHistoryFilter
        id="mode"
        label="Zakres">

        <select
          id="mode"
          defaultValue={mode}
          onChange={onModeSelectChange}>

          <option value="hourly">
            Godzinowo
          </option>

          <option value="daily">
            Dziennie
          </option>
        </select>
      </ModuleHistoryFilter>

      <ModuleHistoryFilter
        id="from"
        label="Od">

        <input
          id="from"
          type={mode === "daily" ? "date" : "datetime-local"}
          value={range.start}
          onChange={onStartInputChange}/>
      </ModuleHistoryFilter>

      <ModuleHistoryFilter
        id="to"
        label="Do">

        <input
          id="to"
          type={mode === "daily" ? "date" : "datetime-local"}
          value={range.stop}
          onChange={onStopInputChange}/>
      </ModuleHistoryFilter>

      <Button onClick={onFilterButtonClick}>
        Filtruj
      </Button>
    </div>
  );
};