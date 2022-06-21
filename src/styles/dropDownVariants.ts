import { createBoxVariant } from "./createVariants";

export const dropDownContentVariants = createBoxVariant({
  primary: {
    paddingTop: "none",
    paddingBottom: "none",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export const dropDownScrollViewVariants = createBoxVariant({
  primary: {
    maxHeight: 200,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
