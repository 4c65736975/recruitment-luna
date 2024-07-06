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

const defaultElement = "span";

const Text: React.FC<TTextProps> = (props) => {
  const Component = props.as ?? defaultElement;
  const styles = useTextStyles(props);

  return (
    <Component className={styles} {...props}>
      {props.children}
    </Component>
  );
};

export default Text;