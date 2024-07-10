/**
 * DashboardLayout.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text } from "@/components/Text";
import { Button } from "@/components/Button";
import { Navigation } from "./components/Navigation";
import { NavigationRegular } from "@fluentui/react-icons";
import { useDashboardLayoutStyles } from "./DashboardLayout.styles";
import { Outlet } from "react-router-dom";
import { useLocalStorage } from "@/hooks";

export const DashboardLayout: React.FC = () => {
  const styles = useDashboardLayoutStyles();
  const storage = useLocalStorage();

  const [isCompactMode, setIsCompactMode] = React.useState(storage.get("navCompact", false));

  const onNavigationModeChange = () => {
    setIsCompactMode(!isCompactMode);

    storage.set("navCompact", !isCompactMode);
  };

  return (
    <div className={styles.root}>
      <div className={styles.titleBarContainer}>
        <Button
          type="button"
          appearance="transparent"
          icon={NavigationRegular}
          className={styles.titleBarNavigationButton}
          onClick={onNavigationModeChange}/>

        <Text preset="Subtitle1">
          Luna Dashboard
        </Text>
      </div>

      <div className={styles.contentContainer}>
        <Navigation isCompactMode={isCompactMode}/>

        <Outlet/>
      </div>
    </div>
  );
};