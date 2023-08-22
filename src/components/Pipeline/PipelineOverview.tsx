import React, { useState } from 'react';
import { OpportunityModel } from 'types';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import {
  Box,
  Flex,
  PipelineDraggableItem,
  PipelineHeaderItem,
} from 'components';

import { PipelineWrapper } from './pipeline.style';

type props = {
  list: OpportunityModel[];
  onChangeStatus: (id: any, status: any) => void;
  pipelineName: string;
};

const PipelineOverview = ({ list, onChangeStatus, pipelineName }: props) => {
  const columnsFromBackend = {
    first: {
      name:
        pipelineName === '1'
          ? 'Unscheduled hygiene reappointment'
          : 'Unscheduled treatment',
      items: list.filter((item) => item.call_status === 1),
    },
    second: {
      name: '1st Attempt',
      items: list.filter((item) => item.call_status === 2),
    },
    third: {
      name: '2st Attempt',
      items: list.filter((item) => item.call_status === 3),
    },
    fourth: {
      name: 'Booked',
      items: list.filter((item) => item.call_status === 4),
    },
    fifth: {
      name: 'Rejected',
      items: list.filter((item) => item.call_status === 5),
    },
  };
  const [columns, setColumns] = useState(columnsFromBackend);

  const getStatus = (droppableId: string) => {
    switch (droppableId) {
      case 'first':
        return 1;
      case 'second':
        return 2;
      case 'third':
        return 3;
      case 'fourth':
        return 4;
      case 'fifth':
        return 5;
      default:
        return 1;
    }
  };

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    onChangeStatus(result.draggableId, getStatus(destination?.droppableId));
    if (source.droppableId !== destination?.droppableId) {
      const sourceColumn = columns[source?.droppableId];
      const destColumn = columns[destination?.droppableId];
      const sourceItems = [...sourceColumn?.items];
      const destItems = [...destColumn?.items];
      const [removed] = sourceItems?.splice(source.index, 1);
      destItems.splice(destination?.index, 0, removed);
      setColumns({
        ...columns,
        [source?.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination?.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId.length];
      if (!column?.items) return;
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <PipelineWrapper>
      <Flex
        flexDirection="row"
        justifyContent="left"
        margin=" 0 24px 24px"
        height="100%"
        alignItems="flex-start"
        overflow="auto"
        className="designed-scroll-horizontal"
      >
        <DragDropContext
          onDragEnd={(result: any) => {
            onDragEnd(result, columns, setColumns);
          }}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Flex
                key={columnId}
                id={columnId}
                flexDirection="column"
                alignItems="left"
              >
                <PipelineHeaderItem column={column} />
                <Box>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <Box
                          width="320px"
                          height="64vh"
                          background="white"
                          padding="4px"
                          borderRadius=" 0 0 10px 10px"
                          overflow="auto"
                          className="designed-scroll"
                        >
                          <Box
                            height="100%"
                            minHeight="63vh"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                          >
                            {column.items.map((item: any, index: number) => {
                              return (
                                <Draggable
                                  key={item.pk.toString()}
                                  draggableId={item.pk.toString()}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <PipelineDraggableItem
                                      provided={provided}
                                      item={item}
                                    />
                                  )}
                                </Draggable>
                              );
                            })}
                            {provided.placeholder}
                          </Box>
                        </Box>
                      );
                    }}
                  </Droppable>
                </Box>
              </Flex>
            );
          })}
        </DragDropContext>
      </Flex>
    </PipelineWrapper>
  );
};

export default PipelineOverview;
