/**
 * Text.types.ts
 *
 * Copyright (c) 2024 Damian Leśniewski. All Rights Reserved.
 *
 * This source code is licensed under the GPL-3.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export type TTextSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 1000;

export type TTextWeight = "regular" | "medium" | "semibold" | "bold";

export type TTextFont = "base" | "numeric" | "monospace";

export type TTextAlignment = "start" | "center" | "end";

export type TTextPreset =
  | "Caption2"
  | "Caption2Strong"
  | "Caption1"
  | "Caption1Strong"
  | "Caption1Stronger"
  | "Body1"
  | "Body1Strong"
  | "Body1Stronger"
  | "Body2"
  | "Subtitle2"
  | "Subtitle2stronger"
  | "Subtitle1"
  | "Title3"
  | "Title2"
  | "Title1"
  | "LargeTitle"
  | "Display";

interface IBaseTextProps {
  as?: React.ElementType
  children: React.ReactNode
}

interface INonPresetTextProps extends IBaseTextProps {
  size?: TTextSize
  weight?: TTextWeight
  font?: TTextFont
  alignment?: TTextAlignment
  preset?: never
}

interface IPresetTextProps extends IBaseTextProps {
  preset: TTextPreset
  alignment?: TTextAlignment
  size?: never
  weight?: never
  font?: never
}

export interface ITextPreset {
  size: TTextSize
  weight: TTextWeight
  font: TTextFont
}

export type TTextProps = INonPresetTextProps | IPresetTextProps;