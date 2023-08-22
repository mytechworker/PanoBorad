import styled from 'styled-components';

export const SettingHeaderContainer = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    height: 5px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f5f5f5;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #c5cad2;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #c5cad2;
  }
  .active-setting {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.primary};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const PhoneNumberWrapper = styled.div`
  .ant-table {
    margin: 10px;
    color: ${(props) => props.theme.colors.black2};
    font-weight: 400;
    thead {
      tr {
        :first-child {
          th {
            :first-child {
              border-top-left-radius: 10px;
              border-color: ${(props) => props.theme.colors.gray2};
              min-width: 9rem;
              border-bottom: 0;
            }
          }
        }
        th {
          background: ${(props) => props.theme.colors.gray14} !important;
          color: ${(props) => props.theme.colors.gray8};
          padding-left: 10px;
          font-size: 12px;
          :last-child {
            border-top-right-radius: 10px !important;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          color: ${(props) => props.theme.colors.black2};
          padding-left: 10px;
          font-size: 12px;
          a {
            padding: 10px;
            background: ${(props) => props.theme.colors.gray2};
          }
        }
      }
    }
    &::-webkit-scrollbar {
      width: 5px;
    }
    overflow-y: auto;

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #c5cad2;
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #c5cad2;
    }
  }
`;

export const FontWrapper = styled.div`
  .text {
    font-weight: bold;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray8}!important;
  }

  .text.nt {
    font-weight: normal;
    font-size: 14px;
    color: ${(props) => props.theme.colors.gray8}!important;
  }
  .b-c {
    border-color: ${({ theme }) => theme.colors.gray2};
  }
`;
export const ButtonWrapper = styled.div`
  .bu-c1 {
    background-color: ${(props) => props.theme.colors.green1}!important;
    border: none;
  }
  .bu-c2 {
    background-color: ${(props) => props.theme.colors.red2}!important;
    border: none;
  }
`;

export const ColorWrapper = styled.div`
  .b-color {
    color: ${(props) => props.theme.colors.gray1}!important;
  }
  .b-size {
    height: 45px !important;
  }
`;
export const PhoneNumberInputWrapper = styled.div`
  width: 100%;
  padding-left: 20px;
  &:nth-child(2n) {
    .ant-input {
      margin-left: 120px !important;
    }
  }
  .ant-btn {
    width: 45%;
    border: 1px solid ${(props) => props.theme.colors.gray2} !important;
    background-color: #fff !important;
    box-sizing: border-box;
    border-radius: 5px;
    height: 52px;
    text-align: center;
    font-size: 14px;
    line-height: 158%;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.colors.black2};
    margin-bottom: 15px;
    margin-right: 10px;
    &.selected-number {
      background-color: ${(props) => props.theme.colors.gray2} !important;
    }
  }
`;

export const SelectWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  .ant-select {
    width: 100%;

    .ant-select-selector {
      border-radius: 5px;
      border: 1px solid #dadada !important;
      padding: 0 18px !important;
      background-color: ${({ theme }) => theme.colors.white}!important;
      color: ${({ theme }) => theme.colors.black2}!important;
      height: 45px;
      align-items: center;
      min-width: 93px;
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-arrow {
      color: ${(props) => props.theme.colors.gray8};
    }
    .ant-select-selection-item {
      color: ${(props) => props.theme.colors.gray8};
    }
  }
  .ant-select-item-option-selected {
    background-color: white !important;
  }
  .ant-select-dropdown {
    max-height: 10px;
    overflow: auto;
    &::-webkit-scrollbar {
      height: 7px;
    }
    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px #f5f5f5;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;
export const InputWrapper = styled.div`
  border: none;
  border-bottom: 1px solid #5a8dee;
  font-size: 12px;
  font-weight: 600;
  line-height: 15.06px;
  width: 100%;
  min-width: 120px;
  padding: 0px 5px 5px 0px;
  color: ${({ theme }) => theme.colors.black2};
  :focus {
    box-shadow: unset !important;
    background-color: ${({ theme }) => theme.colors.white}!important;
  }
`;
export const AreaCodeWrapper = styled.div`
  width: 100%;
  border-radius: 8px;

  input {
    line-height: 50px !important;
    height: 46px;
    width: 100%;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.gray8};
  }
`;
