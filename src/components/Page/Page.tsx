/**
 * Page.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Text from "../core/Text/Text";
import Breadcrumb from "../core/Breadcrumb/Breadcrumb";
import { usePageStyles } from "./Page.styles";
import { IPageProps } from "./Page.types";
import Skeleton from "../core/Skeleton/Skeleton";

const Page: React.FC<IPageProps> = (props) => {
  const { header, loading, children, extraContent, breadcrumbList } = props;

  const styles = usePageStyles();

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageTopContainer}>
        <div className={styles.pageHeaderContainer}>
          {breadcrumbList && <Breadcrumb list={breadcrumbList} divider="slash"/>}

          {loading ? <Skeleton width={250} height={36}/> : <Text preset="Title2">{header}</Text>}
        </div>

        <div className={styles.pageHeaderExtraContentContainer}>
          {extraContent}
        </div>
      </div>

      <div className={styles.pageContentContainer}>
        {children}
      </div>
    </div>
  );
};

export default Page;