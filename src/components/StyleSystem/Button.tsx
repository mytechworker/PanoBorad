import React from 'react';
import Wrapper from './Button.style';
import { Button as AntButtom } from 'antd';

export const Button = (props: any) => {
  const {
    size = 'medium',
    type = 'primary',
    shape = 'fill',
    ...restProps
  } = props;
  return (
    <Wrapper
      as={AntButtom}
      custome_shape={shape}
      custome_size={size}
      custome_type={type}
      {...restProps}
    >
      {props.children}
    </Wrapper>
  );
};
