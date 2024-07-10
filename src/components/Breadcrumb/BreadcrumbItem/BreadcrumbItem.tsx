/**
 * BreadcrumbItem.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Link } from "@/components/Link";
import { useBreadcrumbItemStyles } from "./BreadcrumbItem.styles";
import { IBreadcrumbItem } from "./BreadcrumbItem.types";

export const BreadcrumbItem: React.FC<IBreadcrumbItem> = (props) => {
  const { name, path, disabled } = props;

  const styles = useBreadcrumbItemStyles();

  return (
    <li className={styles.root}>
      <Link
        to={path}
        disabled={disabled}>

        {name}
      </Link>
    </li>
  );
};