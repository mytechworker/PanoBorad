import React from 'react';

import { Flex, InputElement, SubmitElement, Grid, Title5 } from 'components';

import { Form, Formik } from 'formik';
import { ProviderModel } from 'types';

type Props = {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  submitting: boolean;
  providerInfo: ProviderModel;
};
export default ({ onSubmit, submitting, providerInfo }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        first_name: providerInfo.first_name,
        last_name: providerInfo.last_name,
      }}
      validateOnMount
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Title5 marginBottom="22px">Provider Name</Title5>
            <Grid>
              <InputElement
                formik={formik}
                label="First Name"
                name="first_name"
                type="text"
                placeholder="First Name"
              />
              <InputElement
                formik={formik}
                label="Last Name"
                name="last_name"
                type="text"
                placeholder="Last Name"
              />

              <Flex justifyContent="flex-end">
                <SubmitElement
                  formik={formik}
                  loading={submitting}
                  label="Update"
                />
              </Flex>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};
