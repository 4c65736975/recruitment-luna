/**
 * Error.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ErrorCircleFilled } from "@fluentui/react-icons";
import { useErrorStyles } from "./Error.styles";
import { IErrorProps } from "./Error.types";
import Text from "../core/Text/Text";

const Error: React.FC<IErrorProps> = ({ error }) => {
  const styles = useErrorStyles();

  return (
    <div className={styles.errorContainer}>
      <ErrorCircleFilled className={styles.errorIcon}/>
      <Text preset="LargeTitle">{error.message}</Text>
    </div>
  );
};

export default Error;