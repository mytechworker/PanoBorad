import React from 'react';
import { colors } from 'theme/variables';
export const BalanceIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '12'}
      viewBox={viewBox ? viewBox : '0 0 16 16'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.875 4.25L8 0.5L15.125 4.25V5.75H0.875V4.25ZM8.00023 2.19506L11.9077 4.25006H4.09273L8.00023 2.19506ZM2.75 7.25H4.25V12.5H2.75V7.25ZM7.25 12.5V7.25H8.75V12.5H7.25ZM15.125 15.5V14H0.875V15.5H15.125ZM11.75 7.25H13.25V12.5H11.75V7.25Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const PeopleIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox={viewBox ? viewBox : '0 0 16 12'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.75 9C8.1975 9 9.375 7.8225 9.375 6.375C9.375 4.9275 8.1975 3.75 6.75 3.75C5.3025 3.75 4.125 4.9275 4.125 6.375C4.125 7.8225 5.3025 9 6.75 9ZM1.5 12.9375C1.5 11.19 4.995 10.3125 6.75 10.3125C8.505 10.3125 12 11.19 12 12.9375V14.25H1.5V12.9375ZM6.75004 11.8125C5.40754 11.8125 3.88504 12.315 3.25504 12.75H10.245C9.61504 12.315 8.09254 11.8125 6.75004 11.8125ZM7.875 6.375C7.875 5.7525 7.3725 5.25 6.75 5.25C6.1275 5.25 5.625 5.7525 5.625 6.375C5.625 6.9975 6.1275 7.5 6.75 7.5C7.3725 7.5 7.875 6.9975 7.875 6.375ZM12.0302 10.3575C12.9002 10.9875 13.5002 11.8275 13.5002 12.9375V14.25H16.5002V12.9375C16.5002 11.4225 13.8752 10.56 12.0302 10.3575ZM13.875 6.375C13.875 7.8225 12.6975 9 11.25 9C10.845 9 10.47 8.9025 10.125 8.7375C10.5975 8.07 10.875 7.2525 10.875 6.375C10.875 5.4975 10.5975 4.68 10.125 4.0125C10.47 3.8475 10.845 3.75 11.25 3.75C12.6975 3.75 13.875 4.9275 13.875 6.375Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const MessageIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '16'}
      viewBox={viewBox ? viewBox : '0 0 16 12'}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 4.5C16.5 3.675 15.825 3 15 3H3C2.175 3 1.5 3.675 1.5 4.5V13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5ZM15 4.5L9 8.25L3 4.5H15ZM9 9.75L3 6V13.5H15V6L9 9.75Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};

