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
import { useLinkStyles } from "./Link.styles";

export const Link: React.FC<ILinkProps> = (props) => {
  const { to, children, className, ...restProps } = props;

  const styles = useLinkStyles({
    className: className,
    ...restProps
  });

  return (
    <RouterLink
      to={to}
      className={styles}
      {...restProps}>

      {children}
    </RouterLink>
  );
};