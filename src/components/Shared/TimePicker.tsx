import React, { useState } from 'react';
import moment from 'moment';
import { Select } from 'antd';
import { Flex, Box } from 'components';
import { TimeWrapper } from './shared.styles';
import { timeLog } from 'console';
const { Option } = Select;
type Props = {
  time?: string;
  disabled?: boolean;
  onChnage?: any;
};
function range(size: number) {
  return Array.from(new Array(size), (val, index) =>
    index < 10 ? `0${index}` : index.toString()
  );
}

const TimePicker = ({ time, disabled, onChnage }: Props) => {
  const [customTime, setCustomeTime] = useState({
    hour: time !== '' && time ? moment(time, ['HH']).format('hh') : '01',
    minute: time !== '' && time ? time?.substring(3, 5) : '00',
    a: time !== '' && time ? moment(time, ['HH']).format('A') : 'am',
  });
  const onChangeHour = (e: any) => {
    // if (customTime.a === 'pm') {
    //   moment('01:00 PM', 'hh:mm A').format('HH:mm');
    // }
    setCustomeTime({ ...customTime, hour: e });
    onChnage(
      moment(`${e}:${customTime.minute} ${customTime.a}`, 'hh:mm A').format(
        'HH:mm:ss'
      )
    );
  };
  const onChangeMinute = (e: any) => {
    setCustomeTime({ ...customTime, minute: e });
    onChnage(
      moment(`${customTime.hour}:${e} ${customTime.a}`, 'hh:mm A').format(
        'HH:mm:ss'
      )
    );
  };
  const onChangeA = (e: any) => {
    setCustomeTime({ ...customTime, a: e });
    onChnage(
      moment(`${customTime.hour}:${customTime.minute} ${e}`, 'hh:mm A').format(
        'HH:mm:ss'
      )
    );
  };
  return (
    <Flex>
      <Box>
        <TimeWrapper>
          <Select
            defaultValue={customTime.hour}
            disabled={disabled}
            onChange={onChangeHour}
            placeholder="Select"
          >
            <Option value={'12'}>12</Option>
            <Option value={'01'}>01</Option>
            <Option value={'02'}>02</Option>
            <Option value={'03'}>03</Option>
            <Option value={'04'}>04</Option>
            <Option value={'05'}>05</Option>
            <Option value={'06'}>06</Option>
            <Option value={'07'}>07</Option>
            <Option value={'08'}>08</Option>
            <Option value={'09'}>09</Option>
            <Option value={'10'}>10</Option>
            <Option value={'11'}>11</Option>
          </Select>
        </TimeWrapper>
      </Box>
      <Box>
        <TimeWrapper>
          <Select
            defaultValue={customTime.minute}
            disabled={disabled}
            onChange={onChangeMinute}
            placeholder="Select"
          >
            {range(60).map((minute, index) => {
              return (
                <Option value={minute} key={index}>
                  {minute}
                </Option>
              );
            })}
          </Select>
        </TimeWrapper>
      </Box>
      <Box>
        <TimeWrapper className="no-icon">
          <Select
            defaultValue={customTime.a}
            disabled={disabled}
            onChange={onChangeA}
          >
            <Option value="am">AM</Option>
            <Option value="pm">PM</Option>
          </Select>
        </TimeWrapper>
      </Box>
    </Flex>
  );
};

export default TimePicker;
