import React, { useState } from 'react';
import { Input } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { Flex } from 'components';
import { InsuranceModel } from 'types';

import { InsuranceWrapper } from '../online-booking.style';

type Porps = {
  onUpdate: (insuranceItem: InsuranceModel) => void;
  onCreate: (name: string) => void;
  insuranceItem?: InsuranceModel;
  onCancel: () => void;
};
export default ({
  onUpdate,
  insuranceItem,
  onCancel,
  onCreate,
}: Porps): JSX.Element => {
  const [insuranceName, setInsuranceName] = useState(insuranceItem?.name ?? '');
  return (
    <>
      <Flex background="#fff" borderRadius="5px" marginLeft="41px">
        <InsuranceWrapper
          as={Input}
          placeholder="Enter Insurance Name"
          size="large"
          value={insuranceName}
          onChange={(event: any) => setInsuranceName(event.target.value)}
          name="title"
          title="title"
        />
        <Flex>
          <CheckOutlined
            onClick={() =>
              insuranceItem
                ? onUpdate({ ...insuranceItem, name: insuranceName })
                : onCreate(insuranceName)
            }
          />
        </Flex>
        <Flex marginLeft="10px">
          <CloseOutlined onClick={() => onCancel()} />
        </Flex>
      </Flex>
    </>
  );
};
