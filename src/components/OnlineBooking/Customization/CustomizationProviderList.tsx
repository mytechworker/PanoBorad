import React from 'react';
import { Select } from 'antd';

import { ProviderModel } from 'types';
import { Flex, Box, Text, SpinnerView } from 'components';

import CustomizationTable from './CustomizationTable';
import { VoidExpression } from 'typescript';

type Props = {
  pageSize: number;
  count: number;
  changePage: (item: number) => void;
  current: number;
  onCustomizeInsurance: any;
  onSelect: (item: string) => void;
  loading: boolean;
  onEditProviderName: any;
  openHoursModal: any;
  dataSourceProvider: ProviderModel[];
  dataSource: any;
  openBlockHoursModal: any;
  page_size: number;
  tableLoading: boolean;
  specialties: [];
  loadProvider: any;
  providerInfo: any;
  providerInfoFetching: boolean;
};
const CustomizationProviderList = ({
  onCustomizeInsurance,
  dataSourceProvider,
  onEditProviderName,
  dataSource,
  loading,
  onSelect,
  page_size,
  tableLoading,
  count,
  current,
  changePage,
  specialties,
  loadProvider,
  providerInfo,
  providerInfoFetching,
}: any) => {
  return (
    <Box
      background="#fff"
      borderRadius="15px"
      padding="22px 24px"
      minHeight="697px"
      marginLeft="10px"
      position="relative"
      manWidth="791px"
      width="100%"
    >
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Box borderBottom="1px solid" borderColor="gray2" width="100%">
          <Text
            color="#000"
            weight="600"
            fontSize="16px"
            lineHeight="20.02px  "
            margin="37px 47px"
          >
            List Of Providers
          </Text>
        </Box>
        <Box
          width="100%"
          overflow="auto"
          height="560px"
          className="designed-scroll"
        >
          {loading ? (
            <SpinnerView height="300px" />
          ) : (
            <CustomizationTable
              onCustomizeInsurance={onCustomizeInsurance}
              dataSourceProvider={dataSourceProvider}
              dataSource={dataSource}
              onEditProviderName={onEditProviderName}
              specialties={specialties}
              loading={tableLoading}
              pageSize={page_size}
              count={count}
              current={current}
              changePage={changePage}
              onSelect={onSelect}
              loadProvider={loadProvider}
              providerInfo={providerInfo}
              providerInfoFetching={providerInfoFetching}
            />
          )}
        </Box>
      </Flex>
    </Box>
  );
};
export default CustomizationProviderList;
