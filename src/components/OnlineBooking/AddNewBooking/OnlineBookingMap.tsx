import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { onlineBookingSelector } from 'redux/selectors';
import { MapWrapper } from '../online-booking.style';

let map: google.maps.Map;

const OnlineBookingMap = () => {
  const { data, fetching } = useSelector(onlineBookingSelector.selectLocation);
  const image1 = process.env.REACT_APP_BASE_URL + '/media/0-20.png';

  const googleChecker = () => {
    if (!window?.google?.maps) {
      setTimeout(googleChecker, 100);
    } else {
      renderMap();
    }
  };
  function renderMap(): void {
    const myLatLng = {
      lat: data ? data?.latitude : 0,
      lng: data ? data?.longitude : 0,
    };
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        zoom: 16,
        center: myLatLng,
      }
    );

    new google.maps.Marker({
      position: myLatLng,
      map,
      title: data?.title,
      icon: image1,
    });
  }
  useEffect(() => {
    googleChecker();
  }, [fetching]);
  return <MapWrapper id="map" />;
};
export default OnlineBookingMap;
