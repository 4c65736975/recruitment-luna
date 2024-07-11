/**
 * Navigation.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useNavigationStyles } from "./Navigation.styles";
import { NavigationLink } from "./NavigationLink";
import { INavigationProps } from "./Navigation.types";
import { IotRegular, PersonRegular, SettingsRegular } from "@fluentui/react-icons";

export const Navigation: React.FC<INavigationProps> = (props) => {
  const { isCompactMode } = props;

  const styles = useNavigationStyles();

  return (
    <nav
      className={styles.root}
      data-compact={isCompactMode}>

      <NavigationLink
        to="/modules"
        name="Moduły"
        icon={IotRegular}/>

      <div className={styles.footer}>
        <NavigationLink
          to="/account"
          name="Jan Kowalski"
          icon={PersonRegular}
          disabled/>

        <NavigationLink
          to="/settings"
          name="Ustawienia"
          icon={SettingsRegular}
          disabled/>
      </div>
    </nav>
  );
};