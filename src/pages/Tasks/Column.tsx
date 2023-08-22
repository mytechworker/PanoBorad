import React from 'react';
import { Task} from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import AddCard from './AddCard';

interface InnerListProps {
  taskIds: any;
  tasks: any;
}

class InnerList extends React.Component<InnerListProps> {
  shouldComponentUpdate(nextProps:any) {
    if (nextProps.tasks === this.props.tasks) {
      return false;
    }
    return true;
  }
  render() {
    return this.props.tasks.map((task:any, index:any) => (
      <Task key={task.id} task={task} index={index} />
    ));
  }


}
interface ColumnProps {
  column: any;
  index: number;
  tasks: any;
}
export default class Column extends React.Component<ColumnProps> {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            className="bord_container"
            ref={provided.innerRef}
            // isDragging={snapshot.isDragging}
            {...provided.draggableProps}
          >
            <h3
              className="title"
              {...provided.dragHandleProps}
              // isDragging={snapshot.isDragging}
            >
              {this.props.column.title}
            </h3>
            <Droppable droppableId={this.props.column.id} type="TASK">
              {(provided, snapshot) => (
                <div
                  className="tasklist"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  // isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList
                    tasks={this.props.tasks}
                    taskIds={this.props.column.taskIds}
                  />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
            <AddCard />
          {/* <input type="button" value="add" onClick={AddCard}/> */}
          </div>
        )}
      </Draggable>
    );
  }
}

