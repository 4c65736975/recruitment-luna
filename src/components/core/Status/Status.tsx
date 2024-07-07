/**
 * Status.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useStatusStyles } from "./Status.styles";
import { IStatusProps } from "./Status.types";

const Status: React.FC<IStatusProps> = (props) => {
  const styles = useStatusStyles(props);

  return (
    <div className={styles}></div>
  );
};

export default Status;