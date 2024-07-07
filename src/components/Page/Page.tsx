/**
 * Page.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Text from "../Text/Text";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { usePageStyles } from "./Page.styles";
import { IPageProps } from "./Page.types";

const Page: React.FC<IPageProps> = ({ header, children, extraContent, breadcrumbList, ...props }) => {
  const styles = usePageStyles();

  return (
    <div className={styles.pageContainer} {...props}>
      <div className={styles.pageTopContainer}>
        <div className={styles.pageHeaderContainer}>
          {breadcrumbList && <Breadcrumb list={breadcrumbList} divider="slash"/>}

          <Text preset="Title2">
            {header}
          </Text>
        </div>

        {extraContent}
      </div>

      <div className={styles.pageContentContainer}>
        {children}
      </div>
    </div>
  );
};

export default Page;