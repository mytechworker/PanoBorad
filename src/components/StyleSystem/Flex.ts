import styled from 'styled-components';

type Flex = {
  [index: string]: any;
  color: any;
};
export const Flex = styled.div<Flex>`
  display: flex;

  /* Overflow */
  overflow: ${(props) => props.overflow ?? ''};
  overflow-x: ${(props) => props.overflowX ?? ''};
  overflow-y: ${(props) => props.overflowY ?? ''};

  /* DIRECTION */
  direction: ${(props) => {
    if (props.direction) return props.direction;
    if (props.theme.language === 'fa') return 'rtl';
    return 'ltr';
  }};
  /* COLOR */
  color: ${(props) =>
    !!props.theme.colors[props.color]
      ? props.theme.colors[props.color]
      : props.theme.colors.black2};

  /* FONT_FAMILY */
  font-family: ${(props) => {
    if (props.fontFamily) return props.fontFamily;
    if (props.theme.language === 'fa') return 'Mulish';
    return 'Mulish';
  }};

  /* WIDTH */
  width: ${(props) => (props.width ? props.width : '')};
  min-width: ${(props) => (props.minWidth ? props.minWidth : '')};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '')};

  /* HEIGHT */
  height: ${(props) => (props.height ? props.height : '')};
  min-height: ${(props) => (props.minHeight ? props.minHeight : '')};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : '')};

  /* MARGIN */
  margin: ${(props) => (props.margin ? props.margin : '')};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '')};
  margin-inline-end: ${(props) => (props.marginRight ? props.marginRight : '')};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : '')};
  margin-inline-start: ${(props) => (props.marginLeft ? props.marginLeft : '')};

  /* PADDING */
  padding: ${(props) => (props.padding ? props.padding : '')};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '')};
  padding-inline-end: ${(props) =>
    props.paddingRight ? props.paddingRight : ''};
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : ''};
  padding-inline-start: ${(props) =>
    props.paddingLeft ? props.paddingLeft : ''};

  /* DISPLAY */
  display: ${(props) => (props.display ? props.display : '')};

  /* BACKGROUND */
  background: ${(props) =>
    props.background
      ? props.theme.colors[props.background] || props.background
      : ''};

  /* BORDERRADIUS */
  border-radius: ${(props) => props.borderRadius || ''};

  /* TEXT ALIGN */
  text-align: ${(props) => (props.align ? props.align : '')};

  /* BORDER */
  border: ${(props) => (props.border ? props.border : '')};
  border-bottom: ${(props) => (props.borderBottom ? props.borderBottom : '')};
  border-top: ${(props) => (props.borderTop ? props.borderTop : '')};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : '')};
  border-right: ${(props) => (props.borderRight ? props.borderRight : '')};
  border-radius: ${(props) => (props.borderRadius ? props.borderRadius : '')};
  border-color: ${(props) =>
    props.theme.colors[props.borderColor] || props.borderColor};

  /* POSITION */
  position: ${(props) => (props.position ? props.position : '')};
  right: ${(props) => (props.right ? props.right : '')};
  left: ${(props) => (props.left ? props.left : '')};
  bottom: ${(props) => (props.bottom ? props.bottom : '')};
  top: ${(props) => (props.top ? props.top : '')};

  /* FLEX */
  -ms-flex: ${(props) => props.flexOrder || ''};
  flex: ${(props) => props.flexOrder || ''};
  flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : '')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'center'};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : ''};
  gap: ${(props) => (props.flexGap ? props.flexGap : '')};

  @media ${({ theme }) => theme.device.desktop} {
    /* WIDTH */
    width: ${(props) => (props.widthD ? props.widthD : '')};
    min-width: ${(props) => (props.minWidthD ? props.minWidthD : '')};
    max-width: ${(props) => (props.maxWidthD ? props.maxWidthD : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightD ? props.heightD : '')};
    min-height: ${(props) => (props.minHeightD ? props.minHeightD : '')};
    max-height: ${(props) => (props.maxHeightD ? props.maxHeightD : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginD ? props.marginD : '')};
    margin-top: ${(props) => (props.marginTopD ? props.marginTopD : '')};
    margin-inline-end: ${(props) =>
      props.marginRightD ? props.marginRightD : ''};
    margin-bottom: ${(props) =>
      props.marginBottomD ? props.marginBottomD : ''};
    margin-inline-start: ${(props) =>
      props.marginLeftD ? props.marginLeftD : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingD ? props.paddingD : '')};
    padding-top: ${(props) => (props.paddingTopD ? props.paddingTopD : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightD ? props.paddingRightD : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomD ? props.paddingBottomD : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftD ? props.paddingLeftD : ''};

    /* DISPLAY */
    display: ${(props) => (props.displayD ? props.displayD : '')};

    /* BACKGROUND */
    background: ${(props) =>
      props.backgroundD
        ? props.theme.colors[props.backgroundD] || props.backgroundD
        : ''};

    /* BORDERRADIUS */
    border-radius: ${(props) => props.borderRadiusD || ''};

    /* TEXT ALIGN */
    text-align: ${(props) => (props.alignD ? props.alignD : '')};

    /* BORDER */
    border: ${(props) => (props.borderD ? props.borderD : '')};
    border-bottom: ${(props) =>
      props.borderBottomD ? props.borderBottomD : ''};
    border-top: ${(props) => (props.borderTopD ? props.borderTopD : '')};
    border-left: ${(props) => (props.borderLeftD ? props.borderLeftD : '')};
    border-right: ${(props) => (props.borderRightD ? props.borderRightD : '')};
    border-radius: ${(props) =>
      props.borderRadiusD ? props.borderRadiusD : ''};
    border-color: ${(props) =>
      props.theme.colors[props.borderColorD] || props.borderColorD};

    /* POSITION */
    position: ${(props) => (props.positionD ? props.positionD : '')};
    right: ${(props) => (props.rightD ? props.rightD : '')};
    left: ${(props) => (props.leftD ? props.leftD : '')};
    bottom: ${(props) => (props.bottomD ? props.bottomD : '')};
    top: ${(props) => (props.topD ? props.topD : '')};

    /* FLEX */
    -ms-flex: ${(props) => props.flexOrderD || ''};
    flex: ${(props) => props.flexOrderD || ''};
    flex-wrap: ${(props) => (props.flexWrapD ? props.flexWrapD : '')};
    justify-content: ${(props) =>
      props.justifyContentD ? props.justifyContentD : ''};
    align-items: ${(props) => (props.alignItemsD ? props.alignItemsD : '')};
    flex-direction: ${(props) =>
      props.flexDirectionD ? props.flexDirectionD : ''};
    gap: ${(props) => (props.flexGapD ? props.flexGapD : '')};
  }

  @media ${({ theme }) => theme.device.laptop} {
    /* WIDTH */
    width: ${(props) => (props.widthL ? props.widthL : '')};
    min-width: ${(props) => (props.minWidthL ? props.minWidthL : '')};
    max-width: ${(props) => (props.maxWidthL ? props.maxWidthL : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightL ? props.heightL : '')};
    min-height: ${(props) => (props.minHeightL ? props.minHeightL : '')};
    max-height: ${(props) => (props.maxHeightL ? props.maxHeightL : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginL ? props.marginL : '')};
    margin-top: ${(props) => (props.marginTopL ? props.marginTopL : '')};
    margin-inline-end: ${(props) =>
      props.marginRightL ? props.marginRightL : ''};
    margin-bottom: ${(props) =>
      props.marginBottomL ? props.marginBottomL : ''};
    margin-inline-start: ${(props) =>
      props.marginLeftL ? props.marginLeftL : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingL ? props.paddingL : '')};
    padding-top: ${(props) => (props.paddingTopL ? props.paddingTopL : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightL ? props.paddingRightL : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomL ? props.paddingBottomL : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftL ? props.paddingLeftL : ''};

    /* DISPLAY */
    display: ${(props) => (props.displayL ? props.displayL : '')};

    /* BACKGROUND */
    background: ${(props) =>
      props.backgroundL
        ? props.theme.colors[props.backgroundL] || props.backgroundL
        : ''};

    /* BORDERRADIUS */
    border-radius: ${(props) => props.borderRadiusL || ''};

    /* TEXT ALIGN */
    text-align: ${(props) => (props.alignL ? props.alignL : '')};

    /* BORDER */
    border: ${(props) => (props.borderL ? props.borderL : '')};
    border-bottom: ${(props) =>
      props.borderBottomL ? props.borderBottomL : ''};
    border-top: ${(props) => (props.borderTopL ? props.borderTopL : '')};
    border-left: ${(props) => (props.borderLeftL ? props.borderLeftL : '')};
    border-right: ${(props) => (props.borderRightL ? props.borderRightL : '')};
    border-radius: ${(props) =>
      props.borderRadiusL ? props.borderRadiusL : ''};
    border-color: ${(props) =>
      props.theme.colors[props.borderColorL] || props.borderColorL};

    /* POSITION */
    position: ${(props) => (props.positionL ? props.positionL : '')};
    right: ${(props) => (props.rightL ? props.rightL : '')};
    left: ${(props) => (props.leftL ? props.leftL : '')};
    bottom: ${(props) => (props.bottomL ? props.bottomL : '')};
    top: ${(props) => (props.topL ? props.topL : '')};

    /* FLEX */
    -ms-flex: ${(props) => props.flexOrderL || ''};
    flex: ${(props) => props.flexOrderL || ''};
    flex-wrap: ${(props) => (props.flexWrapL ? props.flexWrapL : '')};
    justify-content: ${(props) =>
      props.justifyContentL ? props.justifyContentL : ''};
    align-items: ${(props) => (props.alignItemsL ? props.alignItemsL : '')};
    flex-direction: ${(props) =>
      props.flexDirectionL ? props.flexDirectionL : ''};
    gap: ${(props) => (props.flexGapL ? props.flexGapL : '')};
  }

  @media ${({ theme }) => theme.device.tablet} {
    /* WIDTH */
    width: ${(props) => (props.widthT ? props.widthT : '')};
    min-width: ${(props) => (props.minWidthT ? props.minWidthT : '')};
    max-width: ${(props) => (props.maxWidthT ? props.maxWidthT : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightT ? props.heightT : '')};
    min-height: ${(props) => (props.minHeightT ? props.minHeightT : '')};
    max-height: ${(props) => (props.maxHeightT ? props.maxHeightT : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginT ? props.marginT : '')};
    margin-top: ${(props) => (props.marginTopT ? props.marginTopT : '')};
    margin-inline-end: ${(props) =>
      props.marginRightT ? props.marginRightT : ''};
    margin-bottom: ${(props) =>
      props.marginBottomT ? props.marginBottomT : ''};
    margin-inline-start: ${(props) =>
      props.marginLeftT ? props.marginLeftT : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingT ? props.paddingT : '')};
    padding-top: ${(props) => (props.paddingTopT ? props.paddingTopT : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightT ? props.paddingRightT : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomT ? props.paddingBottomT : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftT ? props.paddingLeftT : ''};

    /* DISPLAY */
    display: ${(props) => (props.displayT ? props.displayT : '')};

    /* BACKGROUND */
    background: ${(props) =>
      props.backgroundT
        ? props.theme.colors[props.backgroundT] || props.backgroundT
        : ''};

    /* BORDERRADIUS */
    border-radius: ${(props) => props.borderRadiusT || ''};

    /* TEXT ALIGN */
    text-align: ${(props) => (props.alignT ? props.alignT : '')};

    /* BORDER */
    border: ${(props) => (props.borderT ? props.borderT : '')};
    border-bottom: ${(props) =>
      props.borderBottomT ? props.borderBottomT : ''};
    border-top: ${(props) => (props.borderTopT ? props.borderTopT : '')};
    border-left: ${(props) => (props.borderLeftT ? props.borderLeftT : '')};
    border-right: ${(props) => (props.borderRightT ? props.borderRightT : '')};
    border-radius: ${(props) =>
      props.borderRadiusT ? props.borderRadiusT : ''};
    border-color: ${(props) =>
      props.theme.colors[props.borderColorT] || props.borderColorT};

    /* POSITION */
    position: ${(props) => (props.positionT ? props.positionT : '')};
    right: ${(props) => (props.rightT ? props.rightT : '')};
    left: ${(props) => (props.leftT ? props.leftT : '')};
    bottom: ${(props) => (props.bottomT ? props.bottomT : '')};
    top: ${(props) => (props.topT ? props.topT : '')};

    /* FLEX */
    -ms-flex: ${(props) => props.flexOrderT || ''};
    flex: ${(props) => props.flexOrderT || ''};
    flex-wrap: ${(props) => (props.flexWrapT ? props.flexWrapT : '')};
    justify-content: ${(props) =>
      props.justifyContentT ? props.justifyContentT : ''};
    align-items: ${(props) => (props.alignItemsT ? props.alignItemsT : '')};
    flex-direction: ${(props) =>
      props.flexDirectionT ? props.flexDirectionT : ''};
    gap: ${(props) => (props.flexGapT ? props.flexGapT : '')};
  }

  @media ${({ theme }) => theme.device.mobile} {
    /* WIDTH */
    width: ${(props) => (props.widthM ? props.widthM : '')};
    min-width: ${(props) => (props.minWidthM ? props.minWidthM : '')};
    max-width: ${(props) => (props.maxWidthM ? props.maxWidthM : '')};

    /* HEIGHT */
    height: ${(props) => (props.heightM ? props.heightM : '')};
    min-height: ${(props) => (props.minHeightM ? props.minHeightM : '')};
    max-height: ${(props) => (props.maxHeightM ? props.maxHeightM : '')};

    /* MARGIN */
    margin: ${(props) => (props.marginM ? props.marginM : '')};
    margin-top: ${(props) => (props.marginTopM ? props.marginTopM : '')};
    margin-inline-end: ${(props) =>
      props.marginRightM ? props.marginRightM : ''};
    margin-bottom: ${(props) =>
      props.marginBottomM ? props.marginBottomM : ''};
    margin-inline-start: ${(props) =>
      props.marginLeftM ? props.marginLeftM : ''};

    /* PADDING */
    padding: ${(props) => (props.paddingM ? props.paddingM : '')};
    padding-top: ${(props) => (props.paddingTopM ? props.paddingTopM : '')};
    padding-inline-end: ${(props) =>
      props.paddingRightM ? props.paddingRightM : ''};
    padding-bottom: ${(props) =>
      props.paddingBottomM ? props.paddingBottomM : ''};
    padding-inline-start: ${(props) =>
      props.paddingLeftM ? props.paddingLeftM : ''};

    /* DISPLAY */
    display: ${(props) => (props.displayM ? props.displayM : '')};

    /* BACKGROUND */
    background: ${(props) =>
      props.backgroundM
        ? props.theme.colors[props.backgroundM] || props.backgroundM
        : ''};

    /* BORDERRADIUS */
    border-radius: ${(props) => props.borderRadiusM || ''};

    /* TEXT ALIGN */
    text-align: ${(props) => (props.alignM ? props.alignM : '')};

    /* BORDER */
    border: ${(props) => (props.borderM ? props.borderM : '')};
    border-bottom: ${(props) =>
      props.borderBottomM ? props.borderBottomM : ''};
    border-top: ${(props) => (props.borderTopM ? props.borderTopM : '')};
    border-left: ${(props) => (props.borderLeftM ? props.borderLeftM : '')};
    border-right: ${(props) => (props.borderRightM ? props.borderRightM : '')};
    border-radius: ${(props) =>
      props.borderRadiusM ? props.borderRadiusM : ''};
    border-color: ${(props) =>
      props.theme.colors[props.borderColorM] || props.borderColorM};

    /* POSITION */
    position: ${(props) => (props.positionM ? props.positionM : '')};
    right: ${(props) => (props.rightM ? props.rightM : '')};
    left: ${(props) => (props.leftM ? props.leftM : '')};
    bottom: ${(props) => (props.bottomM ? props.bottomM : '')};
    top: ${(props) => (props.topM ? props.topM : '')};

    /* FLEX */
    -ms-flex: ${(props) => props.flexOrderM || ''};
    flex: ${(props) => props.flexOrderM || ''};
    flex-wrap: ${(props) => (props.flexWrapM ? props.flexWrapM : '')};
    justify-content: ${(props) =>
      props.justifyContentM ? props.justifyContentM : ''};
    align-items: ${(props) => (props.alignItemsM ? props.alignItemsM : '')};
    flex-direction: ${(props) =>
      props.flexDirectionM ? props.flexDirectionM : ''};
    gap: ${(props) => (props.flexGapM ? props.flexGapM : '')};
  }
`;
