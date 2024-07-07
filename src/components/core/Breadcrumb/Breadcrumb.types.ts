/**
 * Breadcrumb.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

type TBreadcrumbDivider = "arrow" | "slash";

export interface IBreadcrumbItem {
  key: React.Key
  name: string
  path: string
  disabled?: boolean
}

export interface IBreadcrumbProps {
  list: IBreadcrumbItem[]
  divider?: TBreadcrumbDivider
}