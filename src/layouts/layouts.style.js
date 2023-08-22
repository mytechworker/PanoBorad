import styled from 'styled-components';

export const TitleWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-size: 24px;
  font-family: 'Mulish';
`;

export const ImgStyle = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const DrawerContainer = styled.div`
  .ant-drawer-body {
    height: 100vh;
    overflow: auto;
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
