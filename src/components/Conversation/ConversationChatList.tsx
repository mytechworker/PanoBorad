import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Tabs } from 'antd';
import { PatientNumberModel } from 'types';
import {
  ConversationChatItem,
  Box,
  Title5,
  SpinnerView,
  SearchInput,
  Button,
  Flex,
  Text,
} from 'components';

import { ChatListWrapper, SearchWrapper } from './conversation.style';
import { SMSIcon } from 'helpers/icons';

const { TabPane } = Tabs;
type Props = {
  list: PatientNumberModel[];
  onSearch: (value: string) => void;
  searchValue: string;
  handleChangeSearch: (e: any) => void;
  loading: boolean;
  onSelect: (item: PatientNumberModel) => void;
  count: number;
  onClickStartConversation: () => void;
  selectedPatientNumberId: number;
  tabKey: string;
  setTabKey: any;
  loadMore: () => void;
  chatLoading: boolean;
};
const ConversationChatList = ({
  onSelect,
  list,
  onSearch,
  searchValue,
  handleChangeSearch,
  loading,
  count,
  onClickStartConversation,
  selectedPatientNumberId,
  tabKey,
  setTabKey,
  chatLoading,
  loadMore,
}: Props) => {
  let allList = list?.filter((item) => !item.archive);
  let archiveList = list?.filter((item) => item.archive);
  const [selected, setSelected] = useState(selectedPatientNumberId);
  useEffect(() => {
    setSelected(selectedPatientNumberId);
  }, [selectedPatientNumberId]);
  return (
    <>
      <Box width="100%" position="relative">
        <Box>
          <Title5
            margin="0 12px 13px 0 "
            weight="bold"
            fontSize="18px"
            color="black1"
          >
            Conversation
          </Title5>
        </Box>
        <SearchWrapper>
          <SearchInput
            value={searchValue}
            placeholder="Search..."
            onChange={handleChangeSearch}
            onPressEnter={(e) => {
              onSearch(e.currentTarget.value);
            }}
            onSearch={(searchValue: any) => onSearch(searchValue)}
          />
        </SearchWrapper>
        {loading ? (
          <SpinnerView height="300px" />
        ) : (
          <Box marginTop="18px">
            <Tabs activeKey={tabKey} onChange={setTabKey}>
              <TabPane tab="All" key="all">
                <InfiniteScroll
                  dataLength={count ? count : 0}
                  next={loadMore}
                  hasMore={chatLoading}
                  loader={
                    <Flex>
                      {' '}
                      <SpinnerView height="300px" />
                    </Flex>
                  }
                  height={380}
                  className="designed-scroll"
                >
                  <ChatListWrapper as={Box} marginTop="20px">
                    {allList?.map((item: PatientNumberModel) => {
                      return (
                        <Box
                          key={item.pk}
                          marginBottom="10px"
                          className="has-cursor"
                        >
                          <ConversationChatItem
                            onClick={() => {
                              setSelected(item.pk);
                              onSelect(item);
                            }}
                            selected={selected === item.pk}
                            data={item}
                          />
                        </Box>
                      );
                    })}
                  </ChatListWrapper>
                </InfiniteScroll>
              </TabPane>
              <TabPane tab="Archive" key="archive">
                <ChatListWrapper as={Box} marginTop="20px">
                  {archiveList?.map((item) => {
                    return (
                      <Box
                        key={item.pk}
                        className="has-cursor"
                        marginBottom="10px"
                      >
                        <ConversationChatItem
                          data={item}
                          selected={selected === item.pk}
                          onClick={() => {
                            setSelected(item.pk);
                            onSelect(item);
                          }}
                        />
                      </Box>
                    );
                  })}
                </ChatListWrapper>
              </TabPane>
            </Tabs>
          </Box>
        )}
      </Box>
      <Box position="absolute" bottom="15px" marginLeft="-120px" left="50%">
        <Button onClick={onClickStartConversation}>
          <Flex flexDirection="row">
            <Box marginTop="2px" marginRight="10px">
              <SMSIcon />
            </Box>
            <Text fontSize="13px" weight="600" color="white">
              New Conversation
            </Text>
          </Flex>
        </Button>
      </Box>
    </>
  );
};

export default ConversationChatList;
