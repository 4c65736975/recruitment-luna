/**
 * useFetch.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

interface IFetchResult<T> {
  data: T | null;
  response: Response;
  error: Error | null;
}

export const useFetch = () => {
  const request = React.useCallback(async <T>(url: string, options?: RequestInit): Promise<IFetchResult<T>> => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return { data, response, error: null };
    } catch (error) {
      const err = error instanceof Error ? error : new Error(String(error));

      return { data: null, response: null as never, error: err };
    }
  }, []);

  return request;
};