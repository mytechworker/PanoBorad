import styled from 'styled-components';
import { Flex } from 'components';

export const SearchWrapper = styled.div`
  .ant-input {
    background-color: ${(props) => props.theme.colors.gray14};
    margin-left: 20px;
    min-width: 252px;
    border: none !important ;
    height: 36px;
    outline: none !important;
    margin: 0 !important;
    font-weight: 600 !important;
    font-size: 12px !important;
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
    background-color: ${(props) => props.theme.colors.gray14};
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

export const ChatListWrapper = styled.div`
  padding-bottom: 25px;
  padding-right: 5px;
`;

export const EmptyChatListWrapper = styled.div`
  text-align: center;
  margin-top: 160px;
  h5 {
    color: ${(props) => props.theme.colors.gray8};
    font-style: normal;
    font-size: 16px;
    margin-bottom: 90px;
    letter-spacing: 0.02em;
    line-height: 158%;
  }
  img {
    margin-left: 80px;
  }
`;

export const NotSelectedPaitintWrapper = styled.div`
  text-align: center;
  margin-top: 160px;
  position: relative;
  h5 {
    color: ${(props) => props.theme.colors.gray8};
    font-style: normal;
    font-size: 16px;
    margin-bottom: 10px;
    letter-spacing: 0.02em;
    line-height: 158%;
  }
  img {
  }
`;
export const SelectedChatListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
  font-family: Mulish;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 13px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  --text-divider-gap: 1rem;
  margin-bottom: 40px;
  span {
    background: rgb(147, 156, 167, 0.2);
    width: 60px;
    height: 22px;
    text-align: center;
    padding-top: 5px;
    border-radius: 10px;
    color: ${(props) => props.theme.colors.gray9};
  }
  &:before,
  &:after {
    content: '';
    height: 1px;
    background-color: ${(props) => props.theme.colors.gray2};
    flex-grow: 1;
  }

  &:before {
    margin-right: 16px;
  }

  &:after {
    margin-left: 16px;
  }
`;
export const RecievedChat = styled.div`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px 20px 20px 0px;
  color: #fff;
  font-family: Mulish;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-align: right;
  padding: 15px 22px 15px 22px;
`;
export const SendChat = styled.div`
  background: ${(props) => props.theme.colors.gray12};
  border-radius: 20px 20px 0px 20px;
  font-weight: 800;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.colors.gray8};
  text-align: left;
  padding: 15px 22px 15px 22px;
`;
export const ConversationInfo = styled.div`
  width: calc(100% - 40px);
  position: absolute;
  bottom: 12px;
`;
export const ConversationChats = styled.div`
  overflow-y: scroll;
  max-height: 60vh;
  position: absolute;
  bottom: 50px;
  width: 100%;
  padding-right: 10px;
`;
export const SendMessageInput = styled.div`
  background: rgb(196, 196, 196, 0.2);
  border-radius: 100px;
  height: 46px;
  padding: 10px 12px 10px 40px;
  input {
    font-family: Mulish;
    background: none;
    border: none;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: ${(props) => props.theme.colors.gray1};
    width: 100%;
    height: 28px;
    outline: 0 !important;
  }
  .ant-input:focus,
  .ant-input-focused {
    border: none !important;
    outline: 0 !important;
    box-shadow: none !important;
  }
  .ant-input:hover {
    border: none !important;
    outline: 0 !important;
  }
  img {
    cursor: pointer;
  }
  .mood-icon {
    margin-right: 16px;
    z-index: 10;
  }
`;
export const EmojiWrapper = styled.div`
  position: absolute;
  right: 45px;
  bottom: 55px;
`;
export const SelectPhoneNumberWrapper = styled.span`
  cursor: pointer;
  margin-bottom: 10px;
  .ant-select-single .ant-select-selector .ant-select-selection-search {
    top: 7px !important;
  }
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      margin-left: 10px;
      width: 500px;
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
  }
`;
export const InputWrapper = styled.div`
  width: 100%;
  input {
    font-size: 12px;
    font-weight: 600;
    line-height: 15.06px;
    width: 100%;
    min-width: 120px;
    padding: 10px;
    background: #ffffff;
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    box-sizing: border-box;
    border-radius: 5px;
    height: 50px;
    font-weight: 600;
    font-size: 13px;
    line-height: 158%;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.gray1};
  }
  input:disabled {
    cursor: default;
    background-color: #f5f5f5 !important;
    border-color: rgba(118, 118, 118, 0.3) !important;
    color: #dadada !important;
    cursor: not-allowed;
  }
  input::placeholder {
    color: #dadada !important;
  }
`;
