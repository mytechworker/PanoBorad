import React from 'react';
import { Select } from 'antd';

import { Flex } from 'components';
import { ProviderModel } from 'types';

import pinIcon from 'assets/images/Ellipse-67.png';
import pinRedIcon from 'assets/images/Ellipse68.png';

import {
  SelectCustomizeWrapper,
  InuranceTextWrapper,
} from '../online-booking.style';
import { usePromise } from 'hooks';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';
import { onlineBookingAction } from 'redux/actions';

const { Option } = Select;

type Props = {
  onCustomizeInsurance: () => void;
  providerInfo: ProviderModel;
};
const CustomizationStatusTab = ({
  onCustomizeInsurance,
  providerInfo,
}: Props) => {
  const promise = usePromise();
  const location = useSelector(appSelector.selectLocationInfo);
  const onChangeStatus = (status: boolean) => {
    location &&
      promise(
        onlineBookingAction.updateProvider(
          providerInfo.pk,
          { location_id: location.pk },
          { active: status }
        )
      ).then(() =>
        promise(
          onlineBookingAction.loadAllProviders({
            location_id: location.pk,
            page: 1,
            page_size: 10,
          })
        )
      );
  };

  return (
    <Flex flexDirection="column" alignItems="flex-start" marginBottom="76px">
      <SelectCustomizeWrapper color={providerInfo.active ? 'green2' : 'red'}>
        <Select
          value={providerInfo.active ? 'active' : 'inactive'}
          onChange={(change: string) => onChangeStatus(change === 'active')}
        >
          <Option value="active">
            <img src={pinIcon} alt="active" /> Active
          </Option>
          <Option value="inactive">
            <img src={pinRedIcon} alt="deactive" /> Inactive
          </Option>
        </Select>
      </SelectCustomizeWrapper>
      <InuranceTextWrapper onClick={() => onCustomizeInsurance()}>
        Customize Insurance
      </InuranceTextWrapper>
    </Flex>
  );
};

export default CustomizationStatusTab;
