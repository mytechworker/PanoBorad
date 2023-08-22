import React from 'react';

import { colors } from 'theme/variables';

export const NotifactionIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '12'}
      height={height ? height : '16'}
      viewBox={viewBox ? viewBox : '0 0 12 16'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 10.8125V7.0625C10.5 4.76 9.2775 2.8325 7.125 2.3225V1.8125C7.125 1.19 6.6225 0.6875 6 0.6875C5.3775 0.6875 4.875 1.19 4.875 1.8125V2.3225C2.73 2.8325 1.5 4.7525 1.5 7.0625V10.8125L0 12.3125V13.0625H12V12.3125L10.5 10.8125ZM6 15.3124C6.825 15.3124 7.5 14.6374 7.5 13.8124H4.5C4.5 14.6374 5.175 15.3124 6 15.3124ZM3.00013 11.5624H9.00013V7.06244C9.00013 5.20244 7.86763 3.68744 6.00013 3.68744C4.13263 3.68744 3.00013 5.20244 3.00013 7.06244V11.5624Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const CalendarIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '14'}
      height={height ? height : '16'}
      viewBox={viewBox ? viewBox : '0 0 14 16'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 14V3.5C13.75 2.675 13.075 2 12.25 2H11.5V0.5H10V2H4V0.5H2.5V2H1.75C0.9175 2 0.2575 2.675 0.2575 3.5L0.25 14C0.25 14.825 0.9175 15.5 1.75 15.5H12.25C13.075 15.5 13.75 14.825 13.75 14ZM4.75006 7.25H3.25006V8.75H4.75006V7.25ZM1.74994 4.99997H12.2499V3.49997H1.74994V4.99997ZM12.2499 6.50003V14H1.74994V6.50003H12.2499ZM10.75 8.75V7.25H9.25V8.75H10.75ZM7.74994 8.75H6.24994V7.25H7.74994V8.75Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const BuildIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '18'}
      height={height ? height : '18'}
      viewBox={viewBox ? viewBox : '0 0 18 18'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.182 7.43211L16.992 14.2421C17.292 14.5421 17.292 15.0146 16.992 15.2996L15.267 17.0246C14.9745 17.3171 14.502 17.3171 14.2095 17.0246L7.37696 10.1921C5.63696 10.8446 3.60446 10.4771 2.20946 9.08211C0.484456 7.36461 0.326956 4.67211 1.72196 2.76711L4.59446 5.63961L5.65946 4.58211L2.77946 1.69461C4.69196 0.299612 7.37696 0.457112 9.10196 2.18211C10.5195 3.60711 10.8795 5.67711 10.182 7.43211ZM7.64705 8.34706L14.7421 15.4421L15.4021 14.7746L8.31455 7.68706C8.65955 7.24456 8.88455 6.74956 8.97455 6.21706C9.16205 5.17456 8.85455 4.05706 8.04455 3.24706C7.33205 2.54206 6.39455 2.21206 5.46455 2.26456L7.78205 4.58206L4.60205 7.76206L2.28455 5.44456C2.23205 6.37456 2.56205 7.31956 3.27455 8.02456C4.05455 8.80456 5.12705 9.11206 6.14705 8.96206C6.67955 8.88706 7.18955 8.68456 7.64705 8.34706Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const WidgetIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox={viewBox ? viewBox : '0 0 16 16'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0009 0.758789L6.75586 4.99629V1.7414H0.755859V7.7414H6.75586V4.99629L11.0009 9.24129L15.2459 4.99629L11.0009 0.758789ZM13.1233 5.00377L11.0008 2.88127L8.87834 5.00377L11.0008 7.12627L13.1233 5.00377ZM5.25586 6.2414V3.2414H2.25586V6.2414H5.25586ZM12.7559 10.7414V13.7414H9.75586V10.7414H12.7559ZM5.25586 13.7414V10.7414H2.25586V13.7414H5.25586ZM14.2559 9.2414H8.25586V15.2414H14.2559V9.2414ZM0.755859 9.2414H6.75586V15.2414H0.755859V9.2414Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const EditIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '20'}
      height={height ? height : '20'}
      viewBox={viewBox ? viewBox : '0 0 20 20'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.7165 2.5C14.5082 2.5 14.2915 2.58333 14.1332 2.74167L12.6082 4.26667L15.7332 7.39167L17.2582 5.86667C17.5832 5.54167 17.5832 5.01667 17.2582 4.69167L15.3082 2.74167C15.1415 2.575 14.9332 2.5 14.7165 2.5ZM11.7167 7.51675L12.4833 8.28341L4.93333 15.8334H4.16667V15.0667L11.7167 7.51675ZM2.5 14.3749L11.7167 5.15826L14.8417 8.28326L5.625 17.4999H2.5V14.3749Z"
        fill={color ? colors[color] : colors.primary}
      />
    </svg>
  );
};
export const TrashIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '20'}
      height={height ? height : '20'}
      viewBox={viewBox ? viewBox : '0 0 20 20'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0846 2.5H7.91797L7.08464 3.33333H4.16797V5H15.8346V3.33333H12.918L12.0846 2.5ZM13.3346 7.5V15.8333H6.66797V7.5H13.3346ZM5.0013 5.83333H15.0013V15.8333C15.0013 16.75 14.2513 17.5 13.3346 17.5H6.66797C5.7513 17.5 5.0013 16.75 5.0013 15.8333V5.83333Z"
        fill="#FC4D4C"
      />
    </svg>
  );
};
export const PlusFiledIcon = (props: any) => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12ZM13.0003 13.0001H17.0003V11.0001H13.0003V7.00006H11.0003V11.0001H7.00026V13.0001H11.0003V17.0001H13.0003V13.0001Z"
        fill="#5A8DEE"
      />
    </svg>
  );
};
