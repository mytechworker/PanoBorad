import breakpoints from './breakpoints';

const device = {
  mobileS: `only screen and (max-width: ${breakpoints.getSizeNumber('xs')}px)`,
  mobile: `only screen and (max-width: ${breakpoints.s})`,
  tablet: `only screen and (max-width: ${breakpoints.xl})`,
  laptop: `only screen and (max-width: ${breakpoints.xl})`,
  desktop: `only screen and (min-width: ${breakpoints.getSizeNumber('xl')}px)`,
  mobileMin: `only screen and (min-width: ${breakpoints.s})`,
  tabletMin: `only screen and (min-width: ${breakpoints.l})`,
  laptopMin: `only screen and (min-width: ${breakpoints.xl})`,
};

export default device;
