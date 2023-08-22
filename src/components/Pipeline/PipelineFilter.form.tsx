import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Form, Formik, FormikProps } from 'formik';
import { Select } from 'antd';

import {
  Box,
  Flex,
  InputElement,
  SubmitElement,
  Text,
  SelectElement,
} from 'components';

import { SelectDateWrpper } from './pipeline.style';

import Close from 'assets/images/close.svg';

type YearType = {
  year: string;
  months: { title: string; key: string }[];
};

type Props = {
  onCloseFilters: (change: boolean) => void;
  onSubmit: (search: any) => void;
  loading: boolean;
  pipelineName: string;
  onClearFilters: () => void;
  activeFilters: {
    name: string;
    tagName: string;
    year: string;
    month: string;
  };
};
const { Option } = Select;

export default ({
  onCloseFilters,
  onSubmit,
  loading,
  pipelineName,
  onClearFilters,
  activeFilters,
}: Props) => {
  const [availableYears, setAvailableYears] = useState<YearType[]>([]);
  const piplinesDate = {
    hygiene: {
      start: moment('2018-1-1'),
      end: moment().subtract(6, 'month'),
    },
    treatment: {
      start: moment().subtract(18, 'month'),
      end: moment(),
    },
  };
  useEffect(() => {
    const dateRange =
      pipelineName === '1' ? piplinesDate.hygiene : piplinesDate.treatment;
    const flagStartDate = dateRange.start;
    const tempYears: YearType[] = [];
    while (
      dateRange.end > flagStartDate ||
      flagStartDate.format('M') === dateRange.end.format('M')
    ) {
      const currentYear = tempYears.find(
        (item) => item.year === flagStartDate.format('YYYY')
      );
      if (currentYear) {
        currentYear.months.push({
          title: flagStartDate.format('MMMM'),
          key: flagStartDate.format('M'),
        });
      } else {
        tempYears.push({
          year: flagStartDate.format('YYYY'),
          months: [
            {
              title: flagStartDate.format('MMMM'),
              key: flagStartDate.format('M'),
            },
          ],
        });
      }

      flagStartDate.add(1, 'month');
    }
    setAvailableYears(tempYears);
  }, [pipelineName]);

  const handleMonths = (formik: FormikProps<any>) => {
    if (!formik.values.year) return [];
    const currentYear = availableYears.find(
      (item) => formik.values.year === item.year
    );
    if (!currentYear) return [];
    return currentYear.months;
  };

  return (
    <Formik
      initialValues={{
        year: activeFilters?.year ? activeFilters.year : undefined,
        month: activeFilters?.month ? activeFilters.month : undefined,
        name: activeFilters.name,
        tag: activeFilters.tagName,
      }}
      validateOnMount
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <Box background="white">
              <Flex
                justifyContent="flex-end"
                className="has-cursor"
                onClick={() => onCloseFilters(false)}
              >
                <img src={Close} alt="close" />
              </Flex>
              <InputElement
                formik={formik}
                label="Name"
                name="name"
                type="text"
                placeholder="Name"
              />
              <InputElement
                formik={formik}
                label="Tag"
                name="tag"
                type="text"
                placeholder="Tags"
              />
              <Box>
                <Flex justifyContent="space-between">
                  <Text color="gray8" marginBottom="2px">
                    Due Date
                  </Text>
                  <Text
                    color="primary"
                    marginBottom="2px"
                    className="has-cursor"
                    onClick={() => {
                      onClearFilters();
                      formik.resetForm();
                    }}
                  >
                    Clear
                  </Text>
                </Flex>

                <Flex flexGap="10px">
                  <SelectElement
                    formik={formik}
                    label=""
                    name="year"
                    placeholder="Year"
                    options={availableYears.map((item) => ({
                      title: item.year,
                      key: item.year,
                    }))}
                  />
                  <SelectElement
                    formik={formik}
                    label=""
                    name="month"
                    placeholder="Month"
                    disabled={!formik.values.year}
                    options={formik.values.year ? handleMonths(formik) : []}
                  />
                </Flex>
              </Box>
              <Box marginTop="10px">
                <SubmitElement
                  formik={formik}
                  label="Filter"
                  width="100px"
                  loading={loading}
                />
              </Box>
            </Box>
          </Form>
        );
      }}
    </Formik>
  );
};
