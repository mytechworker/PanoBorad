import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Formik, Form } from 'formik';
import {
  Flex,
  InputTextAreaElement,
} from 'components';
import { SubmitElement } from 'components/Form';

type Props = {
  onSubmit: (data: any) => void;
  submitting: boolean;
};
export default ({ onSubmit, submitting }: Props): JSX.Element => {
  return (
    <Formik
      initialValues={{
        comment: '',
      }}
      validateOnMount
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <InputTextAreaElement
              formik={formik}
              label="Comment or New Note"
              name="comment"
              placeholder="Comment"
              rows={10}
            />
            <Flex justifyContent="flex-end">
              <SubmitElement
                formik={formik}
                loading={submitting}
                label="َAdd"
              />
            </Flex>
          </Form>
        );
      }}
    </Formik>
  );
};
