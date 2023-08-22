import React, { useState } from 'react';
import { Select, Input } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { Flex, Box, Text } from 'components';
import { EditIcon, TrashIcon } from 'helpers/icons';
import { AppointmentTypeModel } from 'types';

import { SelectDurationWrapper, InputWrapper } from '../online-booking.style';
import { onlineBookingSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';

const { Option } = Select;

type Props = {
  appointmentType: AppointmentTypeModel;
  onDeleteType: (id: number) => void;
  onUpdateType: (id: number, type: AppointmentTypeModel) => void;
};
const CustomizationAppointmentType = ({
  appointmentType,
  onDeleteType,
  onUpdateType,
}: Props) => {
  const { data, fetching } = useSelector(onlineBookingSelector.selectDurations);
  const [durationValue, setDurationValue] = useState(
    appointmentType.duration ?? 30
  );
  const [showEdit, setShowEdit] = useState(false);
  const [typetitle, setTypetitle] = useState(appointmentType.title);
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      borderBottom="1px solid"
      borderColor="gray2"
      padding="15px 0"
    >
      <Flex className="flex-1">
        {showEdit ? (
          <Flex background="#fff">
            <InputWrapper
              as={Input}
              placeholder={typetitle}
              size="large"
              onChange={(event: any) => setTypetitle(event.target.value)}
              name="title"
            />
            <Box color="green">
              <CheckOutlined
                onClick={() =>
                  appointmentType.pk &&
                  onUpdateType(appointmentType.pk, { title: typetitle })
                }
              />
            </Box>
            <Box color="red">
              <CloseOutlined
                onClick={() => {
                  setShowEdit(false);
                  setTypetitle(appointmentType.title);
                }}
              />
            </Box>
          </Flex>
        ) : (
          <Flex justifyContent="flex-start" width="100%">
            <Text fontSize="12px" weight="600" lineHeight="26px">
              {appointmentType?.title}
            </Text>
            <Box marginLeft="5px" onClick={() => setShowEdit(true)}>
              <EditIcon className="has-cursor" />
            </Box>
          </Flex>
        )}
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
            onChange={(duration) => {
              setDurationValue(duration);
              appointmentType.pk &&
                onUpdateType(appointmentType.pk, { duration });
            }}
          >
            {data &&
              data.map((durationItem) => (
                <Option value={durationItem} key={durationItem}>
                  {durationItem} <Text fontSize="11px">minutes</Text>
                </Option>
              ))}
          </Select>
        </SelectDurationWrapper>

        <Box
          className="has-cursor"
          marginLeft="10px"
          onClick={() => appointmentType.pk && onDeleteType(appointmentType.pk)}
        >
          <TrashIcon />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CustomizationAppointmentType;
