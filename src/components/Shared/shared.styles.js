import styled from 'styled-components';

export const ChangeLocationSelectWrapper = styled.div`
  .ant-select {
    line-height: 56px !important;
    height: 56px !important;
    color: ${({ theme }) => theme.colors.white};

    .ant-select-selector {
      line-height: 56px !important;
      height: 56px !important;
      border: 0 !important;
      padding: 0 18px !important;
      min-width: 299px;
      background-color: ${({ theme }) => theme.colors.gray5};
      border-radius: 10px;
      color: ${({ theme }) => theme.colors.white};

      @media (max-width: 767px) {
        min-width: 125px;
      }
    }
    .ant-select-selection-placeholder {
      line-height: 56px !important;
      color: ${({ theme }) => theme.colors.white};
    }
    .ant-select-selection-item {
      line-height: 56px !important;
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
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
export const HasNotif = styled.div`
  background-color: ${({ theme }) => theme.colors.red};
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  right: 0;
  top: 0;
`;
export const AvatarWrapper = styled.div`
  width: 38px;
  height: 38px;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const AvatarFormWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const TabPaneWrapper = styled.div`
  .modal-tab {
    .ant-tabs-ink-bar.ant-tabs-ink-bar-animated {
      background: transparent !important;
    }
    .ant-tabs-tab {
      margin-right: 25px !important;
      .ant-tabs-tab-btn {
        color: ${({ theme }) => theme.colors.gray1};
        font-size: 14px;
        font-weight: 600;
        outline: none;
      }
      &.ant-tabs-tab-active {
        border: none;
        outline: none;
        background-color: ${({ theme }) => theme.colors.blue2};
        border-radius: 20px;
        color: white;
        .ant-tabs-tab-btn {
          color: ${({ theme }) => theme.colors.black2};
        }
      }
    }
  }
`;
export const UploadWrapper = styled.div`
  .upload-wrapper {
    background: ${(props) => props.theme.colors.white} !important;
    color: ${(props) => props.theme.colors.black2} !important;
    border: 1px solid !important;
    border-color: ${({ theme }) => theme.colors.gray2} !important;
    border-radius: 50px !important;
    min-width: 120px !important;
    padding: unset !important;
    height: 32px !important;
    .anticon-upload {
      display: none !important;
    }
    span {
      font-size: 12px;
      margin-left: 0 !important;
    }
  }
  .upload-text {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
    margin: 0 !important;
  }
`;
export const TitleWrapper = styled.span`
  .employee-modal-title {
    color: ${({ theme }) => theme.colors.gray8};
    font-size: 12px;
    font-weight: 400;
    span {
      margin-left: 5px;
    }
  }
`;
export const SelectRoleUserWrapper = styled.span`
  text-align: left;
  width: 100%;
  margin-bottom: 20px;
  .role-header {
    color: ${(props) => props.theme.colors.gray8};
  }
  .ant-select {
    width: 100%;
    .ant-select-selector {
      border: 1px solid !important;
      border-color: ${({ theme }) => theme.colors.gray2} !important;
      padding: 0 18px !important;
      background-color: white;
      border-radius: 5px;
      color: #6f7d97;
      height: 45px;
      align-items: center;
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

export const ModalWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    .ant-modal {
      max-width: 100%;
      height: 100vh;
      margin: 0;
      padding: 0;
      .ant-modal-content {
        border-radius: 0 !important;
      }
    }
  }
  .no-padding {
    .ant-modal-body {
      padding: 0px !important;
    }
  }
  .ant-modal-wrap {
    .ant-modal {
      .ant-modal-content {
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 15px;
        height: 100%;
        box-shadow: 0px 16px 40px rgba(0, 0, 0, 0.32);

        .ant-modal-close {
          .ant-modal-close-x {
            width: 32px;
            height: 32px;
            margin: 16px;
          }
        }

        .ant-modal-body {
          padding: 25px;
        }
      }

      &.without-close-icon {
        .ant-modal-close {
          display: none;
        }
      }
    }
  }
`;

export const ModalContents = styled.div`
  text-align: ${(props) =>
    props.direction
      ? props.direction
      : props.theme.language === 'fa'
      ? 'right'
      : 'left'};
`;
export const SearchWrapper = styled.div`
  height: 40px;
  max-width: 413px;
  min-width: 256px;
  margin-bottom: ${(props) =>
    props.marginBottom ? `${props.marginBottom}px` : '20px'};
  input {
    height: 40px;
    border: none;
    border-radius: 5px;
    height: 40px;
    outline: none !important;
    color: ${(props) => props.theme.colors.gray16};
    font-size: 12px;
    font-family: 'Mulish';
    outline: 0;
  }
  .anticon-search {
    color: ${(props) => props.theme.colors.gray2};
  }
  .ant-input-affix-wrapper {
    border: #fff;
  }
`;

export const TimeWrapper = styled.span`
  cursor: pointer;
  margin-right: 10px;
  &.no-icon {
    .ant-select {
      .ant-select-arrow {
        display: none;
      }
      .ant-select-selector {
        text-align: center;
        color: #9c9c9c;
      }
    }
  }
  .ant-select-single.ant-select-show-arrow .ant-select-selection-item,
  .ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
    padding-right: 3px !important;
  }
  .ant-select {
    .ant-select-selector {
      border: 1px solid #dadada !important;
      margin-left: 15px;
      max-width: 56px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 5px;
      color: #9c9c9c;
      height: 52px;
      align-items: center;
      overflow: auto;
      font-weight: 600;
      font-size: 13px;

      .ant-select-item.ant-select-item-option.ant-select-item-option-selected {
        background-color: ${(props) => props.theme.colors.primary};
      }
      .span.ant-select-item-option-state {
        border: 1px solid #dadada !important;
      }
      .ant-select-selection-placeholder {
        padding-right: 3px !important;
      }
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
      display: ${(props) => (props.noIcon ? 'none' : '')};
      right: -5px;
    }
  }
`;
export const RemoveWrapper = styled.div`
  position: absolute;
  .close-icon {
    position: relative;
    bottom: 35px;
    right: 42px;
    cursor: pointer;
  }
`;
