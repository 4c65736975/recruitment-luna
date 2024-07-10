/**
 * useLocalStorage.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const useLocalStorage = () => {
  const add = <T>(key: string, data: T): boolean => {
    if (!has(key)) {
      set<T>(key, data);
      return true;
    }

    return false;
  };

  const set = <T>(key: string, data: T): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const get = <T>(key: string, defaultValue: T): T => {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return defaultValue;
  };

  const has = (key: string): boolean => {
    return localStorage.getItem(key) === null;
  };

  const remove = (key: string) => {
    localStorage.removeItem(key);
  };

  return { add, set, get, has, remove };
};