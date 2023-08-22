import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { appSelector } from 'redux/selectors';
import { usePromise } from 'hooks';
import { onlineBookingAction } from 'redux/actions';
import { ProviderModel } from 'types';
import { Modal, DatePicker } from 'antd';
import { Title5, Flex, Box, Button, SpinnerView, TimePicker } from 'components';
import { TrashIcon, EditIcon } from 'helpers/icons';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Picker, SelectBlockDayWrapper } from '../online-booking.style';

type Props = {
  onCancel: () => void;
  provider: ProviderModel;
  openBlockHoursModal: boolean;
  loading: boolean;
};
const CustomizationBlockHoursModal = ({
  onCancel,
  openBlockHoursModal,
  provider,
  loading,
}: Props) => {
  const selectedLocation = useSelector(appSelector.selectLocationInfo);
  const promise = usePromise();
  const [deletting, setDeletting] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [editting, setEditting] = useState(false);

  const [blockHourData, setBlockHourData] = useState({
    start_time: '',
    end_time: '',
    date: '',
    provider: provider?.pk,
    location: selectedLocation?.pk,
  });
  const [blockHourId, setBlockHourId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const [showNewBlockHour, setShowNewBlockHour] = useState(false);

  const handleCreateBlockHour = () => {
    setSubmitting(true);
    blockHourData.provider = provider?.pk;
    promise(onlineBookingAction.createBlockHour(blockHourData))
      .then(() => {
        reset();
      })
      .finally(() => setSubmitting(false));
  };

  const handleUpdateBlockHour = () => {
    setEditting(true);
    blockHourData.provider = provider?.pk;
    promise(onlineBookingAction.updateBlockHour(blockHourId, blockHourData))
      .then(() => {
        reset();
      })
      .finally(() => setEditting(false));
  };
  const handleDeleteBlockHour = (id: number) => {
    setBlockHourId(id);
    setDeletting(true);
    promise(onlineBookingAction.deleteBlockHour(id))
      .then(() => {
        selectedLocation &&
          promise(
            onlineBookingAction.loadAllProviders({
              location_id: selectedLocation.pk,
            })
          );
        selectedLocation &&
          promise(
            onlineBookingAction.loadProvider({
              location_id: selectedLocation.pk,
              id: provider.pk,
            })
          );
      })
      .finally(() => setDeletting(false));
  };

  const handleCancel = () => {
    setBlockHourId(0);
    setShowNewBlockHour(false);
    setIsEdit(false);
    onCancel();
  };

  const reset = () => {
    setIsEdit(false);
    setBlockHourId(0);
    setShowNewBlockHour(false);
    setBlockHourData({
      ...blockHourData,
      start_time: '',
      end_time: '',
      date: '',
    });
    selectedLocation &&
      promise(
        onlineBookingAction.loadAllProviders({
          location_id: selectedLocation.pk,
        })
      );
    selectedLocation &&
      promise(
        onlineBookingAction.loadProvider({
          location_id: selectedLocation.pk,
          id: provider.pk,
        })
      );
  };

  const onChangeDate = (date: any, dateString: string) => {
    setBlockHourData({
      ...blockHourData,
      date: dateString,
    });
  };

  const onClickEdit = (id: number, item: any) => {
    setBlockHourId(id);
    setIsEdit(true);
    setBlockHourData({
      ...blockHourData,
      start_time: item.start_time,
      end_time: item.end_time,
      date: item.date,
    });
  };

  const handleClose = () => {
    setBlockHourId(0);
    setIsEdit(false);
  };

  return (
    <Modal
      visible={openBlockHoursModal}
      closable={true}
      footer={false}
      centered
      onCancel={handleCancel}
      destroyOnClose
      width="870px"
    >
      <Flex marginBottom="35px" justifyContent="start">
        <Title5 marginRight="5px">Block Hours For</Title5>
        {!loading && (
          <Title5 color="gray8">{`${provider?.first_name} ${provider?.last_name}`}</Title5>
        )}
      </Flex>

      {loading ? (
        <SpinnerView height="200px" />
      ) : (
        <div style={{ minHeight: '300px', marginBottom: '15px' }}>
          <Box
            width="100%"
            overflow="auto"
            height="50vh"
            className="designed-scroll"
          >
            {provider?.blockhours?.map((item: any) => {
              return (
                <Flex
                  justifyContent="flex-start"
                  marginTop="20px"
                  alignItems="center"
                  key={item.pk}
                >
                  <SelectBlockDayWrapper>
                    <div className="text">Date</div>
                    <DatePicker
                      onChange={onChangeDate}
                      defaultValue={moment(item.date)}
                      disabled={item.pk !== blockHourId}
                    />
                  </SelectBlockDayWrapper>
                  <Box>
                    <Picker>
                      <div className="text">Start Time</div>
                      <TimePicker
                        time={item.start_time}
                        disabled={item.pk !== blockHourId}
                        onChnage={(time: string) =>
                          setBlockHourData({
                            ...blockHourData,
                            start_time: time,
                          })
                        }
                      />
                    </Picker>
                  </Box>
                  <Box marginRight="36px">
                    <Picker>
                      <div className="text">End Time</div>
                      <TimePicker
                        time={item.end_time}
                        disabled={item.pk !== blockHourId}
                        onChnage={(time: string) =>
                          setBlockHourData({
                            ...blockHourData,
                            end_time: time,
                          })
                        }
                      />
                    </Picker>
                  </Box>
                  <Box>
                    {isEdit && blockHourId === item.pk ? (
                      <Flex marginTop="25px">
                        <Box color="green" marginRight="12px">
                          {editting ? (
                            <SpinnerView height="10px" />
                          ) : (
                            <CheckOutlined onClick={handleUpdateBlockHour} />
                          )}
                        </Box>
                        <Box color="red">
                          <CloseOutlined onClick={handleClose} />
                        </Box>
                      </Flex>
                    ) : (
                      <Flex marginTop="20px">
                        <div
                          className="has-cursor"
                          style={{ marginTop: '20px', marginRight: 5 }}
                          onClick={() => onClickEdit(item.pk, item)}
                        >
                          <EditIcon />
                        </div>
                        <div
                          className="has-cursor"
                          style={{ marginTop: '20px' }}
                          onClick={() => handleDeleteBlockHour(item.pk)}
                        >
                          {item.pk === blockHourId && deletting ? (
                            <SpinnerView height="20px" />
                          ) : (
                            <TrashIcon />
                          )}
                        </div>
                      </Flex>
                    )}
                  </Box>
                </Flex>
              );
            })}
          </Box>

          {showNewBlockHour && (
            <Flex
              justifyContent="flex-start"
              marginTop="20px"
              alignItems="center"
            >
              <SelectBlockDayWrapper>
                <div className="text">Date</div>
                <DatePicker onChange={onChangeDate} />
              </SelectBlockDayWrapper>
              <Box>
                <Picker>
                  <div className="text">Start Time</div>
                  <TimePicker
                    onChnage={(time: string) =>
                      setBlockHourData({
                        ...blockHourData,
                        start_time: time,
                      })
                    }
                  />
                </Picker>
              </Box>
              <Box marginRight="36px">
                <Picker>
                  <div className="text">End Time</div>
                  <TimePicker
                    onChnage={(time: string) =>
                      setBlockHourData({
                        ...blockHourData,
                        end_time: time,
                      })
                    }
                  />
                </Picker>
              </Box>
            </Flex>
          )}
        </div>
      )}

      <Flex justifyContent="space-between">
        <Button onClick={() => setShowNewBlockHour(true)} htmlType="submit">
          + Add Time
        </Button>
        <Button
          onClick={handleCreateBlockHour}
          htmlType="submit"
          loading={submitting}
          disabled={isEdit}
        >
          Save
        </Button>
      </Flex>
    </Modal>
  );
};

export default CustomizationBlockHoursModal;
