import React, { useState } from 'react';
import { Select, Input, Spin } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { Flex, Text } from 'components';
import { EditIcon } from 'helpers/icons';
import { AppointmentTypeModel } from 'types';

import { SelectDurationWrapper, InputWrapper } from '../online-booking.style';
import { useSelector } from 'react-redux';
import { appSelector, onlineBookingSelector } from 'redux/selectors';
import { usePromise } from 'hooks';
import { onlineBookingAction } from 'redux/actions';

const { Option } = Select;

type Props = {
  onCreateType: (type: AppointmentTypeModel) => void;
  onCancel: () => void;
};

const CustomizationAppointmentNewType = ({ onCreateType, onCancel }: Props) => {
  const promise = usePromise();
  const { data, fetching } = useSelector(onlineBookingSelector.selectDurations);
  const [durationValue, setDurationValue] = useState(30);
  const [typetitle, setTypetitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const selectedLocation = useSelector(appSelector.selectLocationInfo);

  const handleCreateNewType = (type: AppointmentTypeModel) => {
    setSubmitting(true);
    promise(onlineBookingAction.createAppointmentTypes(type))
      .then(() => {
        selectedLocation &&
          promise(
            onlineBookingAction.loadAllAppointmentTypes({
              location_id: selectedLocation.pk,
            })
          );
        onCancel();
        setTypetitle('');
        setDurationValue(30);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Spin spinning={submitting}>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        borderBottom="1px solid"
        borderColor="gray2"
        padding="23px 0"
      >
        <Flex className="flex-1">
          <Flex background="#fff">
            <InputWrapper
              as={Input}
              value={typetitle}
              placeholder={'Type Title'}
              size="large"
              onChange={(event: any) => setTypetitle(event.target.value)}
              name="title"
            />
            <CheckOutlined
              onClick={() =>
                handleCreateNewType({
                  title: typetitle,
                  duration: durationValue,
                  location: selectedLocation?.pk,
                })
              }
            />
            <CloseOutlined onClick={onCancel} />
          </Flex>
        </Flex>
        <Flex
          width="100%"
          alignItems="center"
          justifyContent="flex-end"
          className="flex-1"
          marginLeft="10px"
        >
          <SelectDurationWrapper className="flex-1">
            <Select
              loading={fetching}
              value={durationValue}
              onChange={setDurationValue}
            >
              {data &&
                data.map((durationItem) => (
                  <Option value={durationItem} key={durationItem}>
                    {durationItem} <Text fontSize="11px">minutes</Text>
                  </Option>
                ))}
            </Select>
          </SelectDurationWrapper>
        </Flex>
      </Flex>
    </Spin>
  );
};

export default CustomizationAppointmentNewType;
