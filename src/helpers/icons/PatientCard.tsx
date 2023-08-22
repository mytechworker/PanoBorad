import React from 'react';
import { useTheme } from 'styled-components';
import { colors } from 'theme/variables';

export const CallIcon = (props: any) => {
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
        d="M3.33333 2.5H6.25C6.70833 2.5 7.08333 2.875 7.08333 3.33333C7.08333 4.375 7.25 5.375 7.55833 6.30833C7.65 6.6 7.58333 6.925 7.35 7.15833L5.51667 8.99167C6.71667 11.35 8.65 13.275 11.0083 14.4833L12.8417 12.65C13.0083 12.4917 13.2167 12.4083 13.4333 12.4083C13.5167 12.4083 13.6083 12.4167 13.6917 12.45C14.625 12.7583 15.6333 12.925 16.6667 12.925C17.125 12.925 17.5 13.3 17.5 13.7583V16.6667C17.5 17.125 17.125 17.5 16.6667 17.5C8.84167 17.5 2.5 11.1583 2.5 3.33333C2.5 2.875 2.875 2.5 3.33333 2.5ZM5.45001 4.16666C5.50001 4.90833 5.62501 5.63333 5.82501 6.325L4.82501 7.325C4.48335 6.325 4.26668 5.26666 4.19168 4.16666H5.45001ZM13.6667 14.1833C14.375 14.3833 15.1 14.5083 15.8334 14.5583V15.8C14.7334 15.725 13.675 15.5083 12.6667 15.175L13.6667 14.1833Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const AddIcon = (props: any) => {
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
        d="M15.8346 10.8337H10.8346V15.8337H9.16797V10.8337H4.16797V9.16699H9.16797V4.16699H10.8346V9.16699H15.8346V10.8337Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};
export const AssignmentIcon = (props: any) => {
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
        d="M9.88 2.66634H12.6667C13.4 2.66634 14 3.26634 14 3.99967V13.333C14 14.0663 13.4 14.6663 12.6667 14.6663H3.33333C3.24 14.6663 3.15333 14.6597 3.06667 14.6463C2.80667 14.593 2.57333 14.4597 2.39333 14.2797C2.27333 14.153 2.17333 14.013 2.10667 13.853C2.04 13.693 2 13.513 2 13.333V3.99967C2 3.81301 2.04 3.63967 2.10667 3.48634C2.17333 3.32634 2.27333 3.17967 2.39333 3.05967C2.57333 2.87967 2.80667 2.74634 3.06667 2.69301C3.15333 2.67301 3.24 2.66634 3.33333 2.66634H6.12C6.4 1.89301 7.13333 1.33301 8 1.33301C8.86667 1.33301 9.6 1.89301 9.88 2.66634ZM4.66663 5.33301H11.3333V6.66634H4.66663V5.33301ZM11.3333 7.99969H4.66663V9.33302H11.3333V7.99969ZM9.3333 10.6663H4.66663V11.9997H9.3333V10.6663ZM8 2.49969C8.27333 2.49969 8.5 2.72636 8.5 2.99969C8.5 3.27303 8.27333 3.49969 8 3.49969C7.72667 3.49969 7.5 3.27303 7.5 2.99969C7.5 2.72636 7.72667 2.49969 8 2.49969ZM3.33337 13.333H12.6667V3.99969H3.33337V13.333Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const DateRangeIcon = (props: any) => {
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
        d="M15.8333 18.3327C16.75 18.3327 17.5 17.5827 17.5 16.666V4.99935C17.5 4.08268 16.75 3.33268 15.8333 3.33268H15V1.66602H13.3333V3.33268H6.66667V1.66602H5V3.33268H4.16667C3.24167 3.33268 2.50833 4.08268 2.50833 4.99935L2.5 16.666C2.5 17.5827 3.24167 18.3327 4.16667 18.3327H15.8333ZM7.5 10.8327V9.16602H5.83333V10.8327H7.5ZM4.16667 6.66602H15.8333V4.99935H4.16667V6.66602ZM15.8333 8.33268V16.666H4.16667V8.33268H15.8333ZM14.1667 10.8327V9.16602H12.5V10.8327H14.1667ZM10.8333 10.8327H9.16667V9.16602H10.8333V10.8327Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const ListIcon = (props: any) => {
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
        d="M16.75 2.5H3.25C2.83333 2.5 2.5 2.83333 2.5 3.25V16.75C2.5 17.0833 2.83333 17.5 3.25 17.5H16.75C17.0833 17.5 17.5 17.0833 17.5 16.75V3.25C17.5 2.83333 17.0833 2.5 16.75 2.5ZM7.5 5.83333H5.83333V7.5H7.5V5.83333ZM14.1667 5.83333H9.16667V7.5H14.1667V5.83333ZM14.1667 9.16667H9.16667V10.8333H14.1667V9.16667ZM9.16667 12.5H14.1667V14.1667H9.16667V12.5ZM5.83333 9.16667H7.5V10.8333H5.83333V9.16667ZM7.5 12.5H5.83333V14.1667H7.5V12.5ZM4.16667 15.8333H15.8333V4.16667H4.16667V15.8333Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};
export const MailOutlineIcon = (props: any) => {
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
        d="M16.668 3.33398H3.33464C2.41797 3.33398 1.6763 4.08398 1.6763 5.00065L1.66797 15.0007C1.66797 15.9173 2.41797 16.6673 3.33464 16.6673H16.668C17.5846 16.6673 18.3346 15.9173 18.3346 15.0007V5.00065C18.3346 4.08398 17.5846 3.33398 16.668 3.33398ZM3.33464 6.66732L10.0013 10.834L16.668 6.66732V15.0007H3.33464V6.66732ZM3.33464 5.00065L10.0013 9.16732L16.668 5.00065H3.33464Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const PaymentIcon = (props: any) => {
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
        d="M16.668 3.33398H3.33464C2.40964 3.33398 1.6763 4.07565 1.6763 5.00065L1.66797 15.0007C1.66797 15.9256 2.40964 16.6673 3.33464 16.6673H16.668C17.593 16.6673 18.3346 15.9256 18.3346 15.0007V5.00065C18.3346 4.07565 17.593 3.33398 16.668 3.33398ZM16.668 15.0007H3.33464V10.0007H16.668V15.0007ZM3.33464 6.66732H16.668V5.00065H3.33464V6.66732Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};
export const PermIdentityIcon = (props: any) => {
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
        d="M9.9987 3.33398C8.15703 3.33398 6.66536 4.82565 6.66536 6.66732C6.66536 8.50898 8.15703 10.0007 9.9987 10.0007C11.8404 10.0007 13.332 8.50898 13.332 6.66732C13.332 4.82565 11.8404 3.33398 9.9987 3.33398ZM11.6654 6.66732C11.6654 5.75065 10.9154 5.00065 9.9987 5.00065C9.08203 5.00065 8.33203 5.75065 8.33203 6.66732C8.33203 7.58398 9.08203 8.33398 9.9987 8.33398C10.9154 8.33398 11.6654 7.58398 11.6654 6.66732ZM14.9987 14.1673C14.832 13.5757 12.2487 12.5007 9.9987 12.5007C7.7487 12.5007 5.16536 13.5757 4.9987 14.1757V15.0007H14.9987V14.1673ZM3.33203 14.1673C3.33203 11.9507 7.7737 10.834 9.9987 10.834C12.2237 10.834 16.6654 11.9507 16.6654 14.1673V16.6673H3.33203V14.1673Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};
export const SMSIcon = (props: any) => {
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
      <rect
        width="18"
        height="18"
        fill={color ? colors[color] : colors.primary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V16.5L4.5 13.5H15C15.825 13.5 16.5 12.825 16.5 12V3C16.5 2.175 15.825 1.5 15 1.5ZM15.0001 11.9999H3.87757L3.00007 12.8774V2.99993H15.0001V11.9999ZM6.75007 6.75007H5.25007V8.25007H6.75007V6.75007ZM11.2499 6.75007H12.7499V8.25007H11.2499V6.75007ZM9.75 6.75007H8.25V8.25007H9.75V6.75007Z"
        fill={color ? colors[color] : colors.white}
      />
    </svg>
  );
};
export const TimerIcon = (props: any) => {
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
        d="M7.5 1.25391H12.5V2.92057H7.5V1.25391ZM9.16667 12.0872V7.08724H10.8333V12.0872H9.16667ZM15.8583 6.57053L17.0417 5.3872C16.6833 4.9622 16.2917 4.5622 15.8667 4.2122L14.6833 5.39553C13.3917 4.3622 11.7667 3.74553 10 3.74553C5.85833 3.74553 2.5 7.10387 2.5 11.2455C2.5 15.3872 5.85 18.7455 10 18.7455C14.15 18.7455 17.5 15.3872 17.5 11.2455C17.5 9.4872 16.8833 7.8622 15.8583 6.57053ZM4.16667 11.2539C4.16667 14.4789 6.775 17.0872 10 17.0872C13.225 17.0872 15.8333 14.4789 15.8333 11.2539C15.8333 8.02891 13.225 5.42057 10 5.42057C6.775 5.42057 4.16667 8.02891 4.16667 11.2539Z"
        fill={color ? colors[color] : colors.gray8}
      />
    </svg>
  );
};
export const OpenNewTabIcon = (props: any) => {
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
        d="M3.75 3.75V14.25H14.25V9H15.75V14.25C15.75 15.075 15.075 15.75 14.25 15.75H3.75C2.9175 15.75 2.25 15.075 2.25 14.25V3.75C2.25 2.925 2.9175 2.25 3.75 2.25H9V3.75H3.75ZM10.5001 3.75V2.25H15.7501V7.5H14.2501V4.8075L6.87756 12.18L5.82006 11.1225L13.1926 3.75H10.5001Z"
        fill={color ? colors[color] : colors.primary}
      />
    </svg>
  );
};
