/**
 * NavigationLink.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { FluentIcon } from "@fluentui/react-icons";

export interface INavigationLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: FluentIcon
  name: string
  to: string
  disabled?: boolean
}