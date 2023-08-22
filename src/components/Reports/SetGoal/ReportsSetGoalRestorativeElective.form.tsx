import React from 'react';
import { Formik, Form } from 'formik';

import { NumberInputElement, Button, SubmitElement, Flex } from 'components';

type Props = {
  loading: boolean;
  onSubmit: (data: any) => void;
  onCancel: () => void;
  formData: {
    goal?: number;
    diagnostic_goal?: number;
    acceptance_goal?: number;
  };
};

export default ({
  onSubmit,
  loading,
  onCancel,
  formData,
}: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        goal: formData.goal ?? 0,
        diagnostic_goal: formData.diagnostic_goal ?? 0,
        acceptance_goal: formData.acceptance_goal ?? 0,
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
            <NumberInputElement
              formik={formik}
              label="Diagnostic Goal"
              name="diagnostic_goal"
              type="number"
              min="0"
            />
            <NumberInputElement
              formik={formik}
              label="Acceptance Goal"
              name="acceptance_goal"
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
