import styled from 'styled-components';

export const NotesWrapper = styled.div`
  position: relative;
  padding-top: 5px;
  z-index: 1;
  &::before {
    width: 1px;
    background: ${({ theme }) => theme.colors.primary};
    content: ' ';
    height: 100%;
    display: block;
    position: absolute;
    left: 14px;
    z-index: -1;
  }
`;

export const TagListSearchWrapper = styled.div`
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  height: 56px !important;
  .search-input {
    max-width: 100% !important;
    height: 40px !important;
  }
`;

export const TagTitleWrapper = styled.div`
  width: 95%;
  height: 42px;
  background-color: ${(props) => props.color};
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  &.orange-border {
    border-left: 3px solid ${({ theme }) => theme.colors.orange5};
  }
`;
export const TagColorItem = styled.div`
  background-color: ${(props) => props.color};
  width: 42px;
  height: 42px;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
  padding-top: 12px;
`;
export const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  input {
    background: #ffffff;
    border: 1px solid #9c9c9c;
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #6f7d97;
  }
`;
