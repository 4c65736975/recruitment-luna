/**
 * useParams.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useParams as useRouterParams } from "react-router-dom";

/**
 * Override useParams to get rid of TypeScript complaints about possibly undefined values.
 * Since it's a route parameter (not a query string), if the parameter doesn't exist, it means the route is different.
 */
export const useParams = <T extends Record<string, unknown>>() => useRouterParams() as T;