/**
 * Breadcrumb.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Link from "../Link/Link";
import { useBreadcrumbStyles } from "./Breadcrumb.styles";
import { IBreadcrumbProps } from "./Breadcrumb.types";
import { ChevronRightRegular } from "@fluentui/react-icons";

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ list }) => {
  const styles = useBreadcrumbStyles();
  const listLength = list.length - 1;

  if (list && list.length > 0) {
    return (
      <nav>
        <ol role="list" className={styles.breadcrumbList}>
          {list.map((item, index) => (
            <React.Fragment key={item.key || index}>
              <li className={styles.breadcrumbItem}>
                <Link
                  to={item.path}
                  appearance="subtle"
                  disabled={index === listLength || item.disabled}
                  className={styles.breadcrumbLink}>

                  {item.name}
                </Link>
              </li>

              {index < listLength && (
                <li className={styles.breadcrumbItem}>
                  <ChevronRightRegular/>
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }

  return null;
};

export default Breadcrumb;