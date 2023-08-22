import React from 'react';
import { Formik, Form } from 'formik';

import {
  Box,
  Flex,
  InputElement,
  SelectElement,
  SubmitElement,
  Text,
} from 'components';

type Props = {
  onSubmit: (data: any) => void;
  submitting: boolean;
  states: any;
};
export default ({ onSubmit, submitting, states }: Props): JSX.Element => {
  return (
    <Formik initialValues={{}} validateOnMount onSubmit={onSubmit}>
      {(formik) => {
        return (
          <Form>
            <Flex
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="space-between"
              height="65vh"
              overflow="auto"
              className="designed-scroll"
            >
              <Box padding="17px" width="85%">
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
                        name="First Name"
                        type="text"
                        placeholder="San"
                      />
                      <InputElement
                        formik={formik}
                        label="Last Name"
                        name="Last Name"
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
                        name="Email"
                        type="text"
                        placeholder="sanjose@gmail.com"
                      />
                      <InputElement
                        formik={formik}
                        label="Phone Number"
                        name="Phone Number"
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
                        name="Zip/Postal Code"
                        type="number"
                        placeholder="548477"
                      />
                      <SelectElement
                        formik={formik}
                        label="Gender"
                        name="Gender"
                        placeholder="Select Gender"
                        options={[
                          { title: 'Male', key: 1 },
                          { title: 'Female', key: 2 },
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
                        label="Country"
                        name="Country"
                        placeholder="Select Country"
                        options={[
                          { title: 'Canada', key: 1 },
                          { title: 'Italy', key: 2 },
                        ]}
                      />

                      <SelectElement
                        formik={formik}
                        label="State"
                        name="state"
                        placeholder="Select State"
                        options={states}
                      />
                    </Flex>
                    <InputElement
                      formik={formik}
                      label="Address"
                      name="Enter Address"
                      type="text"
                      placeholder="Enter Address"
                    />
                    <InputElement
                      formik={formik}
                      label="Date of Birth"
                      name="Date of Birth"
                      type="date"
                    />
                    <SelectElement
                      formik={formik}
                      label="Are you the parent or legal guardian of the patient?"
                      name="Are you the parent or legal guardian of the patient?"
                      placeholder="Please Choose"
                      options={[
                        { title: 'Yes', key: 1 },
                        { title: 'No', key: 2 },
                      ]}
                    />
                    <InputElement
                      formik={formik}
                      label="Comments or special requests (Optional)"
                      name="Comments or special requests (Optional)"
                      type="text"
                      placeholder="Enter here"
                    />

                    <SubmitElement
                      size="medium"
                      type="secondary"
                      shape="fill"
                      width="217px"
                      formik={formik}
                      label="Book Appointment"
                      marginTop="20px"
                      loading={submitting}
                    />
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
