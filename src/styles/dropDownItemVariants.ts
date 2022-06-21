import { createBoxVariant } from "./createVariants";

export const dropDownItemVariants = createBoxVariant({
  primary: {
    flex: 1,
    height: 30,
    borderTopWidth: 1,
    borderTopColor: "notSelectedItem",
    backgroundColor: "notSelectedItem",
  },
});

export const dropDownActiveItemVariants = createBoxVariant({
  primary: {
    flex: 1,
    height: 30,
    borderTopWidth: 1,
    borderTopColor: "secondary",
    backgroundColor: "selectedItem",
  },
});
