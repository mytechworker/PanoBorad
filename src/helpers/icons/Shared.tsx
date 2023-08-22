import React from 'react';
import { useTheme } from 'styled-components';
import { colors } from 'theme/variables';

export const NotifIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '20'}
      viewBox={viewBox ? viewBox : '0 0 16 20'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 13.75V8.75C14 5.68 12.37 3.11 9.5 2.43V1.75C9.5 0.92 8.83 0.25 8 0.25C7.17 0.25 6.5 0.92 6.5 1.75V2.43C3.64 3.11 2 5.67 2 8.75V13.75L0 15.75V16.75H16V15.75L14 13.75ZM8 19.75C9.1 19.75 10 18.85 10 17.75H6C6 18.85 6.9 19.75 8 19.75ZM3.99999 14.75H12V8.75001C12 6.27001 10.49 4.25001 7.99999 4.25001C5.50999 4.25001 3.99999 6.27001 3.99999 8.75001V14.75Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};

export const ArrowIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '12'}
      height={height ? height : '8'}
      viewBox={viewBox ? viewBox : '0 0 12 8'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2075 0.60376L6 4.80209L1.7925 0.60376L0.5 1.89626L6 7.39626L11.5 1.89626L10.2075 0.60376Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};

export const LeftNavigationIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '12'}
      height={height ? height : '12'}
      viewBox={viewBox ? viewBox : '0 0 12 12'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 5.25H2.8725L7.065 1.0575L6 0L0 6L6 12L7.0575 10.9425L2.8725 6.75H12V5.25Z"
        fill={color ? colors[color] : colors.primary}
      />
    </svg>
  );
};

export const CloseIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '14'}
      height={height ? height : '14'}
      viewBox={viewBox ? viewBox : '0 0 14 14'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.4193 1.876L12.1268 0.583496L7.0026 5.70766L1.87844 0.583496L0.585938 1.876L5.7101 7.00016L0.585938 12.1243L1.87844 13.4168L7.0026 8.29266L12.1268 13.4168L13.4193 12.1243L8.2951 7.00016L13.4193 1.876Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const DoneIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '64'}
      height={height ? height : '64'}
      viewBox={viewBox ? viewBox : '0 0 64 64'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="32.0002"
        cy="32.0003"
        r="23.2265"
        transform="rotate(-31.9603 32.0002 32.0003)"
        stroke={color ? colors[color] : colors.primary}
        strokeWidth="5"
        strokeMiterlimit="1.41421"
        strokeLinecap="round"
      />
      <path
        d="M26.9251 38.1352L20.3226 31.5327L18.0742 33.7652L26.9251 42.616L45.9251 23.616L43.6926 21.3835L26.9251 38.1352Z"
        fill={color ? colors[color] : colors.primary}
        stroke={color ? colors[color] : colors.primary}
      />
    </svg>
  );
};
export const CheckIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '20'}
      viewBox={viewBox ? viewBox : '0 0 16 20'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.33021 10.2293L2.85521 6.75426L1.67188 7.92926L6.33021 12.5876L16.3302 2.5876L15.1552 1.4126L6.33021 10.2293Z"
        stroke={color ? color: colors.white}
        fill={color ? color : colors.white}
      />
    </svg>
  );
};


