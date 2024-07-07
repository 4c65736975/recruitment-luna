/**
 * RootLayout.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from "react";
import Text from "../components/core/Text/Text";
import Button from "../components/core/Button/Button";
import NavigationLink from "../components/NavigationLink/NavigationLink";
import { useRootLayoutStyles } from "./RootLayout.styles";
import { Outlet } from "react-router-dom";
import { IotRegular, NavigationRegular, PersonRegular, SettingsRegular } from "@fluentui/react-icons";

const RootLayout: React.FC = () => {
  const [isCompactNav, setIsCompactNav] = React.useState<boolean>(false);

  const styles = useRootLayoutStyles();

  return (
    <div className={styles.rootContainer}>
      <div className={styles.topBarContainer}>
        <Button
          type="button"
          appearance="transparent"
          icon={NavigationRegular}
          onClick={() => setIsCompactNav(!isCompactNav)}
          className={styles.navigationButton}/>

        <Text preset="Subtitle1">
          Luna Dashboard
        </Text>
      </div>

      <div className={styles.contentContainer}>
        <nav className={styles.navigationContainer} data-compact={isCompactNav}>
          <NavigationLink
            name="Moje moduły"
            to="/modules"
            icon={IotRegular}/>

          <div className={styles.navigationBottomContainer}>
            <NavigationLink
              name="Jan Kowalski"
              to="/account"
              icon={PersonRegular}
              disabled/>
            <NavigationLink
              name="Ustawienia"
              to="/settings"
              icon={SettingsRegular}
              disabled/>
          </div>
        </nav>

        <Outlet/>
      </div>
    </div>
  );
};

export default RootLayout;