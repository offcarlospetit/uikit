import { BoxProps, TextProps } from "@shopify/restyle";
import { RBaseTheme, RTheme } from "./types";

export const createBoxVariant = <T extends { [name: string]: BoxProps<RBaseTheme>; }>(
  variantObject: T
) => variantObject;

export const createTextVariant = <T extends { [name: string]: TextProps<RTheme>; }>(
  variantObject: T
) => variantObject;
