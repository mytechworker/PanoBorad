import React, { useEffect, useState } from 'react';
import { Switch, Select, DatePicker } from 'antd';
import moment from 'moment';

import { EditIcon, TrashIcon } from 'helpers/icons';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { TimePicker, Flex, Text, Box, SpinnerView } from 'components';

import {
  Picker,
  SelectDayWrapper,
  SwitchHoursWrapper,
  SelectRepeatWrapper,
} from '../online-booking.style';

const CustomizationTimePicker = ({
  onDeleteTime,
  dataHoursId,
  loadingTimeDelete,
  addMode,
  workingHourItem,
  editting,
  workingHourId,
  setWorkingHourId,
  handleEdit,
  setWorkingHour,
  cancelWorkingHourId,
}: any) => {
  const { Option } = Select;
  const [isEdit, setIsEdit] = useState(false);
  const [specific, setSpecific] = useState(
    workingHourItem.date && !(workingHourItem.unit && workingHourItem.number)
  );
  const [repeat, setRepeat] = useState(
    workingHourItem.unit && workingHourItem.number
  );
  const [disabled, setDisabled] = useState(!addMode);
  const [workingHourData, setworkingHourData] = useState(workingHourItem);

  useEffect(() => {
    setworkingHourData(workingHourItem);
  }, [workingHourItem.number]);

  const onClickEditIcon = () => {
    setIsEdit(true);
    setWorkingHourId();
    setDisabled(false);
  };

  const onClickCancel = () => {
    setDisabled(true);
    setIsEdit(false);
    cancelWorkingHourId();
  };
  const onChangeNumber = (e: number) => {
    setworkingHourData({ ...workingHourData, number: Number(e) });
    if (addMode) {
      setWorkingHour({ ...workingHourData, number: Number(e) });
    }
  };
  const onChangeUnit = (e: number) => {
    setworkingHourData({ ...workingHourData, unit: e });
    if (addMode) {
      setWorkingHour({ ...workingHourData, unit: e });
    }
  };
  const onChangeDate = (date: any, dateString: string) => {
    setworkingHourData({ ...workingHourData, date: dateString });
    if (addMode) {
      setWorkingHour({ ...workingHourData, date: dateString });
    }
  };

  const onChangeStartTime = (time: string) => {
    setworkingHourData({ ...workingHourData, start_time: time });
    if (addMode) {
      setWorkingHour({ ...workingHourData, start_time: time });
    }
  };

  const onChangeEndTime = (time: string) => {
    setworkingHourData({ ...workingHourData, end_time: time });
    if (addMode) {
      setWorkingHour({ ...workingHourData, end_time: time });
    }
  };

  const onChangeWeekDays = (value: any) => {
    setworkingHourData({ ...workingHourData, week_days: value });
    if (addMode) {
      setWorkingHour({ ...workingHourData, week_days: value });
    }
  };

  const onChangeRepeat = (checked: boolean) => {
    setRepeat(checked);
    setSpecific(false);
    if (addMode && !checked) {
      setWorkingHour({ ...workingHourData, unit: '', number: '' });
    }
  };
  const onChangeSpecific = (checked: boolean) => {
    setSpecific(checked);
  };
  return (
    <Box borderBottom="1px solid #DADADA" paddingBottom="10px">
      <Flex marginTop="8px" flexDirection="column" alignItems="flex-start">
        <SwitchHoursWrapper>
          <Switch
            disabled={disabled}
            checked={repeat && !specific}
            onChange={onChangeRepeat}
          />
          {repeat && !specific ? (
            <div className={'switch-content-blue'}>Repeat Every</div>
          ) : (
            <div className={'switch-content'}>Custom Repeat</div>
          )}
        </SwitchHoursWrapper>
        {repeat && !specific ? (
          <Flex>
            <SelectRepeatWrapper>
              <Select
                placeholder="Select Number"
                value={
                  workingHourData.number !== ''
                    ? workingHourData.number
                    : undefined
                }
                onChange={onChangeNumber}
                disabled={disabled}
              >
                <Option value={1}>01</Option>
                <Option value={2}>02</Option>
                <Option value={3}>03</Option>
                <Option value={4}>04</Option>
                <Option value={5}>05</Option>
                <Option value={6}>06</Option>
                <Option value={7}>07</Option>
              </Select>
              <Select
                placeholder="Select Unit"
                value={
                  workingHourData.unit !== '' ? workingHourData.unit : undefined
                }
                onChange={onChangeUnit}
                disabled={disabled}
              >
                <Option value={30}>Month</Option>
                <Option value={7}>Week</Option>
                <Option value={1}>Day</Option>
              </Select>
            </SelectRepeatWrapper>
          </Flex>
        ) : (
          ''
        )}

        <SwitchHoursWrapper>
          <Switch
            checked={specific}
            disabled={disabled}
            onChange={onChangeSpecific}
          />
          <div className={specific ? 'switch-content-blue' : 'switch-content'}>
            On a specific date
          </div>
        </SwitchHoursWrapper>
      </Flex>
      <Flex justifyContent="flex-start" marginTop="20px">
        <SelectDayWrapper>
          {specific || repeat ? (
            <DatePicker
              defaultValue={
                workingHourData.date ? moment(workingHourData.date) : moment()
              }
              onChange={onChangeDate}
              disabled={disabled}
            />
          ) : (
            <Select
              placeholder="Select Day"
              onChange={onChangeWeekDays}
              mode="multiple"
              value={workingHourData.week_days ? workingHourData.week_days : []}
              disabled={disabled}
            >
              <Option value={0}>Monday</Option>
              <Option value={1}>Tuesday</Option>
              <Option value={2}>Wednesday</Option>
              <Option value={3}>Thursday</Option>
              <Option value={4}>Friday</Option>
              <Option value={5}>Saturday</Option>
              <Option value={6}>ُSunday</Option>
            </Select>
          )}
        </SelectDayWrapper>
        <Text fontSize="14px" style={{ margin: '0 18px', color: '#9c9c9c' }}>
          From
        </Text>
        <Box>
          <Picker>
            <TimePicker
              time={workingHourData.start_time}
              onChnage={onChangeStartTime}
              disabled={disabled}
            />
          </Picker>
        </Box>
        <Text fontSize="14px" style={{ margin: '0 18px', color: '#9c9c9c' }}>
          To
        </Text>
        <Box marginRight="36px">
          <Picker>
            <TimePicker
              time={workingHourData.end_time}
              onChnage={onChangeEndTime}
              disabled={disabled}
            />
          </Picker>
        </Box>
        {!addMode && (
          <Box>
            {isEdit && workingHourId === workingHourData.pk ? (
              <Flex marginTop="5px">
                <Box color="green" marginRight="12px">
                  {editting ? (
                    <SpinnerView height="10px" />
                  ) : (
                    <CheckOutlined
                      onClick={() => handleEdit(workingHourData)}
                    />
                  )}
                </Box>
                <Box color="red">
                  <CloseOutlined onClick={onClickCancel} />
                </Box>
              </Flex>
            ) : (
              <Flex marginTop="15px">
                <div
                  className="has-cursor"
                  style={{ marginRight: 5 }}
                  onClick={onClickEditIcon}
                >
                  <EditIcon />
                </div>
                <div
                  className="has-cursor"
                  onClick={() => onDeleteTime(dataHoursId)}
                >
                  {loadingTimeDelete ? (
                    <SpinnerView height="20px" />
                  ) : (
                    <TrashIcon />
                  )}
                </div>
              </Flex>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};
export default CustomizationTimePicker;
