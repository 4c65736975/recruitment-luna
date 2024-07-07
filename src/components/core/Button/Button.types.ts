/**
 * Button.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FluentIcon } from "@fluentui/react-icons";

type TButtonAppearance = "secondary" | "primary" | "outline" | "subtle" | "transparent";

type TButtonShape = "circular" | "square" | "rounded";

type TButtonIconPosition = "before" | "after";

export interface IButtonStylesProps {
  shape?: TButtonShape
  appearance?: TButtonAppearance
  iconOnly: boolean
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  shape?: TButtonShape
  appearance?: TButtonAppearance
  icon?: FluentIcon
  iconPosition?: TButtonIconPosition
}