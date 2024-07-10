/**
 * PageLayout.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Text } from "@/components/Text";
import { usePageLayoutStyles } from "./PageLayout.styles";
import { IPageLayoutProps } from "./PageLayout.types";
import { Breadcrumb } from "@/components/Breadcrumb";

export const PageLayout: React.FC<IPageLayoutProps> = props => {
  const { name, children, extraContent, breadcrumbList } = props;

  const styles = usePageLayoutStyles();

  return (
    <div className={styles.root}>
      <div className={styles.headerContainer}>
        <div className={styles.titleContainer}>
          {breadcrumbList && <Breadcrumb list={breadcrumbList} divider="slash"/>}

          <Text preset="Title2">
            {name}
          </Text>
        </div>

        <div className={styles.headerExtraContentContainer}>
          {extraContent}
        </div>
      </div>

      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  );
};