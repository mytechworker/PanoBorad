import React, { useState, useEffect } from 'react';

import {
  Flex,
  Box,
  Text,
  CustomizationAppointmentType,
  CustomizationAppointmentNewType,
} from 'components';
import { PlusFiledIcon } from 'helpers/icons';

import { useSelector } from 'react-redux';
import { onlineBookingSelector } from 'redux/selectors';
import { AppointmentTypeModel } from 'types';
import { SpinnerView } from 'components/Shared';

type Props = {
  onCreate: (data: AppointmentTypeModel) => void;
  onEdit: (id: number, data: AppointmentTypeModel) => void;
  onDelete: (id: number) => void;
};

const CustomizationAppointment = ({ onDelete, onCreate, onEdit }: Props) => {
  const [showNewType, setShowNewType] = useState(false);

  const { data: typesList, fetching } = useSelector(
    onlineBookingSelector.selectAppointmentTypes
  );

  return (
    <Box
      background="#fff"
      borderRadius="15px"
      padding="22px 24px"
      height="697px"
      maxWidth="405px"
      width="100%"
      overflow="auto"
      className="designed-scroll"
    >
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        marginBottom="47px"
      >
        <Text color="#000" weight="600" fontSize="16px" letterSpacing="0.02em">
          Appointment Types
        </Text>
        <Box
          className="has-cursor"
          onClick={() => setShowNewType(!showNewType)}
        >
          <PlusFiledIcon />
        </Box>
      </Flex>

      {fetching ? (
        <SpinnerView height="300px" />
      ) : (
        typesList?.data.map((item) => (
          <CustomizationAppointmentType
            key={item.pk}
            appointmentType={item}
            onDeleteType={onDelete}
            onUpdateType={onEdit}
          />
        ))
      )}
      {showNewType && (
        <CustomizationAppointmentNewType
          onCancel={() => setShowNewType(false)}
          onCreateType={onCreate}
        />
      )}
    </Box>
  );
};

export default CustomizationAppointment;
