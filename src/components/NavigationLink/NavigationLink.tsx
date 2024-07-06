/**
 * NavigationLink.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Text from "../Text/Text";
import { NavLink } from "react-router-dom";
import { INavigationLinkProps } from "./NavigationLink.types";
import { useNavigationLinkStyles } from "./NavigationLink.styles";
import { mergeClasses } from "@griffel/react";

const NavigationLink: React.FC<INavigationLinkProps> = ({ icon: Icon, name, to, disabled, ...props }) => {
  const styles = useNavigationLinkStyles();

  return (
    <NavLink
      to={to}
      className={mergeClasses(styles.navigationLink, disabled && styles.navigationDisabled)}
      {...props}>

      <Icon fontSize={20}/>

      <Text>{name}</Text>
    </NavLink>
  );
};

export default NavigationLink;