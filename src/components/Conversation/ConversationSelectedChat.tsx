import React, { useState, useEffect } from 'react';
import { ChatModel } from 'types';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';
import { Input } from 'antd';
import moment from 'moment';

import {
  ConversationMainChatItem,
  Flex,
  ConversationRecievedChat,
  ConversationSendChat,
  SpinnerView,
} from 'components';

import MoodIcon from 'assets/images/mood.svg';
import SendIcon from 'assets/images/send.svg';

import {
  Divider,
  SelectedChatListWrapper,
  SendMessageInput,
  ConversationInfo,
  EmojiWrapper,
  ConversationChats,
} from './conversation.style';

function OnClickOutside(ref: any, handler: any) {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

type Props = {
  chatList: ChatModel[];
  loading: boolean;
  onCreate: (body: string) => void;
  isSubmitting: boolean;
  patinetNumber: any;
  onArchive: () => void;
  onDelete: () => void;
  onRestore: () => void;
};
const ConversationSelectedChat = ({
  chatList,
  loading,
  onCreate,
  isSubmitting,
  patinetNumber,
  onArchive,
  onDelete,
  onRestore,
}: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.createRef<HTMLDivElement>();
  const [chatValue, setChatValue] = useState('');
  const [openEmoji, setOpenEmoji] = useState(false);
  useEffect(() => {
    scrollToBottom();
  }, [chatList]);
  const onEmojiClick = (event: any, emojiObject: any) => {
    setChatValue(chatValue + emojiObject.emoji);
  };

  const onEmojiOpen = () => {
    setOpenEmoji(!openEmoji);
  };

  const handleChanegInput = (e: any) => {
    setChatValue(e.target.value);
  };

  OnClickOutside(ref, () => setOpenEmoji(false));

  const scrollToBottom = () => {
    scrollRef?.current?.scrollIntoView({ behavior: 'smooth' });
    let scrollTop = scrollRef?.current?.scrollTop;
    scrollTop = scrollRef?.current?.scrollHeight;
  };
  const chatGroups = chatList.reduce((groups: any, chat) => {
    const date = chat.created_at.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(chat);
    return groups;
  }, {});
  let chatGroupArrays = Object.keys(chatGroups).map((date) => {
    return {
      date,
      list: chatGroups[date].sort(function (left: any, right: any) {
        return moment.utc(left.created_at).diff(moment.utc(right.created_at));
      }),
    };
  });
  chatGroupArrays.sort((x, y) => +new Date(x.date) - +new Date(y.date));

  return (
    <SelectedChatListWrapper>
      <ConversationMainChatItem
        patinetNumber={patinetNumber}
        onArchive={onArchive}
        onDelete={onDelete}
        onRestore={onRestore}
      />
      <ConversationInfo>
        {loading ? (
          <SpinnerView height="200px" />
        ) : (
          <ConversationChats className="designed-scroll">
            {chatGroupArrays.map((item) => {
              return (
                <div key={item.date}>
                  <Divider>
                    <span>
                      {moment().diff(item.date, 'days') > 0
                        ? moment(item.date).format('DD MMM')
                        : 'Today'}
                    </span>
                  </Divider>
                  {item.list?.map((item: any) => {
                    if (item.chat_type === 1)
                      return (
                        <ConversationRecievedChat
                          key={item.pk}
                          text={item.body}
                          time={item.created_at}
                          name={
                            patinetNumber?.patient_name
                              ? (patinetNumber?.patient_name).substr(0, 2)
                              : patinetNumber?.phone_number.substr(0, 2)
                          }
                        />
                      );
                    return (
                      <ConversationSendChat
                        key={item.pk}
                        text={item.body}
                        time={item.created_at}
                      />
                    );
                  })}
                </div>
              );
            })}
            <div ref={scrollRef}></div>
          </ConversationChats>
        )}

        <SendMessageInput>
          <Flex flexDirection="row" justifyContent="space-between">
            <Input
              placeholder="Type a message..."
              value={chatValue}
              onChange={handleChanegInput}
              onKeyDown={(e: any) => {
                if (e.code === 'Enter') {
                  if (chatValue !== '') {
                    onCreate(chatValue);
                    setChatValue('');
                  }
                }
              }}
            />
            <Flex>
              <img
                src={MoodIcon}
                alt="mood-icon"
                className="mood-icon"
                onClick={onEmojiOpen}
              />
              {isSubmitting ? (
                <SpinnerView height="10px" />
              ) : (
                <img
                  src={SendIcon}
                  alt="send-icon"
                  onClick={() => {
                    if (chatValue !== '') {
                      onCreate(chatValue);
                      setChatValue('');
                    }
                  }}
                />
              )}
            </Flex>
          </Flex>
        </SendMessageInput>
        {openEmoji && (
          <div ref={ref}>
            <EmojiWrapper>
              <Picker
                onEmojiClick={onEmojiClick}
                disableAutoFocus={true}
                skinTone={SKIN_TONE_MEDIUM_DARK}
                groupNames={{ smileys_people: 'PEOPLE' }}
                native
              />
            </EmojiWrapper>
          </div>
        )}
      </ConversationInfo>
    </SelectedChatListWrapper>
  );
};

export default ConversationSelectedChat;
