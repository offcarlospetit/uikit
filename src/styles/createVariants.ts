import { BoxProps, TextProps } from "@shopify/restyle";
import { RBaseTheme, RTheme } from "./types";

export type CreateBoxVariantType = <T extends { [name: string]: BoxProps<RBaseTheme>; }>(variantObject: T) => T;
export type CreateTextVariantType = <T extends { [name: string]: TextProps<RBaseTheme>; }>(variantObject: T) => T;

export const createBoxVariant: CreateBoxVariantType = <T extends { [name: string]: BoxProps<RBaseTheme>; }>(
  variantObject: T
) => variantObject;

export const createTextVariant: CreateTextVariantType = <T extends { [name: string]: TextProps<RTheme>; }>(
  variantObject: T
) => variantObject;
