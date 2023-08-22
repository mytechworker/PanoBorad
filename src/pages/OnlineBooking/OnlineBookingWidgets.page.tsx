import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

import { OnlineBookingSections } from 'components';

export class OnlineBookingWidgetsPage extends PureComponent {
  render() {
    return (
      <>
        <Helmet title="PanoBoard | Widgets" />
        <OnlineBookingSections activeMenu="Widgets" />
      </>
    );
  }
}

export default OnlineBookingWidgetsPage;
