import { BoxProps } from "@shopify/restyle";
import { createBoxVariant } from "./createVariants";
import pallete from "./pallete";
import { RBaseTheme } from "./types";

export const tagColors = {
  tagBackground: pallete.grayscale[300],
  outlinedTagBorder: pallete.grayscale[100],
  successTagBorder: pallete.semantic.success,
  warningTagBorder: pallete.semantic.warning,
  errorTagBorder: pallete.semantic.error,
  successTagText: pallete.semantic.success,
  errorTagText: pallete.semantic.error,
  warningTagText: pallete.grayscale[100],
  filledTagText: pallete.grayscale[100],
  outlinedTagText: pallete.grayscale[100],
  outlinedTagBackground: pallete.grayscale.white,
  infoTagBorder: pallete.semantic.info,
  infoTagText: pallete.semantic.info,
  primaryTagBorder: pallete.brand.primary,
  primaryTagText: pallete.brand.primary,
  primaryTagBackground: pallete.shades[400],
  primaryFilledTagBorder: pallete.shades[300],
  primaryFilledTagText: pallete.grayscale.white,
  primaryFilledTagBackground: pallete.shades[300],
  primaryOutlinedTagBorder: pallete.shades[200],
  primaryOutlinedTagText: pallete.brand.primary,
  primaryOutlinedTagBackground: pallete.grayscale.white,
  primaryOutlinedTagIcon: pallete.shades[200],
};

const baseTag: BoxProps<RBaseTheme> = {
  flexDirection: "row",
  paddingHorizontal: "m",
  borderRadius: 100,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "tagBackground",
};

// eslint-disable-next-line import/prefer-default-export
export const tagVariants = createBoxVariant({
  filled: {
    ...baseTag,
  },
  outlined: {
    ...baseTag,
    backgroundColor: "outlinedTagBackground",
    borderColor: "outlinedTagBorder",
    borderWidth: 1,
  },
  success: {
    ...baseTag,
    borderColor: "successTagBorder",
    borderWidth: 1,
  },
  warning: {
    ...baseTag,
    borderColor: "warningTagBorder",
    borderWidth: 1,
  },
  error: {
    ...baseTag,
    borderColor: "errorTagBorder",
    borderWidth: 1,
  },
  info: {
    ...baseTag,
    borderColor: "infoTagBorder",
    borderWidth: 1,
  },
  primary: {
    ...baseTag,
    borderColor: "primaryTagBorder",
    borderWidth: 1,
    backgroundColor: "primaryTagBackground",
  },
  primaryFilled: {
    ...baseTag,
    borderColor: "primaryFilledTagBorder",
    borderWidth: 1,
    backgroundColor: "primaryFilledTagBackground",
  },
  primaryOutlined: {
    ...baseTag,
    borderColor: "primaryOutlinedTagBorder",
    borderWidth: 1,
    backgroundColor: "primaryOutlinedTagBackground",
  },
});
