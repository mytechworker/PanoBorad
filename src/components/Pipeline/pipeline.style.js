import styled from 'styled-components';

export const SearchWrapper = styled.div`
  .ant-input {
    margin-left: 10px;
    min-width: 256px;
    border: none !important ;
    height: 36px;
    outline: none !important;
    margin: 0 !important;
    font-weight: 400 !important;
    &:focus {
      border: none !important;
      box-shadow: unset !important;
    }
    span.ant-input-prefix {
      margin: 5px;
    }
  }
  .text-input {
    margin-bottom: 0 !important;
  }
  .ant-input-affix-wrapper {
    border: none !important;

    outline: none !important;

    &:focus {
      border: none !important;
      box-shadow: unset !important;
    }
  }
  input.text-input {
    margin-bottom: 0 !important;
  }
  .ant-input-group-addon {
    display: none;
  }
`;

export const ButtonWrapper = styled.button`
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.gray8};
  background-color: white;
  margin-top: -1px;
  border: none;
  /* width: 190px; */
  height: 49px;
  border-radius: 5px;
  margin-right: 5px;
`;

export const PipelineWrapper = styled.div`
  overflow: hidden;
  #first {
    .card-item {
      border-color: ${({ theme }) => theme.colors.orange};
      background-color: ${({ theme }) => theme.colors.orangeLight};
    }
  }
  #second {
    .card-item {
      border-color: ${({ theme }) => theme.colors.blue3};
      background-color: ${({ theme }) => theme.colors.blue3Light};
    }
  }
  #third {
    .card-item {
      border-color: ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors.purple3};
    }
  }
  #fourth {
    .card-item {
      border-color: ${({ theme }) => theme.colors.pink};
      background-color: ${({ theme }) => theme.colors.pinkLight};
    }
  }
  #fifth {
    .card-item {
      border-color: ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green5};
    }
  }
  .box-shadow-icon {
    box-shadow: 0px 4px 4px rgba(118, 118, 118, 0.1);
  }
  width: 100%;
`;
export const SelectPhoneNumberWrapper = styled.span`
  cursor: pointer;
  margin-bottom: 10px;
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      margin-left: 10px;
      width: 420px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 52px;
      align-items: left;
      overflow: auto;
      text-align: left;
      padding-top: 10px;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        padding-right: unset !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 56px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
    .ant-select-arrow {
      display: none;
    }
  }
`;

export const SelectDateWrpper = styled.span`
  cursor: pointer;
  width: 100%;
  .ant-select-single .ant-select-selector .ant-select-selection-search {
    top: 7px !important;
  }
  .ant-select {
    width: 100%;
    .ant-select-selector {
      border: 1px solid #dadada !important;
      width: 100%;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #6f7d97;
      height: 45px;
      align-items: left;
      overflow: auto;
      text-align: left;
      padding-top: 5px;
      font-weight: bold;
      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        padding-right: unset !important;
      }
    }
    .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      height: 45px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
    .ant-select:not(.ant-select-customize-input)
      .ant-select-selector
      .ant-select-selection-search-input {
      line-height: 56px !important;
      height: 45px;
      color: ${({ theme }) => theme.colors.white};
      padding-right: 0 !important;
    }
  }
`;
