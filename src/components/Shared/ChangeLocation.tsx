import React, { useEffect } from 'react';
import { Select } from 'antd';
import { useSelector } from 'react-redux';

import { Box } from 'components';
import { appSelector, locationSelector } from 'redux/selectors';
import { appAction } from 'redux/actions';
import { usePromise } from 'hooks';

import { ChangeLocationSelectWrapper } from './shared.styles';

const { Option } = Select;

const ChangeLocation = () => {
  const promise = usePromise();
  const locations = useSelector(locationSelector.selectAllLocations);
  const loading = useSelector(locationSelector.selectAllFetching);
  const selectedLocation = useSelector(appSelector.selectLocationInfo);

  const handleSelectLocation = (locationId: number) => {
    const location = locations?.data.find((item) => item.pk === locationId);
    if (!location?.pk) return;
    promise(appAction.handleSetLocation(location));
    setTimeout(() => window.location.reload(), 100);
  };

  useEffect(() => {
    if (
      (!selectedLocation?.pk ||
        !locations?.data.find(
          (location) => location.pk === Number(selectedLocation?.pk)
        )) &&
      locations
    )
      handleSelectLocation(locations.data[0].pk);
  }, [locations]);

  return (
    <Box>
      <ChangeLocationSelectWrapper>
        <Select
          placeholder="Location..."
          onChange={(value: number) => handleSelectLocation(value)}
          loading={loading}
          value={!loading ? selectedLocation?.pk : undefined}
        >
          {locations?.data.map((item) => (
            <Option key={item.pk} value={item.pk}>
              {item.title}
            </Option>
          ))}
        </Select>
      </ChangeLocationSelectWrapper>
    </Box>
  );
};

export default ChangeLocation;
