import React, { useState } from 'react';
import { Select, Modal } from 'antd';
import { useSelector } from 'react-redux';

import {
  Flex,
  Text,
  CustomizationProviderNameForm as NameForm,
} from 'components';
import { ProviderModel } from 'types';
import {
  appSelector,
  mainSelector,
  onlineBookingSelector,
} from 'redux/selectors';

import Avatar from 'assets/images/avatar.png';

import {
  ImgStyle,
  SelectTypeWrapper,
  EditWrapper,
} from '../online-booking.style';
import { usePromise } from 'hooks';
import { onlineBookingAction } from 'redux/actions';

const { Option } = Select;

type Props = {
  providerInfo: ProviderModel;
};
const CustomizationProviderInfo = ({ providerInfo }: Props) => {
  const promise = usePromise();
  const [editProfile, setEditProfile] = useState(false);
  const [actionLodaing, setActionLodaing] = useState(false);
  const { data: specialties, fetching: specialtiesFetching } = useSelector(
    onlineBookingSelector.selectProviderSpecialists
  );
  const location = useSelector(appSelector.selectLocationInfo);

  const handleUpdateProvider = (data: any, isName = false) => {
    setActionLodaing(true);
    location &&
      promise(
        onlineBookingAction.updateProvider(
          providerInfo.pk,
          { location_id: location.pk },
          data
        )
      )
        .then(() =>
          promise(
            onlineBookingAction.loadAllProviders({
              location_id: location.pk,
              page: 1,
              page_size: 10,
            })
          )
        )
        .finally(() => {
          setActionLodaing(false);
          isName && setEditProfile(false);
        });
  };

  return (
    <>
      <Flex flexDirection="column" alignItems="flex-start" marginLeft="5px">
        <Flex justifyContent="flex-start" marginBottom="10px">
          <ImgStyle src={Avatar} alt="" />
          <Text
            weight="700"
            fontSize="12px"
            lineHeight="18px"
            maxWidth="75px"
            color="black2"
            marginLeft="8px"
          >
            {`${providerInfo?.first_name} ${providerInfo?.last_name}`}
          </Text>
          <EditWrapper onClick={() => setEditProfile(true)}>Edit</EditWrapper>
        </Flex>
        <Text
          marginBottom="10px"
          weight="600"
          fontSize="10px"
          lineHeight="12.55px"
          color="black2"
        >
          ID: #{providerInfo.dentrix_id}
        </Text>
        <SelectTypeWrapper>
          <Select
            value={providerInfo?.specialty}
            onChange={(specialty: string) =>
              handleUpdateProvider({ specialty })
            }
            loading={specialtiesFetching}
          >
            {specialties?.map((item) => (
              <Option value={item.pk} key={item.pk}>
                {item.title}
              </Option>
            ))}
          </Select>
        </SelectTypeWrapper>
      </Flex>
      <Modal
        visible={editProfile}
        closable={true}
        footer={false}
        centered
        onCancel={() => setEditProfile(false)}
        destroyOnClose
      >
        <NameForm
          providerInfo={providerInfo}
          onSubmit={(data) => handleUpdateProvider(data, true)}
          onCancel={() => setEditProfile(false)}
          submitting={actionLodaing}
        />
      </Modal>
    </>
  );
};

export default CustomizationProviderInfo;
