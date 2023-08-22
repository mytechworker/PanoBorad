import React, { useState, useEffect } from 'react';

import * as yup from 'yup';
import { Flex, Box, Text, Button } from 'components';
import { Input } from 'antd';
import { TagColorItem } from './patient-card.styles';

import { CheckIcon } from 'helpers/icons';

type Props = {
  onSubmit: any;
  onBack: () => void;
  loading: boolean;
  tag?: any;
};
let tags = [
  {
    color: '#64BC58',
    pk: 1,
  },
  {
    color: '#F2D435',
    pk: 2,
  },
  {
    color: '#FE9D32',
    pk: 3,
  },
  {
    color: '#EA594A',
    pk: 4,
  },
  {
    color: '#C27ADC',
    pk: 5,
  },
  {
    color: '#07A287',
    pk: 6,
  },
  {
    color: '#047BBC',
    pk: 7,
  },
  {
    color: '#14C3DE',
    pk: 8,
  },
  {
    color: '#FD7AC9',
    pk: 9,
  },
  {
    color: '#B3BAC4',
    pk: 10,
  },
];
const PatientCardAddNewTag = ({ onSubmit, onBack, loading, tag }: Props) => {
  const [selectedTag, setSelectedTag] = useState('#64BC58');
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (tag) {
      setSelectedTag(tag?.color);
      setTitle(tag?.title);
    }
  }, [tag]);
  return (
    <Box padding="0 10px">
      <Box className="password-input" margin="0 0 56px">
        <Text fontSize="14px" color="gray8" marginBottom="8px">
          Name
        </Text>
        <Input
          name="name"
          type="text"
          placeholder="Name of tag"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            height: 50,
          }}
        />
      </Box>
      <Text fontSize="14px" color="gray8" marginTop="24px" marginBottom="8px">
        Select Color
      </Text>
      <Flex flexDirection="row" justifyContent="space-between">
        {tags.map((tag) => {
          return (
            <TagColorItem
              color={tag.color}
              key={tag.pk}
              onClick={() => setSelectedTag(tag.color)}
            >
              {tag.color === selectedTag && <CheckIcon />}
            </TagColorItem>
          );
        })}
      </Flex>

      <Flex flexDirection="column" marginTop="35px">
        <Button
          size="medium"
          type="primary"
          shape="fill"
          width="245px"
          label="Create"
          loading={loading}
          onClick={() => onSubmit(title, selectedTag)}
        >
          {tag.pk > 0 ? 'Update' : 'Create'}
        </Button>
      </Flex>
    </Box>
  );
};
export default PatientCardAddNewTag;
