import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import { Modal, Input } from 'antd';
import { Button } from 'components';
import { PlusOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router'

export const TriggerModal = styled.div`
.ant-modal {
    margin: 0 auto;
    .ant-modal-header {
      border-bottom: 1px solid !important;
      background-color: pink;
    }
}
`;

const AddTriggerModal = (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    // const handleOk = () => {
    //     setIsModalVisible(false);
    //     props.history.push("/triggers-details")
    // };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <Button onClick={showModal}><PlusOutlined />  Add Trigger</Button>
            <TriggerModal>
                <Modal
                    title="New Basic Rule"
                    visible={isModalVisible}
                    onOk={props.handleOk}
                    onCancel={handleCancel}
                    okText="Save"
                    cancelText="Close"
                >
                    <h3>Trigger Name</h3>
                    <Input placeholder="New Trigger Name" />
                </Modal>
            </TriggerModal>
        </>
    )
}

export default AddTriggerModal
