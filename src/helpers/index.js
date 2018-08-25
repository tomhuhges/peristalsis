export const getWidthsByBreakpoint = string => {
  return string
    .split(' ')
    .reduce((map, declaration) => {
      const parts = declaration.split('@');
      const fraction = parts[0].split('/');
      const percentage = (fraction[0] / fraction[1]) * 100;
      const name = parts.length > 1 ? parts[1] : 'base';
      map[name] = percentage;
      return map;
    }, {});
};
