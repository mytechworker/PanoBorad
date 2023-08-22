import React from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useField } from 'formik';

import { Box } from 'components';
import { TextEditorWrapper } from './form.style';

export default ({ formik, label, ...props }: any): JSX.Element => {
  const [field, meta] = useField(props);
  const { setFieldValue } = formik;

  const { error, touched, value } = meta;
  const { name, placeholder } = props;
  return (
    <TextEditorWrapper>
      <Box>
        <ReactQuill
          value={value}
          placeholder={placeholder}
          onChange={(change) => setFieldValue(name, change)}
        />
      </Box>
    </TextEditorWrapper>
  );
};
