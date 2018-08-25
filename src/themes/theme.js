import { rem } from 'polished';

export default {
  maxWidth: 1200,
  breakpoints: {
    mobile: 480,
    tablet: 768,
    desktop: 900,
    wide: 1200
  },
  space: {
    flush: rem('0px'),
    tiny: rem('4px'),
    small: rem('8px'),
    base: rem('16px'),
    large: rem('32px'),
    huge: rem('64px')
  },
  fontSize: {
    base: '16px'
  }
};
