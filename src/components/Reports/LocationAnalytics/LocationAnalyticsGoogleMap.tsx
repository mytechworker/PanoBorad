import React, { useEffect, useState } from 'react';

import { Flex, Box, Text } from 'components';

import { MapWrapper } from '../reports.styles';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';

type Props = {
  mapData: any[];
  dataType: string;
};

const LocationAnalyticsGoogleMap = ({ mapData, dataType }: Props) => {
  const image1 = process.env.REACT_APP_BASE_URL + '/media/0-20.png';
  const image2 = process.env.REACT_APP_BASE_URL + '/media/20-40.png';
  const image3 = process.env.REACT_APP_BASE_URL + '/media/40-60.png';
  const image4 = process.env.REACT_APP_BASE_URL + '/media/60-80.png';
  const image5 = process.env.REACT_APP_BASE_URL + '/media/100-80.png';
  const locationInfo = useSelector(appSelector.selectLocationInfo);

  const handleShowMarker = (amount: number) => {
    return amount >= 0 && amount < 20
      ? image1
      : amount >= 20 && amount < 40
      ? image2
      : amount >= 40 && amount < 60
      ? image3
      : amount >= 60 && amount < 80
      ? image4
      : image5;
  };

  useEffect(() => renderMap(), [window?.google?.maps, mapData, dataType]);

  const renderMap = () => {
    if (mapData.length < 1) return;
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 14,
        center: {
          lat: locationInfo?.latitude ? locationInfo.latitude : 40.7128,
          lng: locationInfo?.longitude ? locationInfo.longitude : 74.006,
        },
      }
    );
    {
      mapData?.map(
        (mapItem: any) =>
          new google.maps.Marker({
            position: {
              lat: mapItem.neighborhood__latitude,
              lng: mapItem.neighborhood__longitude,
            },
            map,
            title: mapItem?.name,
            icon: handleShowMarker(
              dataType === 'amount' ? mapItem.amount : mapItem.number
            ),
          })
      );
    }
  };

  return (
    <Box>
      {mapData?.length > 0 ? (
        <MapWrapper id="map" />
      ) : (
        <Flex height="424px">
          <Text>No Data Founded</Text>
        </Flex>
      )}
    </Box>
  );
};
export default LocationAnalyticsGoogleMap;
