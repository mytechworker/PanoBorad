import styled from 'styled-components';

export const SearchWrapper = styled.div`
  .ant-input {
    margin-left: 10px;
    min-width: 309px;

    border: none !important ;
    border-radius: 5px;
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
export const ProviderAnalyticsWrapper = styled.div`
  .ant-table {
    padding: 10px;
    color: ${(props) => props.theme.colors.black2};
    font-weight: 400;
    width: 100%;
    thead {
      tr {
        :first-child {
          th {
            :first-child {
              border-top-left-radius: 10px;
              border-color: ${(props) => props.theme.colors.gray2};
              min-width: 5.14rem;
              border-bottom: 0;
            }
          }
        }
        th {
          background: ${(props) => props.theme.colors.gray14} !important;
          color: ${(props) => props.theme.colors.gray8};
          padding-left: 10px;
          font-size: 12px;
          min-width: 11rem;
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

    overflow-x: auto;
    padding-bottom: 10px;
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
