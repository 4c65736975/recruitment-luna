/**
 * Text.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useTextStyles } from "./Text.styles";
import { TTextProps } from "./Text.types";

export const Text: React.FC<TTextProps> = (props) => {
  const { children, className, ...restProps } = props;

  const styles = useTextStyles({
    className: className,
    ...restProps
  });

  return (
    <span className={styles} {...restProps}>
      {children}
    </span>
  );
};