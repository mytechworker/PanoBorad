import { css } from "styled-components";

export const BaseButton = css`
  border: none;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  cursor: pointer;

  &:disabled {
    cursor: auto;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonIcon = css`
  padding: 12px;
  border-color: ${({ theme }) => theme.colors.pale_grey_02};

  border: solid 1px;
  font-size: $font-size-icon;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  &.clear {
    &:hover {
      background-color: ${({ theme }) => theme.colors.barbie_pink};
      color: #fff;
    }
  }
`;

export const FlexInline = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScrollDesign = css`
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.pale_grey_04};
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.pale_grey_02};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.pale_grey_02};
  }
`;