export const SettingIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '14'}
      viewBox={viewBox ? viewBox : '0 0 16 16'}
      fill={color ? colors[color] : colors.primary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6271 9C14.6271 9.255 14.6046 9.495 14.5746 9.735L16.1571 10.9725C16.2996 11.085 16.3371 11.2875 16.2471 11.4525L14.7471 14.0475C14.6796 14.1675 14.5521 14.235 14.4246 14.235C14.3796 14.235 14.3346 14.2275 14.2896 14.2125L12.4221 13.4625C12.0321 13.755 11.6121 14.01 11.1546 14.1975L10.8696 16.185C10.8471 16.365 10.6896 16.5 10.5021 16.5H7.50208C7.31458 16.5 7.15708 16.365 7.13458 16.185L6.84958 14.1975C6.39208 14.01 5.97208 13.7625 5.58208 13.4625L3.71458 14.2125C3.67708 14.2275 3.63208 14.235 3.58708 14.235C3.45208 14.235 3.32458 14.1675 3.25708 14.0475L1.75708 11.4525C1.66708 11.2875 1.70458 11.085 1.84708 10.9725L3.42958 9.735C3.39958 9.495 3.37708 9.2475 3.37708 9C3.37708 8.7525 3.39958 8.505 3.42958 8.265L1.84708 7.0275C1.70458 6.915 1.65958 6.7125 1.75708 6.5475L3.25708 3.9525C3.32458 3.8325 3.45208 3.765 3.57958 3.765C3.62458 3.765 3.66958 3.7725 3.71458 3.7875L5.58208 4.5375C5.97208 4.245 6.39208 3.99 6.84958 3.8025L7.13458 1.815C7.15708 1.635 7.31458 1.5 7.50208 1.5H10.5021C10.6896 1.5 10.8471 1.635 10.8696 1.815L11.1546 3.8025C11.6121 3.99 12.0321 4.2375 12.4221 4.5375L14.2896 3.7875C14.3271 3.7725 14.3721 3.765 14.4171 3.765C14.5521 3.765 14.6796 3.8325 14.7471 3.9525L16.2471 6.5475C16.3371 6.7125 16.2996 6.915 16.1571 7.0275L14.5746 8.265C14.6046 8.505 14.6271 8.745 14.6271 9ZM13.1271 9C13.1271 8.8425 13.1196 8.685 13.0896 8.4525L12.9846 7.605L13.6521 7.08L14.4546 6.4425L13.9296 5.535L12.9771 5.9175L12.1821 6.24L11.4996 5.715C11.1996 5.49 10.8996 5.3175 10.5771 5.1825L9.7821 4.86L9.6621 4.0125L9.5196 3H8.4771L8.3271 4.0125L8.2071 4.86L7.4121 5.1825C7.1046 5.31 6.7971 5.49 6.4746 5.73L5.7996 6.24L5.0196 5.925L4.0671 5.5425L3.5421 6.45L4.3521 7.08L5.0196 7.605L4.9146 8.4525C4.8921 8.6775 4.8771 8.85 4.8771 9C4.8771 9.15 4.8921 9.3225 4.9146 9.555L5.0196 10.4025L4.3521 10.9275L3.5421 11.5575L4.0671 12.465L5.0196 12.0825L5.8146 11.76L6.4971 12.285C6.7971 12.51 7.0971 12.6825 7.4196 12.8175L8.2146 13.14L8.3346 13.9875L8.4771 15H9.5271L9.6771 13.9875L9.7971 13.14L10.5921 12.8175C10.8996 12.69 11.2071 12.51 11.5296 12.27L12.2046 11.76L12.9846 12.075L13.9371 12.4575L14.4621 11.55L13.6521 10.92L12.9846 10.395L13.0896 9.5475C13.1121 9.3225 13.1271 9.1575 13.1271 9ZM9.00228 6C7.34478 6 6.00228 7.3425 6.00228 9C6.00228 10.6575 7.34478 12 9.00228 12C10.6598 12 12.0023 10.6575 12.0023 9C12.0023 7.3425 10.6598 6 9.00228 6ZM7.50228 9C7.50228 9.825 8.17728 10.5 9.00228 10.5C9.82728 10.5 10.5023 9.825 10.5023 9C10.5023 8.175 9.82728 7.5 9.00228 7.5C8.17728 7.5 7.50228 8.175 7.50228 9Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
export const PhoneIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '14'}
      viewBox={viewBox ? viewBox : '0 0 16 16'}
      fill={color ? colors[color] : colors.primary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.24641 0.75L12.7464 0.7575C13.5714 0.7575 14.2464 1.425 14.2464 2.25V15.75C14.2464 16.575 13.5714 17.25 12.7464 17.25H5.24641C4.42141 17.25 3.75391 16.575 3.75391 15.75V2.25C3.75391 1.425 4.42141 0.75 5.24641 0.75ZM5.24635 14.25H12.7463V3.75H5.24635V14.25Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};

export const SmsIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '16'}
      height={height ? height : '14'}
      viewBox={viewBox ? viewBox : '0 0 16 16'}
      fill={color ? colors[color] : colors.primary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V16.5L4.5 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5ZM15 12H3.8775L3 12.8775V3H15V12ZM6.75 6.75H5.25V8.25H6.75V6.75ZM11.25 6.75H12.75V8.25H11.25V6.75ZM9.75 6.75H8.25V8.25H9.75V6.75Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};

export const AddToQueIcon = (props: any) => {
  const { className, width, height, viewBox, color } = props;
  return (
    <svg
      className={className ? className : ''}
      width={width ? width : '18'}
      height={height ? height : '14'}
      viewBox={viewBox ? viewBox : '0 0 18 14'}
      fill={color ? colors[color] : colors.primary}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.75 2.25H2.25C1.4175 2.25 0.75 2.9175 0.75 3.75V12.75C0.75 13.575 1.4175 14.25 2.25 14.25H6V15.75H12V14.25H15.75C16.575 14.25 17.25 13.575 17.25 12.75V3.75C17.25 2.9175 16.575 2.25 15.75 2.25ZM8.25 11.25H9.75V9H12V7.5H9.75V5.25H8.25V7.5H6V9H8.25V11.25ZM2.25 12.75H15.75V3.75H2.25V12.75Z"
        fill={color ? colors[color] : colors.gray1}
      />
    </svg>
  );
};
