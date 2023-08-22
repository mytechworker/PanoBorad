import React, { useState } from 'react';
import { pipelineAction } from 'redux/actions';
import { usePromise } from 'hooks';
import { Flex, Box, SearchInput, Text, Button, SpinnerView } from 'components';
import { TagListSearchWrapper } from './patient-card.styles';
import { EditIcon, CheckIcon, TrashIcon } from 'helpers/icons';
type Props = {
  createTag?: () => void;
  list?: any;
  selectedTags?: any;
  onClickTag?: any;
  onEditTag?: any;
};

const PatientCardTagList = ({
  createTag,
  list,
  selectedTags,
  onClickTag,
  onEditTag,
}: Props) => {
  const promise = usePromise();
  const [strValue, setStrValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [deletting, setDeleting] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const onSearch = (searchValue: string) => {
    setLoading(true);
    promise(
      pipelineAction.loadAllTags({
        page: 1,
        page_size: '50',
        search: searchValue,
      })
    ).finally(() => {
      setLoading(false);
    });
  };
  const onDelete = (id: number) => {
    setDeleting(true);
    setDeleteId(id);
    promise(pipelineAction.removeTag(id))
      .then(() => {
        promise(
          pipelineAction.loadAllTags({
            page: 1,
            page_size: '50',
          })
        );
      })
      .finally(() => {
        setDeleting(false);
      });
  };
  return (
    <Box padding="0 10px">
      <TagListSearchWrapper>
        <SearchInput
          className="search-input"
          placeholder="Search tags..."
          onChange={(e) => setStrValue(e.currentTarget.value)}
          onPressEnter={(e) => {
            onSearch(e.currentTarget.value);
          }}
          onSearch={(searchValue: any) => onSearch(searchValue)}
        />
      </TagListSearchWrapper>
      <Text fontSize="14px" color="gray8" marginTop="24px">
        Tags
      </Text>
      <Box className="designed-scroll" height="200px">
        {selectedTags &&
          list?.map((tag: any) => {
            let selected = false;
            for (let i = 0; i < selectedTags.length; i++) {
              if (selectedTags[i].pk === tag.pk) {
                selected = true;
              }
            }
            return (
              <Flex
                marginBottom="10px"
                justifyContent="space-between"
                key={tag.pk}
              >
                <Box
                  borderRadius="3px"
                  width="88%"
                  background={'orange3'}
                  height="42px"
                  padding="8px 10px"
                  borderLeft={selected ? `3px solid ${tag.color}` : ''}
                  className="has-cursor"
                  onClick={() => onClickTag(tag.pk)}
                >
                  <Flex justifyContent="space-between">
                    <Text color={tag.color} weight="bold">
                      {tag?.title}
                    </Text>
                    {selected ? <CheckIcon color={tag.color} /> : null}
                  </Flex>
                </Box>
                <Box className="has-cursor" onClick={() => onEditTag(tag)}>
                  <EditIcon />
                </Box>
                <Box className="has-cursor" onClick={() => onDelete(tag.pk)}>
                  {deletting && deleteId === tag.pk ? (
                    <SpinnerView height="10px" />
                  ) : (
                    <TrashIcon />
                  )}
                </Box>
              </Flex>
            );
          })}
        {list && list.length === 0 && (
          <Flex>
            <Text fontSize="16px" color="gray8" marginTop="44px" weight="600">
              Click the button below to create tags
            </Text>
          </Flex>
        )}
      </Box>

      <Flex flexDirection="column" marginTop="80px">
        <Button onClick={createTag} width="230px">
          Create a New Tag
        </Button>
      </Flex>
    </Box>
  );
};
export default PatientCardTagList;
