import React from 'react';
import { Modal as AntModal } from 'antd';

import { Flex } from 'components';
import { CloseIcon } from 'helpers/icons';

import { ModalWrapper, ModalContents } from './shared.styles';

const Modal = ({ closeIcon, className, children, ...props }: any) => {
  return (
    <ModalWrapper className="modal-container">
      <AntModal
        centered
        footer={null}
        getContainer=".modal-container"
        className={!closeIcon ? 'without-close-icon ' + className : className}
        closeIcon={
          <Flex width="32px" height="32px">
            <CloseIcon />
          </Flex>
        }
        {...props}
      >
        <ModalContents>{children}</ModalContents>
      </AntModal>
    </ModalWrapper>
  );
};

export default Modal;
