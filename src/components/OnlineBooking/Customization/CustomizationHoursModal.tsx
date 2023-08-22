import React, { useEffect, useState } from 'react';

import { usePromise } from 'hooks';
import { useSelector } from 'react-redux';
import { onlineBookingAction } from 'redux/actions';
import { appSelector } from 'redux/selectors';
import { ProviderModel, WorkingHourModel } from 'types';
import { Modal } from 'antd';
import {
  Title5,
  Flex,
  Button,
  CustomizationWorkingHourItem,
  SpinnerView,
  Box,
  Text,
} from 'components';

type Props = {
  onCancel: () => void;
  provider: ProviderModel;
  openHoursModal: boolean;
  loading: boolean;
};
const CustomizationHoursModal = ({
  openHoursModal,
  onCancel,
  provider,
  loading,
}: Props) => {
  const promise = usePromise();
  const [id, setId] = useState(0);
  const selectedLocation = useSelector(appSelector.selectLocationInfo);
  const [showNewWorkingHour, setShowNewWorkingHour] = useState(false);
  const [disabaledSave, setDisabledSave] = useState(true);
  const [workingHourData, setWorkingHourData] = useState<WorkingHourModel>({
    number: '',
    unit: '',
    start_time: '01:00:00',
    end_time: '01:00:00',
    week_days: [],
    date: '',
    provider: provider?.pk,
    location: selectedLocation?.pk,
  });

  const [submitting, setSubmitting] = useState(false);
  const [editting, setEditting] = useState(false);
  const [deletting, setDeletting] = useState(false);
  const [workingHourId, setWorkingHourId] = useState(0);

  const handleCancel = () => {
    setShowNewWorkingHour(false);

    onCancel();
    setWorkingHourData({
      number: '',
      unit: '',
      start_time: '',
      end_time: '',
      week_days: [],
      date: '',
      provider: provider?.pk,
      location: selectedLocation?.pk,
    });
  };

  const handleCreateNewWorkingHour = () => {
    setSubmitting(true);
    if (workingHourData.week_days && workingHourData.week_days.length > 0) {
      delete workingHourData.date;
      delete workingHourData.unit;
      delete workingHourData.number;
    } else {
      delete workingHourData.week_days;
    }
    if (workingHourData.number === '') {
      delete workingHourData.unit;
      delete workingHourData.number;
    }
    workingHourData.provider = provider?.pk;
    promise(onlineBookingAction.createWorkingHour(workingHourData))
      .then(() => {
        setShowNewWorkingHour(false);
        setDisabledSave(true);
        setWorkingHourData({
          number: '',
          unit: '',
          start_time: '',
          end_time: '',
          week_days: [],
          date: '',
          provider: provider?.pk,
          location: selectedLocation?.pk,
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
      })
      .finally(() => setSubmitting(false));
  };

  const handleUpdateWorkingHour = (workinghour: any) => {
    setEditting(true);
    if (workinghour.week_days && workinghour.week_days.length > 0) {
      delete workinghour.date;
    } else {
      delete workinghour.week_days;
    }
    promise(onlineBookingAction.updateWorkingHour(workinghour, workinghour.pk))
      .then(() => {
        reset();
      })
      .finally(() => setEditting(false));
  };

  const handleDeleteWorkingHour = (id: number) => {
    setId(id);
    setDeletting(true);
    promise(onlineBookingAction.deleteWorkingHour(id))
      .then(() => {
        reset();
      })
      .finally(() => setDeletting(false));
  };

  const reset = () => {
    setWorkingHourId(0);

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
  return (
    <Modal
      visible={openHoursModal}
      closable={true}
      footer={false}
      centered
      onCancel={handleCancel}
      destroyOnClose
      width="840px"
    >
      <Flex marginBottom="35px" justifyContent="start">
        <Title5 marginRight="5px"> Add Time For</Title5>
        {!loading && (
          <Title5 color="gray8">{`${provider?.first_name} ${provider?.last_name}`}</Title5>
        )}
      </Flex>

      {loading ? (
        <SpinnerView height="200px" />
      ) : (
        <Box
          width="100%"
          overflow="auto"
          height="50vh"
          className="designed-scroll"
        >
          {provider?.workinghours.length > 0 ? (
            provider?.workinghours?.map((item: any) => (
              <div
                key={item.pk}
                style={{ height: 'auto', marginBottom: '57px' }}
              >
                <CustomizationWorkingHourItem
                  onDeleteTime={() => handleDeleteWorkingHour(item.pk)}
                  dataHoursId={item.pk}
                  workingHourItem={item}
                  loadingTimeDelete={id === item.pk && deletting}
                  workingHourId={workingHourId}
                  setWorkingHourId={() => setWorkingHourId(item.pk)}
                  handleEdit={handleUpdateWorkingHour}
                  editting={editting}
                  cancelWorkingHourId={() => setWorkingHourId(0)}
                />
              </div>
            ))
          ) : (
            <Flex height="50vh">
              <Text>Please Add Working Hours</Text>
            </Flex>
          )}
        </Box>
      )}
      {showNewWorkingHour && (
        <div style={{ height: 'auto', marginBottom: '20px' }}>
          <CustomizationWorkingHourItem
            workingHourItem={workingHourData}
            setWorkingHour={(workingHour: any) => {
              setDisabledSave(false);
              setWorkingHourData(workingHour);
            }}
            addMode
          />
        </div>
      )}

      <Flex justifyContent="space-between">
        <Button htmlType="submit" onClick={() => setShowNewWorkingHour(true)}>
          + Add Time
        </Button>
        <Button
          htmlType="submit"
          onClick={handleCreateNewWorkingHour}
          disabled={submitting || workingHourId > 0 || disabaledSave}
          loading={submitting}
        >
          Save
        </Button>
      </Flex>
    </Modal>
  );
};

export default CustomizationHoursModal;
