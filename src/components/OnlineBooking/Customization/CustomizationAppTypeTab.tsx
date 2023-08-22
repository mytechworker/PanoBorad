import React, { useState, useEffect } from 'react';
import { usePromise } from 'hooks';
import { onlineBookingAction } from 'redux/actions';
import { appSelector } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { onlineBookingSelector } from 'redux/selectors';

import { ProviderModel } from 'types';

import { Tag, Dropdown, Menu } from 'antd';
import { Flex, Text, SpinnerView } from 'components';

import { ActionItem } from '../online-booking.style';

type Props = {
  providerItem: ProviderModel;
};
const CustomizationAppTypeTab = ({ providerItem }: Props) => {
  const promise = usePromise();
  const selectedLocation = useSelector(appSelector.selectLocationInfo);
  const { data: typesList } = useSelector(
    onlineBookingSelector.selectAppointmentTypes
  );
  const [deletting, setDeletting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [id, setId] = useState(0);
  const handleRemove = (id: number) => {
    setDeletting(true);
    setId(id);
    promise(
      onlineBookingAction.removeProviderAppointmentType(providerItem.pk, id)
    )
      .then(() => {
        reset();
      })
      .finally(() => setDeletting(false));
  };
  const handleAssign = (id: number) => {
    setSubmitting(true);
    promise(
      onlineBookingAction.assignProviderAppointmentType(
        providerItem.pk,
        id,
        selectedLocation?.pk
      )
    )
      .then(() => {
        reset();
      })
      .finally(() => setSubmitting(false));
  };
  const reset = () => {
    selectedLocation &&
      promise(
        onlineBookingAction.loadAllProviders({
          location_id: selectedLocation.pk,
        })
      );
    selectedLocation &&
      promise(
        onlineBookingAction.loadProvider({
          location_id: selectedLocation.pk,
          id: providerItem.pk,
        })
      );
  };

  const menu = (
    <Menu>
      {typesList?.data?.map((item: any) => (
        <Menu.Item key={item.pk} onClick={() => handleAssign(item.pk)}>
          {item.title}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Flex flexDirection="column" alignItems="flex-start" marginBottom="35px">
      {providerItem?.appointment_types.map((tag: any) => {
        return (
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexGap="9px"
            key={tag.pk}
          >
            <Tag color={tag.color} key={tag.pk}>
              {tag.title}
            </Tag>
            {deletting && tag.pk === id ? (
              <SpinnerView height="20px" />
            ) : (
              <Text
                color="gray8"
                fontSize="20px"
                marginBottom="10px"
                className="has-cursor"
                onClick={() => handleRemove(tag.pk)}
              >
                x
              </Text>
            )}
          </Flex>
        );
      })}
      <ActionItem>
        <Dropdown
          overlay={menu}
          trigger={['click']}
          onVisibleChange={(e) => console.log(e)}
          placement="bottomLeft"
        >
          <div className="text">Manage Types</div>
        </Dropdown>
      </ActionItem>
    </Flex>
  );
};

export default CustomizationAppTypeTab;
