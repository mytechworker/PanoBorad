import React from 'react';
import { colors } from 'theme/variables';

export const ArrowUpwardIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '22'}
      height={height ? height : '22'}
      viewBox={viewBox ? viewBox : '0 0 22 22'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="11"
        fill={color ? colors[color] : colors.green1}
      />
      <path
        d="M5 11L6.0575 12.0575L10.25 7.8725V17H11.75V7.8725L15.935 12.065L17 11L11 5L5 11Z"
        fill={colors.white}
      />
    </svg>
  );
};

export const ArrowDownwardIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '22'}
      height={height ? height : '22'}
      viewBox={viewBox ? viewBox : '0 0 22 22'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="11"
        fill={color ? colors[color] : colors.red}
      />
      <path
        d="M17 11L15.9425 9.9425L11.75 14.1275L11.75 5L10.25 5L10.25 14.1275L6.065 9.935L5 11L11 17L17 11Z"
        fill={colors.white}
      />
    </svg>
  );
};

export const PinIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '24'}
      height={height ? height : '24'}
      viewBox={viewBox ? viewBox : '0 0 24 24'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="24"
        height="24"
        rx="4"
        fill={color ? colors[color] : colors.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 12.7643C17 12.4286 16.7571 12.1571 16.4286 12.0643C15.5214 11.8143 14.8571 10.9857 14.8571 10V6.42857H15.5714C15.9643 6.42857 16.2857 6.10714 16.2857 5.71429C16.2857 5.32143 15.9643 5 15.5714 5H8.42857C8.03571 5 7.71429 5.32143 7.71429 5.71429C7.71429 6.10714 8.03571 6.42857 8.42857 6.42857H9.14286V10C9.14286 10.9857 8.47857 11.8143 7.57143 12.0643C7.24286 12.1571 7 12.4286 7 12.7643V12.8571C7 13.25 7.32143 13.5714 7.71429 13.5714H11.2714L11.2857 18.5714C11.2857 18.9643 11.6071 19.2857 12 19.2857C12.3929 19.2857 12.7143 18.9643 12.7143 18.5714L12.7 13.5714H16.2857C16.6786 13.5714 17 13.25 17 12.8571V12.7643Z"
        fill={colors.white}
      />
    </svg>
  );
};
