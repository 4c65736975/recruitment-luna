/**
 * useFetch.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

export const useFetch = <T>(url: string, defaultValue: T, options?: RequestInit): [T, React.Dispatch<React.SetStateAction<T>>, boolean, Error | null] => {
  const [data, setData] = React.useState<T>(defaultValue);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchData = React.useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const result = await response.json();

      setData(result);
      setError(null);
    } catch (err) {
      setData(defaultValue);
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  }, [defaultValue, options, url]);

  React.useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, setData, loading, error];
};