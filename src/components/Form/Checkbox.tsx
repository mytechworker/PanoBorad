import React from 'react';
import { useField } from 'formik';
import { Checkbox } from 'antd';

import StyleWrapper from './form.style';

export default ({ label, ...props }: any): JSX.Element => {
  const [{ value, ...field }, meta] = useField(props);

  const { error, touched } = meta;
  const { name, disabled, noMargin } = props;

  return (
    <StyleWrapper
      className={`input checkbox-input ${touched && error ? 'hasError' : ''} ${
        disabled ? 'disabled' : ''
      } ${noMargin && 'no-margin'}`}
    >
      <Checkbox
        id={name}
        data-test-id={name}
        {...props}
        {...field}
        checked={value}
        disabled={disabled}
      >
        {label}
      </Checkbox>

      {touched && error && (
        <div className="text-danger">
          <span className="text-danger--text">{error}</span>
        </div>
      )}
    </StyleWrapper>
  );
};
