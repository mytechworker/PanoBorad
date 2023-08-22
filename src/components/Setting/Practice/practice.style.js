import styled from 'styled-components';

export const LogoFormWrapper = styled.div`
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-top: 37px;
  margin-bottom: 43px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  .upload-text {
    color: ${({ theme }) => theme.colors.gray1};
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.02em;
  }
`;

export const RemoveWrapper = styled.div`
  position: absolute;
  .close-icon {
    position: relative;
    bottom: 32px;
    right: 52px;
    cursor: pointer;
  }
`;

export const ClipboardWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 8px;
  font-size: 18px;
`;
