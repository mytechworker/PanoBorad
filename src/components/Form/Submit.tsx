import React from 'react';
import { Button } from 'components';

import StyleWrapper from './form.style';

export default (props: any): JSX.Element => {
  const {
    children,
    className = '',
    formik,
    htmlType = 'submit',
    id = 'submitBtn',
    label,
    loading = true,
    ...rest
  } = props;

  const { isSubmitting, isValid } = formik;

  return (
    <StyleWrapper className="submit-button">
      <Button
        className={className}
        htmlType={htmlType}
        id={id}
        data-test-id={id}
        loading={isSubmitting && loading}
        disabled={!isValid}
        custome_type="primary"
        custome_shape="fill"
        {...rest}
      >
        {children || label}
      </Button>
    </StyleWrapper>
  );
};
