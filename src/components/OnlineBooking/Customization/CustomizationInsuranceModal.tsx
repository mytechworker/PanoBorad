import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import { useSelector } from 'react-redux';

import {
  Title5,
  Flex,
  Text,
  Box,
  Button,
  SpinnerView,
  CustomizationInsuranceForm,
} from 'components';
import { TrashIcon } from 'helpers/icons';
import {
  appSelector,
  onlineBookingSelector,
  profileSelector,
} from 'redux/selectors';
import { InsuranceModel } from 'types';

import { TextWrapper, SelectInsuranceTwilio } from '../online-booking.style';
import { usePromise } from 'hooks';
import { onlineBookingAction } from 'redux/actions';

type Props = {
  modalStatus: boolean;
  onRemoveInsurance: (pk: number) => void;
  onUpdateInsurance: (data: InsuranceModel) => void;
  onNewInsurance: (name: string) => void;
  providerView: boolean;
  onCancel: () => void;
  actionLoading: boolean;
};
const CustomizationInsuarnceModal = ({
  modalStatus,
  onCancel,
  providerView,
  onUpdateInsurance,
  onNewInsurance,
  onRemoveInsurance,
  actionLoading,
}: Props) => {
  const { Option } = Select;
  const promise = usePromise();
  const [editInsurance, setEditInsurance] = useState<number>();
  const [newInsurance, setNewInsurance] = useState(false);
  const [localActionLoading, setLocalActionLoading] = useState(false);

  const selectedLocation = useSelector(appSelector.selectLocationInfo);
  const { data: allInsurances, fetching: fetchingAllInsurances } = useSelector(
    onlineBookingSelector.selectAllInsurancesList
  );
  const { data: providerInfo, fetching: providerFetching } = useSelector(
    onlineBookingSelector.selectProvider
  );

  const handleUpdateProvider = (insurance: number) => {
    setLocalActionLoading(true);
    providerInfo &&
      selectedLocation &&
      promise(
        onlineBookingAction.assignProviderInsurance(providerInfo.pk, insurance)
      )
        .then(() =>
          promise(
            onlineBookingAction.loadProvider({
              id: providerInfo.pk,
              location_id: selectedLocation.pk,
            })
          )
        )
        .finally(() => setLocalActionLoading(false));
  };

  const handleRemoveProviderInsurance = (insurance: number) => {
    setLocalActionLoading(true);
    providerInfo &&
      selectedLocation &&
      promise(
        onlineBookingAction.removeProviderInsurance(providerInfo.pk, insurance)
      )
        .then(() =>
          promise(
            onlineBookingAction.loadProvider({
              id: providerInfo.pk,
              location_id: selectedLocation.pk,
            })
          )
        )
        .finally(() => setLocalActionLoading(false));
  };

  return (
    <Modal
      visible={modalStatus}
      closable={true}
      footer={false}
      centered
      onCancel={onCancel}
      destroyOnClose
      width="822px"
    >
      {providerView ? (
        <>
          <Title5 marginBottom="22px">
            {providerInfo?.first_name} {providerInfo?.last_name} Insurances
          </Title5>
          {providerFetching || localActionLoading ? (
            <SpinnerView height="50vh" />
          ) : (
            <>
              <Box
                className="designed-scroll"
                overflowX="hidden"
                height="50vh"
                marginBottom="20px"
                paddingRight="20px"
              >
                {providerInfo?.insurances?.map((item) => (
                  <Box key={item?.pk}>
                    <Text
                      marginLeft="41px"
                      fontSize="10px"
                      weight="600"
                      lineHeight="20px"
                      color="gray2"
                    >
                      Insurance Name
                    </Text>
                    <Flex
                      flexDirection="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Flex flexDirection="row" width="100%">
                        <TextWrapper>{item.name}</TextWrapper>
                        <Box
                          onClick={() => handleRemoveProviderInsurance(item.pk)}
                          className="has-cursor"
                        >
                          <TrashIcon />
                        </Box>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </Box>
              <Box marginBottom="40px">
                <SelectInsuranceTwilio
                  as={Flex}
                  justifyContent="space-between"
                  flexGap="10px"
                >
                  <Select
                    className="flex-1"
                    placeholder="Select"
                    // mode="multiple"
                    onChange={handleUpdateProvider}
                  >
                    {allInsurances
                      ?.filter(
                        (insuranceItem) =>
                          !providerInfo?.insurances.find(
                            (insurance) => insurance.pk === insuranceItem.pk
                          )
                      )
                      .map((insurance) => (
                        <Option key={insurance.pk} value={insurance.pk}>
                          {insurance.name}
                        </Option>
                      ))}
                  </Select>
                </SelectInsuranceTwilio>
              </Box>
              <Flex justifyContent="flex-end">
                <Button onClick={onCancel}>Save</Button>
              </Flex>
            </>
          )}
        </>
      ) : (
        <>
          <Title5 marginBottom="22px">Insurances</Title5>

          <Box
            className="designed-scroll"
            overflowX="hidden"
            height="50vh"
            marginBottom="40px"
            paddingRight="20px"
          >
            {fetchingAllInsurances || actionLoading ? (
              <SpinnerView height="50vh" />
            ) : (
              allInsurances?.map((item) => (
                <Box key={item?.pk} marginBottom="15px">
                  <Text
                    marginLeft="41px"
                    fontSize="10px"
                    weight="600"
                    lineHeight="20px"
                    color="gray2"
                  >
                    Insurance Name
                  </Text>
                  <Flex justifyContent="flex-start" alignItems="center">
                    {item.pk === editInsurance ? (
                      <CustomizationInsuranceForm
                        onUpdate={(data: InsuranceModel) => {
                          onUpdateInsurance(data);
                          setEditInsurance(-1);
                        }}
                        insuranceItem={item}
                        onCancel={() => setEditInsurance(-1)}
                        onCreate={() => {}}
                      />
                    ) : (
                      <TextWrapper
                        className={item.source === 0 ? '' : 'has-cursor'}
                        onClick={() =>
                          item.source === 0 ? null : setEditInsurance(item.pk)
                        }
                      >
                        {item.name}
                      </TextWrapper>
                    )}
                    {item.source === 0 ? null : (
                      <Flex marginTop="8px">
                        <Box
                          onClick={() => onRemoveInsurance(item.pk)}
                          className="has-cursor"
                        >
                          <TrashIcon />
                        </Box>
                      </Flex>
                    )}
                  </Flex>
                </Box>
              ))
            )}
          </Box>
          {newInsurance && (
            <Flex marginBottom="40px" justifyContent="flex-start">
              <CustomizationInsuranceForm
                onUpdate={() => {}}
                onCancel={() => setNewInsurance(false)}
                onCreate={(name: string) => {
                  onNewInsurance(name);
                  setNewInsurance(false);
                }}
              />
            </Flex>
          )}

          <Flex justifyContent="space-between">
            <Button onClick={() => setNewInsurance(true)}>
              + Add Insurance
            </Button>
            <Button onClick={onCancel}>Save</Button>
          </Flex>
        </>
      )}
    </Modal>
  );
};

export default CustomizationInsuarnceModal;
