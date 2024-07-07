/**
 * Text.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { mergeClasses } from "@griffel/react";
import { useTextStyles } from "./Text.styles";
import { TTextProps } from "./Text.types";

const Text: React.FC<TTextProps> = ({ className, ...props}) => {
  const styles = useTextStyles(props);

  return (
    <span className={mergeClasses(styles, className)} {...props}>
      {props.children}
    </span>
  );
};

export default Text;