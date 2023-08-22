import styled from 'styled-components';

export const SearchWrapper = styled.div`
  .ant-input {
    margin-left: 10px;
    min-width: 309px;
    border-radius: 5px;
    border: none !important ;
    height: 48px;
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
    border-radius: 5px !important;
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
export const SelectWrapper = styled.span`
  .ant-select {
    .ant-select-selector {
      border: 0 !important;
      padding: 0 18px !important;
      background-color: white;
      border-radius: 5px;
      color: #6f7d97;
      height: 45px;
      align-items: center;
      width: 200px;
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
  }
`;
export const ImgTableStyle = styled('img')`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 5px;
`;
