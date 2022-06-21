import { createBoxVariant } from "./createVariants";
import pallete from "./pallete";

export enum variants {
  primary = "primary",
}

export const toggleButtonColors = {
  tertiaryTypeCBorder: pallete.grayscale[300],
  [`${variants.primary}ToggleSelectedBorder` as const]: pallete.brand.primary,
  [`${variants.primary}ToggleSelectedBackground` as const]: pallete.shades[500],
  [`${variants.primary}ToggleNotSelectedBorder` as const]:
    pallete.grayscale[200],
  [`${variants.primary}ToggleSelectedText` as const]: pallete.brand.primary,
  [`${variants.primary}ToggleNotSelectedText` as const]: pallete.brand.black,
};

export const toggleButtonVariant = createBoxVariant({
  primarySelected: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "primaryToggleSelectedBorder",
    backgroundColor: "primaryToggleSelectedBackground",
  },
  primaryNotSelected: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "primaryToggleNotSelectedBorder",
  },
});

export const toggleButtonSize = createBoxVariant({
  m: { height: 36 },
});
