import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import { Box, Flex, SubmitElement, SelectElement, Title5 } from 'components';
import { DentrixLocation, LocationModel } from 'types';

const validationSchema = yup.object().shape({
  location: yup.string().required('No location provided'),
  dentrix_location: yup.string().required('No dentrix location provided'),
});

type Props = {
  onSubmit: (body: any) => void;
  fielderrors?: any;
  submitting: boolean;
  dentrixLocations: DentrixLocation[];
  allLocations: LocationModel[];
};

export default ({
  onSubmit,
  fielderrors,
  submitting,
  dentrixLocations,
  allLocations,
}: Props): JSX.Element => {
  const locationsList = allLocations
    ? allLocations.map((item) => ({
        title: item.title,
        key: item.pk,
      }))
    : [];

  const dentrixList = dentrixLocations
    ? dentrixLocations.map((item) => ({
        title: `${item.state}/${item.city}`,
        key: item.id,
      }))
    : [];

  return (
    <Formik
      initialValues={{}}
      validateOnMount
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <Box width="100%">
              <Flex
                flexDirection="row"
                justifyContent="flex-start"
                marginLeft="0px"
                marginBottom="32px"
              >
                <Box>
                  <Title5>Dentrixascend Connection</Title5>
                </Box>
              </Flex>
              <Flex
                flexDirection="row"
                justifyContent="space-between"
                flexGap="15px"
              >
                <Box className="flex-1">
                  <SelectElement
                    formik={formik}
                    label="Location"
                    name="location"
                    placeholder="Select your location"
                    options={locationsList}
                  />
                </Box>
                <Box className="flex-1">
                  <SelectElement
                    formik={formik}
                    label="Dentrix Location"
                    name="dentrix_location"
                    placeholder="Select your location"
                    options={dentrixList}
                  />
                </Box>
              </Flex>

              <Flex justifyContent="flex-end" marginTop="10px">
                <SubmitElement
                  size="medium"
                  type="secondary"
                  shape="fill"
                  formik={formik}
                  loading={submitting}
                  label="Add Location"
                />
              </Flex>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
