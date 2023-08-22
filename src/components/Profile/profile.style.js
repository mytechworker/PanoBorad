import styled from 'styled-components';

export const AvatarFormWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.colors.lavender} !important;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const RemoveWrapper = styled.div`
  position: absolute;
  .close-icon {
    position: relative;
    bottom: 35px;
    right: 42px;
    cursor: pointer;
  }
`;
