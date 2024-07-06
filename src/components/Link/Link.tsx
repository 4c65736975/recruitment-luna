/**
 * Link.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link as RouterLink } from "react-router-dom";
import { ILinkProps } from "./Link.types";
import { mergeClasses } from "@griffel/react";
import { useLinkStyles } from "./Link.styles";

const Link: React.FC<ILinkProps> = ({ to, appearance, disabled, children, className, ...props }) => {
  const styles = useLinkStyles();

  return (
    <RouterLink
      to={to}
      className={mergeClasses(
        styles.link,
        appearance === "subtle" && styles.linkSubtle,
        disabled && styles.linkDisabled,
        className
      )}
      {...props}>

      {children}
    </RouterLink>
  );
};

export default Link;