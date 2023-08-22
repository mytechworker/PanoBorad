import styled from 'styled-components';

export const ApplyBtn = styled.button`
  line-height: 32px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
export const ClearBtn = styled.button`
  line-height: 32px;
  border: none;
  border-radius: 5px;
  padding: 0 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray8};
  background-color: transparent;
`;
export const SearchWrapper = styled.div`
  max-width: 413px;
  .ant-input {
    margin-left: 10px;
    max-width: 413px;
    border-radius: 5px;
    border: none !important ;
    border-radius: 5px;
    height: 40px;
    outline: none !important;
    margin: 0 !important;
    font-weight: 400 !important;
    font-size: 14px;
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

export const MapWrapper = styled.div`
  height: 424px;
  border-radius: 10px;
  margin: 5px;
`;

export const LocationAnalyticTable = styled.div`
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
              border-right: 1px solid;
              border-color: ${(props) => props.theme.colors.gray2};
              min-width: 9rem;
              border-bottom: 0;
            }
            :last-child {
              border-top-right-radius: 10px;
              border-bottom: 1px solid;
              border-color: ${(props) => props.theme.colors.gray2};
              font-size: 14px;
              font-weight: 700;
              color: ${(props) => props.theme.colors.black2};
            }
          }
        }
        th {
          background: ${(props) => props.theme.colors.blue2} !important;
          color: ${(props) => props.theme.colors.gray8};
          padding-left: 10px;
          font-size: 12px;
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
