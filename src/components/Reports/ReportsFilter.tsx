import React, { useState } from 'react';
import { DatePicker, Checkbox } from 'antd';
import moment from 'moment';

import { Box, Flex, Text } from 'components';
import { ArrowIcon } from 'helpers/icons';

import { ClearBtn, ApplyBtn } from './reports.styles';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { SettingFilterInfodModel } from 'types';

const { RangePicker } = DatePicker;

type Props = {
  onSelectFilters: (data: {
    startDate: string;
    endDate: string;
    charts: CheckboxValueType[];
  }) => void;
  filters?: SettingFilterInfodModel;
  onClearFilters: () => void;
};

const ReportsFilter = ({ onSelectFilters, filters, onClearFilters }: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [startDate, setStartDate] = useState(filters?.start_date ?? '');
  const [endDate, setEndDate] = useState(filters?.end_date ?? '');
  const [charts, setCharts] = useState<CheckboxValueType[]>(
    filters?.charts ?? []
  );

  const chartTypes = [
    { label: 'Visits', value: 'visits' },
    { label: 'Recare', value: 'recare' },
    { label: 'Production', value: 'production' },
    { label: 'Restorative/Elective Case', value: 'restorative_elective' },
    { label: 'Hygiene Case', value: 'hygiene' },
    { label: 'New Patients', value: 'new_patients' },
    { label: 'Hygiene Re-Appointment', value: 'reappointment' },
    { label: 'Cancellations', value: 'cancellations' },
  ];
  return (
    <Flex
      padding="0 16px"
      background="white"
      justifyContent="flex-end"
      height="36px"
    >
      <Text
        color="gray8"
        fontSize="13px"
        weight="600"
        onClick={() => setShowFilters(!showFilters)}
        className="has-cursor"
      >
        Showing data for:
      </Text>
      <RangePicker
        disabled={[false, false]}
        open={showFilters}
        className="reports-filter"
        separator="-"
        value={
          (filters?.start_date && filters?.end_date) 
            ? [moment(startDate), moment(endDate)]
            : null
        }
        onPanelChange={(change) => console.log(change)}
        onOk={(change) => console.log(change)}
        onChange={(dates) => {
          if (dates) {
            setStartDate(moment(dates[0]).format('YYYY-MM-DD'));
            setEndDate(moment(dates[1]).format('YYYY-MM-DD'));
          }
        }}
        renderExtraFooter={() => (
          <Box padding="10px">
            <Checkbox.Group
              options={chartTypes}
              value={charts}
              onChange={(types: CheckboxValueType[]) => setCharts(types)}
            />
            <Flex justifyContent="flex-end" flexGap="10px">
              <ClearBtn
                onClick={() => {
                  onClearFilters();
                  setShowFilters(false);
                }}
              >
                Clear
              </ClearBtn>
              <ApplyBtn
                onClick={() => {
                  onSelectFilters({
                    startDate,
                    endDate,
                    charts,
                  });
                  setShowFilters(false);
                }}
              >
                Apply
              </ApplyBtn>
            </Flex>
          </Box>
        )}
      />
      <Box onClick={() => setShowFilters(!showFilters)} className="has-cursor">
        <ArrowIcon color="gray8" width="9px" />
      </Box>
    </Flex>
  );
};

export default ReportsFilter;
