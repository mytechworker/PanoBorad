import React, { useState } from 'react';
import { Input, Spin } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { Flex } from 'components';
import { InputWrapper } from '../setting.styles';

import { usePromise } from 'hooks';

type Props = {
  onUpdatePhoneNumber: any;
  onCancel: () => void;
  numberName: string;
  loading: boolean;
};

const PhoneNumberUpdateNumber = ({
  onUpdatePhoneNumber,
  onCancel,
  numberName,
  loading,
}: Props) => {
  const [title, setTitle] = useState(numberName);

  return (
    <Spin spinning={loading}>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        borderBottom="1px solid"
        borderColor="gray2"
        padding="23px 0"
      >
        <Flex className="flex-1">
          <Flex background="#fff">
            <InputWrapper
              as={Input}
              value={title}
              placeholder={'Type Name'}
              size="large"
              onChange={(event: any) => setTitle(event.target.value)}
              name="title"
            />
            <CheckOutlined
              onClick={() => {
                onUpdatePhoneNumber(title);
              }}
            />
            <CloseOutlined onClick={onCancel} />
          </Flex>
        </Flex>
      </Flex>
    </Spin>
  );
};

export default PhoneNumberUpdateNumber;
