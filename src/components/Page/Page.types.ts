/**
 * Page.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IBreadcrumbItem } from "../core/Breadcrumb/Breadcrumb.types";

export interface IPageProps {
  header: string
  loading?: boolean
  children: React.ReactNode
  extraContent?: React.ReactNode
  breadcrumbList?: IBreadcrumbItem[]
}