import colors from "./colors";

const themes = {
  color: colors
} as const;

export type ThemeType = typeof themes;
export default themes;
