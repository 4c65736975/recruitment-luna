/**
 * Dialog.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import Text from "../Text/Text";
import { IDialogProps } from "./Dialog.types";
import { useDialogStyles } from "./Dialog.styles";

const Dialog: React.FC<IDialogProps> = (props) => {
  const { isOpen, title, actions, children } = props;

  const dialogRef = React.useRef<HTMLDialogElement | null>(null);

  const styles = useDialogStyles();

  React.useEffect(() => {
    if (dialogRef.current) {
      const dialog = dialogRef.current;

      isOpen ? dialog.showModal() : dialog.close();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}>

      <Text
        preset="Subtitle1"
        className={styles.dialogTitle}>

        {title}
      </Text>

      <div className={styles.dialogContent}>
        {children}
      </div>

      <div className={styles.dialogActions}>
        {actions}
      </div>
    </dialog>
  );
};

export default Dialog;