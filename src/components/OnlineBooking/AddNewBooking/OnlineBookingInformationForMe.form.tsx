import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';

import {
  Box,
  Flex,
  InputElement,
  SelectElement,
  SubmitElement,
  Text,
} from 'components';
import { AddNewBookingModel } from 'types';

type Props = {
  onSubmit: (data: any) => void;
  bookingInfo: AddNewBookingModel;
  submitting: boolean;
  states: any;
};
export default ({
  onSubmit,
  bookingInfo,
  submitting,
  states,
}: Props): JSX.Element => {
  const validationSchema = yup.object().shape({
    first_name: yup.string().required('No first name provided'),
    last_name: yup.string().required('No last name provided'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('No Email provided'),
    call_phone: yup.string().required('No call phone provided'),
    postal_code: yup.string().required('No postal code provided'),
    gender: yup.string().required('No gender provided'),
    state: yup.string().required('No state provided'),
    city: yup.string().required('No city provided'),
    address: yup.string().required('No address provided'),
    date_of_birth: yup.string().required('No date of birth provided'),
  });
  return (
    <Formik
      initialValues={{
        first_name: bookingInfo?.first_name ? bookingInfo?.first_name : '',
        last_name: bookingInfo?.last_name ? bookingInfo?.last_name : '',
        email: bookingInfo?.email ? bookingInfo?.email : '',
        call_phone: bookingInfo?.call_phone ? bookingInfo?.call_phone : '',
        gender: bookingInfo?.gender ? bookingInfo?.gender : '',
        date_of_birth: bookingInfo?.date_of_birth
          ? bookingInfo?.date_of_birth
          : '',
        city: bookingInfo?.city ? bookingInfo?.city : '',
        state: bookingInfo?.state ? bookingInfo?.state : '',
        address: bookingInfo?.address ? bookingInfo?.address : '',
        postal_code: bookingInfo?.postal_code ? bookingInfo?.postal_code : '',
      }}
      validationSchema={validationSchema}
      validateOnMount
      onSubmit={({
        first_name,
        last_name,
        email,
        call_phone,
        gender,
        date_of_birth,
        city,
        state,
        address,
        postal_code,
      }) =>
        onSubmit({
          first_name,
          last_name,
          email,
          call_phone,
          gender,
          date_of_birth,
          city,
          state,
          address,
          postal_code,
        })
      }
    >
      {(formik) => {
        return (
          <Form>
            <Box
              height="56vh"
              heightT="auto"
              overflow="auto"
              className="designed-scroll"
              paddingRight="10px"
              marginBottom="20px"
            >
              <Flex flexDirection="column" alignItems="flex-start">
                <Text
                  weight="bold"
                  fontSize="18px"
                  color="black2"
                  marginBottom="28px"
                >
                  Please enter your exact information
                </Text>
                <Box width="100%">
                  <Flex
                    flexDirection="row"
                    flexDirectionM="column"
                    justifyContent="space-between"
                    flexGap="15px"
                  >
                    <InputElement
                      formik={formik}
                      label="First Name"
                      name="first_name"
                      type="text"
                      placeholder="San"
                    />

                    <InputElement
                      formik={formik}
                      label="Last Name"
                      name="last_name"
                      type="text"
                      placeholder="Jose"
                    />
                  </Flex>
                  <Flex
                    flexDirection="row"
                    flexDirectionM="column"
                    justifyContent="space-between"
                    flexGap="15px"
                  >
                    <InputElement
                      formik={formik}
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="sanjose@gmail.com"
                    />

                    <InputElement
                      formik={formik}
                      label="Phone Number"
                      name="call_phone"
                      type="number"
                      placeholder="+68 1451 014 011"
                    />
                  </Flex>
                  <Flex
                    flexDirection="row"
                    flexDirectionM="column"
                    justifyContent="space-between"
                    flexGap="15px"
                  >
                    <InputElement
                      formik={formik}
                      label="Zip/Postal Code"
                      name="postal_code"
                      type="text"
                      placeholder="548477"
                    />

                    <SelectElement
                      formik={formik}
                      label="Gender"
                      name="gender"
                      placeholder="Select Gender"
                      options={[
                        { title: 'Male', key: 'M' },
                        { title: 'Female', key: 'F' },
                      ]}
                    />
                  </Flex>
                  <Flex
                    flexDirection="row"
                    flexDirectionM="column"
                    justifyContent="space-between"
                    flexGap="15px"
                  >
                    <SelectElement
                      formik={formik}
                      label="State"
                      name="state"
                      placeholder="Select State"
                      options={states}
                    />

                    {/* <InputElement
                      formik={formik}
                      label="State"
                      name="state"
                      placeholder="Select State"
                    /> */}
                  </Flex>
                  <InputElement
                    formik={formik}
                    label="City"
                    name="city"
                    placeholder="Select City"
                  />
                  <InputElement
                    formik={formik}
                    label="Address"
                    name="address"
                    type="text"
                    placeholder="Enter Address"
                  />

                  <InputElement
                    formik={formik}
                    label="Date of Birth"
                    name="date_of_birth"
                    type="date"
                  />
                  <InputElement
                    formik={formik}
                    label="Comments or special requests (Optional)"
                    name="comments_or_special_requests_(Optional)"
                    type="text"
                    placeholder="Enter here"
                  />
                </Box>
              </Flex>
            </Box>
            <SubmitElement
              size="medium"
              type="secondary"
              shape="fill"
              width="217px"
              formik={formik}
              label="Book Appointment"
              loading={submitting}
            />
          </Form>
        );
      }}
    </Formik>
  );
};
