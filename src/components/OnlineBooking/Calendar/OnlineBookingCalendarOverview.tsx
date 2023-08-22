import React, { useState, useEffect } from 'react';
import FullCalendar, { DatesSetArg } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarContainer } from '../online-booking.style';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { onlineBookingSelector } from 'redux/selectors';

import { SpinnerView } from 'components';
import { forEach } from 'lodash';

type Props = {
  onDateChange: (start: string, end: string) => void;
  firstLoading: boolean;
};

const OnlineBookingCalendarOverview = ({
  onDateChange,
  firstLoading,
}: Props) => {
  const [date, setDate] = useState<{ start: string; end: string }>({
    start: '',
    end: '',
  });

  const { data: calendarEvents } = useSelector(
    onlineBookingSelector.selectCalendar
  );

  return (
    <CalendarContainer>
      {firstLoading ? (
        <SpinnerView height="50vh" />
      ) : (
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: '',
            center: 'prev,title,next',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          events={
            calendarEvents
              ? calendarEvents?.map((item) => ({
                  title: item.patient.full_name,
                  id: item.pk.toString(),
                  start: item.start_time,
                }))
              : []
          }
          // alternatively, use the `events` setting to fetch from a feed
          select={(select: any) => {}}
          eventClick={(eventClick) => {}}
          eventChange={(change) => {}}
          datesSet={(dateInfo: DatesSetArg) => {
            if (
              dateInfo.startStr === date.start &&
              dateInfo.endStr === date.end
            )
              return;

            setDate({ start: dateInfo.startStr, end: dateInfo.endStr });
            onDateChange(
              moment(dateInfo.start).format('YYYY-MM-DD'),
              moment(dateInfo.end).format('YYYY-MM-DD')
            );
          }}
          // eventsSet={(eventsSet) => console.log({ eventsSet })} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
        />
      )}
    </CalendarContainer>
  );
};

export default OnlineBookingCalendarOverview;
