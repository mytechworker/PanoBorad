import React from 'react';
import './Task.css';
import initialData from './InitialData';
import Column from './Column';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Select } from 'antd';

const { Option } = Select;

function handleChange(value:any) {
  console.log(`selected ${value}`);
}

class InnerList extends React.PureComponent<{ column:any; taskMap:any; index:any }> {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId:any) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}

export default class App extends React.Component {
  
  state:any = initialData;

  onDragEnd = (result:any) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder,
      };
      this.setState(newState);
      return;
    }

    const home = this.state.columns[source.droppableId];
    const foreign = this.state.columns[destination.droppableId];

    if (home === foreign) {
      const newTaskIds = Array.from(home.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newHome = {
        ...home,
        taskIds: newTaskIds,
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newHome.id]: newHome,
        },
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const homeTaskIds = Array.from(home.taskIds);
    homeTaskIds.splice(source.index, 1);
    const newHome = {
      ...home,
      taskIds: homeTaskIds,
    };

    const foreignTaskIds = Array.from(foreign.taskIds);
    foreignTaskIds.splice(destination.index, 0, draggableId);
    const newForeign = {
      ...foreign,
      taskIds: foreignTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newHome.id]: newHome,
        [newForeign.id]: newForeign,
      },
    };
    this.setState(newState);
  };


  render() {
    console.log('---',this.state)
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="tasks_container">
        <div className="tasks_head">
          <h1 className="hedaer_title">Tasks Management</h1>

          <div className="selectbox_wrapper">
             <Select defaultValue="Filter" style={{ width: 120, marginRight:10 }}  size="large" onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="Action" style={{ width: 120, marginRight:10 }}  size="large" onChange={handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
        </div>
        
        <Droppable droppableId="board" direction="horizontal" type="COLUMN">
          {provided => (
            <div
              className="bords_wrapper"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.state.columnOrder.map((columnId:any, index:any) => {
                const column = this.state.columns[columnId];

                return (
                  <InnerList
                    key={column.id}
                    column={column}
                    index={index}
                    taskMap={this.state.tasks}
                  />
                );
              })}
            </div>
          )}
        </Droppable>
        </div>
      </DragDropContext>
    );
  }
}
