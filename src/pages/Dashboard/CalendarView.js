import React, { useState,useEffect } from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import styles from '../../dist/styles/DashboardStyles/DashboardStyles.module.css';

import moment from 'moment';
import Constants from '../../constants/Constants';

const data = {

  holidays: [
    {
      date: '2024-01-01',
      title: 'New Year',
    },
    {
      date: '2023-05-10',
      title: 'Bakrid',
    },
  ],
  events: [
    {
      start: '2023-05-03T15:00:00',
      end: '2023-05-03T16:00:00',
      title: 'Internal Meeting',
    },
    {
      start: '2023-05-11T00:00:00',
      end: '2023-05-11T23:59:59',
      title: 'Team Outing',
    },
  ]
};
function CalenderViewTwo() {
  const [events, setEvents] = useState(data.events);
  const [values,setValues]=useState([])
  useEffect(()=>{
    const fetchData = async () => {
      let fullurl = Constants.ADMSURL + 'holiday/findAll';
      try {
        const response = await fetch(fullurl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json(); 
      console.log("jsondata calendar....",jsonData)
        setValues(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[])
  const simplifiedHolidayArray = values.map(({ holidayName, date }) => ({ holidayName, date:new Date(date).toISOString().split('T')[0], }));

  console.log("simp val....",simplifiedHolidayArray)

 
  const handleSelect = ({ start, end }) => {
    
    if (isDisabled(start)) {
      const holiday = simplifiedHolidayArray.find(holiday => moment(holiday.date).isSame(start, 'day'));
      
      if (holiday) {
        alert(`It's a holiday (${holiday.holidayName})`);
      }
      else {
        alert("It's a weekend");
      }
    }
    else {
      const title = window.prompt('New Event name');
      if (title) {
        setEvents([...events, { start, end, title }]);
      }
    }
  };
  
  const eventStyleGetter = (event, start, end, isSelected) => {
    let backgroundColor = '#3174ad';
    let borderColor = '#3174ad';
    let color = '';
  
    if (event.type === 'holiday' || isHoliday(start)) {
      backgroundColor = '#d9d9d9';
      borderColor = '#d9d9d9';
      color = "#000000"
    } else {
      backgroundColor = '#8bc34a'; // set green color for non-holiday events
      borderColor = '#8bc34a';
      color= '#000000';
    }
  
    return {
      style: {
        backgroundColor,
        borderColor,
        color,
      },
    };
  };
  
  const isWeekend = date => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isToday = date => {
    return moment(date).isSame(new Date(), 'day');
  };

  const isHoliday = date => {
    return simplifiedHolidayArray.some(holiday => moment(holiday.date).isSame(date, 'day'));

  };

  const isDisabled = date => isWeekend(date) || isHoliday(date);

  const dayPropGetter = date => {
    if (isDisabled(date)) {
       const holiday = simplifiedHolidayArray.find(item => moment(item.date).isSame(date, 'day'));
      if (holiday) {
        return {
          className: 'disabled-day',
          style: {
            backgroundColor: '#ffb6c1',
          },
          title: holiday.title
        
        };
      }
      return {
        className: 'disabled-day',
        style: {
          backgroundColor: '#f5f5f5',
        },
      };
    }

    if (isToday(date)) {
        return {
          className: 'today',
          style: {
            backgroundColor: '#87cefa',
          },
        };
    }

    return {};
  };
  // const [value, onChange] = useState(new Date());

  return (
    <div className="w-100" >
       <Calendar 
       className={styles.Calendar} 
      //  onChange={onChange} 
      //  value={value} 
       selectable
       events={events}
       defaultView="month"
       scrollToTime={new Date(1970, 1, 1, 6)}
       defaultDate={new Date()}
       onSelectSlot={handleSelect}
       onSelectEvent={event => alert(event.title)}
       eventPropGetter={eventStyleGetter}
       dayPropGetter={dayPropGetter}/>
    </div>
    
  );
}

export default CalenderViewTwo;
