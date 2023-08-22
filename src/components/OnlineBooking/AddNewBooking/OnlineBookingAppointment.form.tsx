import React from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';

import {
  Box,
  Text,
  SelectElement,
  SubmitElement,
  Flex,
  RadioElement,
  SpinnerView,
} from 'components';
import { FontWrapper } from '../online-booking.style';
import { onlineBookingSelector } from 'redux/selectors';
import { AddNewBookingModel } from 'types';

type Props = {
  onSubmit: (data: any) => void;
  bookingInfo: AddNewBookingModel;
};
export default ({ onSubmit, bookingInfo }: Props): JSX.Element => {
  const { data: appointmentTypes, fetching: appointmentTypesFetching } =
    useSelector(onlineBookingSelector.selectAppointmentTypes);
  const { data, fetching } = useSelector(
    onlineBookingSelector.selectInsurances
  );

  return (
    <Formik
      initialValues={{
        appointment_type: bookingInfo?.appointment_type,
        patient_insurance: undefined,
        insurance_type: 'no_insurance',
      }}
      validateOnMount
      onSubmit={({ appointment_type, patient_insurance, insurance_type }) =>
        onSubmit({
          appointment_type,
          patient_insurance:
            insurance_type === 'no_insurance' ? null : patient_insurance,
        })
      }
    >
      {(formik) => {
        return (
          <FontWrapper>
            <Form>
              <Flex
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-start"
                height="65vh"
                className="designed-scroll"
              >
                {appointmentTypesFetching ? (
                  <Flex width="100%" height="100%">
                    <SpinnerView height="100px" />
                  </Flex>
                ) : (
                  <Box width="100%" padding="20px">
                    <Box className="designed-scroll" overflowX="hidden">
                      <RadioElement
                        formik={formik}
                        name="appointment_type"
                        options={
                          appointmentTypes
                            ? appointmentTypes?.data?.map((type) => ({
                                key: type.pk,
                                title: type.title,
                              }))
                            : []
                        }
                      />
                    </Box>
                    <Box padding="30px 0 20px 0">
                      <Text
                        color="black2"
                        weight="bold"
                        fontSize="18px"
                        letterSpacing="0.02em"
                        lineHeight="168.8%"
                      >
                        Choose your insurance
                      </Text>
                    </Box>

                    <Box>
                      <RadioElement
                        formik={formik}
                        name="insurance_type"
                        options={[
                          { key: 'no_insurance', title: 'No Insurance' },
                          { key: 'choose', title: 'Choose carrier and plan' },
                        ]}
                      />
                    </Box>

                    {formik.values.insurance_type === 'choose' && (
                      <>
                        <Box margin="15px 0">
                          <SelectElement
                            formik={formik}
                            label="Type to search for insurance carrier"
                            name="patient_insurance"
                            type="text"
                            placeholder="The Standard (Dental)"
                            className="text-nt"
                            loading={fetching}
                            options={
                              data
                                ? data.map((insurancesItem) => ({
                                    title: insurancesItem.name,
                                    key: insurancesItem.pk,
                                  }))
                                : []
                            }
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                )}
                <Box minWidth="177px" margin="20px">
                  <SubmitElement
                    formik={formik}
                    label="Confirm"
                    width="100%"
                    disabled={
                      !formik.values.appointment_type ||
                      (formik.values.insurance_type === 'choose' &&
                        !formik.values.patient_insurance)
                    }
                  />
                </Box>
              </Flex>
            </Form>
          </FontWrapper>
        );
      }}
    </Formik>
  );
};
