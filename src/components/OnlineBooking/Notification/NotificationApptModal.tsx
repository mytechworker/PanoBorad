import React, { useEffect, useState } from 'react';
import { Modal, Select } from 'antd';
import { AvailableProviderModel, AvailableOperatoryModel } from 'types';

import { Title5, Flex, Text, Button } from 'components';
import alert from 'assets/images/alert.svg';

import { SelectAppTypeWrapper } from '../online-booking.style';

type Props = {
  openApptModal?: any;
  onCancel?: () => void;
  providers: AvailableProviderModel[];
  operatories: AvailableOperatoryModel[];
  handleConfirm: (operatory_id: any, provider_id: any) => void;
  loading: boolean;
  warning: boolean;
  handleCheckInsurance: (operatory_id: any, provider_id: any) => void;
  onCancelWarning: () => void;
  operatoryId: any;
  providerId: any;
  setProvider: (item: any) => void;
  setOperatory: (item: any) => void;
};

const { Option } = Select;

const NotificationApptModal = ({
  openApptModal,
  onCancel,
  providers,
  operatories,
  handleConfirm,
  loading,
  warning,
  handleCheckInsurance,
  onCancelWarning,
  operatoryId,
  providerId,
  setProvider,
  setOperatory,
}: Props) => {
  const [openModal, setOpenModal] = useState(warning);

  useEffect(() => {
    setOpenModal(warning);
  }, [warning]);

  const handleClose = () => {
    setOpenModal(false);
    onCancelWarning();
  };

  return (
    <>
      <Modal
        visible={openApptModal}
        closable={true}
        footer={false}
        centered
        onCancel={onCancel}
        destroyOnClose
        width="552px"
      >
        <Title5 marginBottom="30px">Confirm The Appointment</Title5>
        <Flex
          flexDirection="column"
          justfiyContent="space-between"
          alignItems="flex-start"
          marginBottom="40px"
        >
          <Text fontSize="14px" weight="400" color="gray8" marginBottom="8px">
            Provider
          </Text>
          <SelectAppTypeWrapper>
            <Select
              placeholder="Select Provider"
              value={providerId}
              onChange={(option: number) => setProvider(option)}
            >
              {providers?.map(
                (provider: AvailableProviderModel, index: number) => {
                  return (
                    <Option value={provider.pk} key={index}>
                      {provider.full_name}
                    </Option>
                  );
                }
              )}
            </Select>
          </SelectAppTypeWrapper>
        </Flex>
        <Flex
          flexDirection="column"
          justfiyContent="space-between"
          alignItems="flex-start"
          marginBottom="29px"
        >
          <Text fontSize="14px" weight="400" color="gray8" marginBottom="8px">
            Operatory
          </Text>
          <SelectAppTypeWrapper>
            <Select
              placeholder="Select Operatory"
              value={operatoryId}
              onChange={(option: number) => setOperatory(option)}
            >
              {operatories?.map(
                (operatory: AvailableOperatoryModel, index: number) => {
                  return (
                    <Option value={operatory.pk} key={index}>
                      {operatory.name}
                    </Option>
                  );
                }
              )}
            </Select>
          </SelectAppTypeWrapper>
        </Flex>
        <Flex justifyContent="flex-end">
          <Button
            minWidth="105px"
            htmlType="submit"
            loading={loading}
            onClick={() => handleCheckInsurance(operatoryId, providerId)}
            disabled={providerId === undefined || operatoryId === undefined}
          >
            Confirm
          </Button>
        </Flex>
      </Modal>
      <Modal
        visible={openModal}
        closable={true}
        footer={false}
        centered
        onCancel={() => handleClose()}
        destroyOnClose
        width="370px"
      >
        <Flex
          flexDirection="column"
          justfiyContent="center"
          alignItems="center"
        >
          <img src={alert} />
          <Text
            weight="900"
            fontSize="16px"
            marginBottom="37px"
            marginTop="8px"
            color="yellow"
          >
            Alert
          </Text>
          <Text weight="600" fontSize="16px" marginBottom="23px">
            Insurance Does Not Match
          </Text>
          <Text weight="600" fontSize="14px" marginBottom="60px">
            Are you sure you want to continue?
          </Text>
          <Flex justifyContent="space-between" width="100%">
            <Button
              minWidth="105px"
              onClick={() => handleConfirm(operatoryId, providerId)}
              type="warning"
              loading={loading}
            >
              Yes
            </Button>
            <Button
              minWidth="105px"
              onClick={() => handleClose()}
              type="warning"
              shape="outline"
            >
              No
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default NotificationApptModal;
