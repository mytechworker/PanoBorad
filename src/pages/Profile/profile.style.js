import styled from 'styled-components';

export const ProfileWrapper = styled.div``;
export const TabPaneWrapper = styled.div`
  .ant-tabs-nav {
    min-width: 14rem;
  }
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
  .ant-tabs-content-holder {
    max-width: 43rem;
    padding: 20px 35px;
  }
`;
