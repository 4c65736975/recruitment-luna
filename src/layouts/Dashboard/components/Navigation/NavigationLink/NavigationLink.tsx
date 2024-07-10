/**
 * NavigationLink.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text } from "@/components/Text";
import { NavLink } from "react-router-dom";
import { INavigationLinkProps } from "./NavigationLink.types";
import { useNavigationLinkStyles } from "./NavigationLink.styles";

export const NavigationLink: React.FC<INavigationLinkProps> = (props) => {
  const { to, name, icon, disabled } = props;

  const styles = useNavigationLinkStyles({
    disabled: disabled
  });

  return (
    <NavLink
      to={to}
      className={styles}>

      {React.createElement(icon, { fontSize: 20 })}

      <Text>
        {name}
      </Text>
    </NavLink>
  );
};