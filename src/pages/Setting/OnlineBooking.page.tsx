import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { SettingSections } from 'components';

export class OnlineBookingPage extends PureComponent {
  render() {
    return (
      <>
        <Helmet title="PanoBoard | Online Booking" />
        <SettingSections activeMenu="Online Booking" />
      </>
    );
  }
}

export default OnlineBookingPage;
