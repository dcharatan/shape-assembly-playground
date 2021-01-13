export const COLOR_PRIMARY = '#4285f4';
export const COLOR_DIRECT = '#4285f4';
export const COLOR_SECONDARY = '#28a745';

export const getColor = (selection) =>
  ({
    direct: COLOR_DIRECT,
    primary: COLOR_PRIMARY,
    secondary: COLOR_SECONDARY,
  }[selection]);
