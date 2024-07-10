/**
 * Breadcrumb.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { useBreadcrumbStyles } from "./Breadcrumb.styles";
import { IBreadcrumbProps } from "./Breadcrumb.types";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { BreadcrumbDivider } from "./BreadcrumbDivider";

export const Breadcrumb: React.FC<IBreadcrumbProps> = (props) => {
  const { list, divider } = props;

  const styles = useBreadcrumbStyles();

  if (!list || list.length === 0) {
    return null;
  }

  const listLength = list.length - 1;

  return (
    <nav>
      <ol role="list" className={styles.root}>
        {list.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem
              name={item.name}
              path={item.path}
              disabled={index === listLength || item.disabled}/>

            {index < listLength && <BreadcrumbDivider type={divider || "arrow"}/>}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};