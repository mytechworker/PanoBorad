import React from 'react';
import { Formik, Form } from 'formik';

import { NumberInputElement, Button, SubmitElement, Flex } from 'components';

type Props = {
  loading: boolean;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  goal?: number;
};

export default ({ onSubmit, loading, onCancel, goal }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        goal: goal ?? 0,
      }}
      validateOnMount
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <NumberInputElement
              formik={formik}
              label="Goal"
              name="goal"
              type="number"
              min="0"
            />

            <Flex justifyContent="space-between">
              <Button type="secondary" onClick={onCancel}>
                Cancel
              </Button>
              <SubmitElement
                formik={formik}
                label="Set Goal"
                loading={loading}
              />
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
