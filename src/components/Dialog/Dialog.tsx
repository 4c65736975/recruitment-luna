/**
 * Dialog.tsx
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import { Text } from "../Text";
import { IDialogProps } from "./Dialog.types";
import { useDialogStyles } from "./Dialog.styles";

export const Dialog: React.FC<IDialogProps> = (props) => {
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
      className={styles.root}>

      <Text
        preset="Subtitle1"
        className={styles.title}>

        {title}
      </Text>

      <div className={styles.content}>
        {children}
      </div>

      <div className={styles.actions}>
        {actions}
      </div>
    </dialog>
  );
};