import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

import { NotifWrapper } from '../online-booking.style';
type Props = {
  value?: string;
  onChange?: (date: any, dateString: string) => void;
};
const NotificationDatePicker = ({ value, onChange }: Props) => {
  return (
    <NotifWrapper>
      <Space direction="vertical">
        <DatePicker onChange={onChange} placeholder="By appt starts" />
      </Space>
    </NotifWrapper>
  );
};
export default NotificationDatePicker;
