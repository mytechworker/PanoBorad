const breakpoints = {
  xs: '575px',
  s: '576px',
  m: '768px',
  l: '992px',
  xl: '1300px',
  xxl: '1600px',
  getSizeNumber: (size: any) => {
    switch (size) {
      case 'xs':
        return 575;
      case 's':
        return 576;
      case 'm':
        return 768;
      case 'l':
        return 992;
      case 'xl':
        return 1300;
      case 'xxl':
        return 1600;
      default:
        return '100%';
    }
  },
};

export default breakpoints;
