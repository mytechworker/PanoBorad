import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import avatar from './imges/Ellipse 139.png';
import EditCardModal from './EditCardModal';

export const Task = (props: any) => {

  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div className="task_container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h4 className="card_head">Pan5795</h4>
          <h5 className="card_title">{props.task.content}</h5>
          <div className="time_date_wrap">
            <span className="time_date_content">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 13.6673C11.4 13.6673 12 13.0673 12 12.334V3.00065C12 2.26732 11.4 1.66732 10.6667 1.66732H10V0.333984H8.66667V1.66732H3.33333V0.333984H2V1.66732H1.33333C0.593333 1.66732 0.00666667 2.26732 0.00666667 3.00065L0 12.334C0 13.0673 0.593333 13.6673 1.33333 13.6673H10.6667ZM3.99996 6.33398H2.66663V7.66732H3.99996V6.33398ZM1.33337 4.334H10.6667V3.00067H1.33337V4.334ZM10.6667 5.6673V12.334H1.33337V5.6673H10.6667ZM8 7.66732H9.33333V6.33398H8V7.66732ZM6.6667 7.66732H5.33337V6.33398H6.6667V7.66732Z" fill="#6F7D97" />
              </svg>
              <span className="date_time">01 Apr 2021</span></span>
            <span className="time_date_content">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00065 0.333984C3.33398 0.333984 0.333984 3.33398 0.333984 7.00065C0.333984 10.6673 3.33398 13.6673 7.00065 13.6673C10.6673 13.6673 13.6673 10.6673 13.6673 7.00065C13.6673 3.33398 10.6673 0.333984 7.00065 0.333984ZM7.00069 12.334C4.06069 12.334 1.66735 9.94063 1.66735 7.00063C1.66735 4.06063 4.06069 1.6673 7.00069 1.6673C9.94069 1.6673 12.334 4.06063 12.334 7.00063C12.334 9.94063 9.94069 12.334 7.00069 12.334ZM6.33398 3.6673H7.33398V7.13397L10.334 8.93397L9.80065 9.80063L6.33398 7.6673V3.6673Z" fill="#6F7D97" />
              </svg>
              <span className="date_time"> 02:25 AM</span></span>
          </div>
          <div className="card_footer">
            <div className="icons_wrapper">
              <div className="icon_wrap">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.5H2C1.175 0.5 0.5 1.175 0.5 2V15.5L3.5 12.5H14C14.825 12.5 15.5 11.825 15.5 11V2C15.5 1.175 14.825 0.5 14 0.5ZM14 11H2.8775L2 11.8775V2H14V11ZM5.75 5.75H4.25V7.25H5.75V5.75ZM10.25 5.75H11.75V7.25H10.25V5.75ZM8.75 5.75H7.25V7.25H8.75V5.75Z" fill="#6F7D97" />
                </svg>
              </div>
              <div className="icon_wrap">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M0.125 0.75H9.125V2.25H0.125V0.75ZM0.125 3.75H9.125V5.25H0.125V3.75ZM0.125 8.25H6.125V6.75H0.125V8.25ZM15.875 6L14.75 4.875L10.6325 9L8.375 6.75L7.25 7.875L10.6325 11.25L15.875 6Z" fill="#6F7D97" />
                </svg>
              </div>
              <div className="icon_wrap">
                {/* <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2448 0.25C11.0573 0.25 10.8623 0.325 10.7198 0.4675L9.34729 1.84L12.1598 4.6525L13.5323 3.28C13.8248 2.9875 13.8248 2.515 13.5323 2.2225L11.7773 0.4675C11.6273 0.3175 11.4398 0.25 11.2448 0.25ZM8.545 4.76512L9.235 5.45512L2.44 12.2501H1.75V11.5601L8.545 4.76512ZM0.25 10.9374L8.545 2.64239L11.3575 5.45489L3.0625 13.7499H0.25V10.9374Z" fill="#6F7D97" />
                </svg> */}
                <EditCardModal />
              </div>
            </div>
            <div className="avtar_wrapper">
              <h6>{props.task.name}</h6>
              <div className="img_wrap"><img src={avatar} alt="img" /></div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );

}
